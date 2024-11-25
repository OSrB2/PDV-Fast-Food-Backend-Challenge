import { productService } from "./../../product/services/index";
import { Orders } from "../models/ordersModel";
import { formatDate } from "../../../utils/dateUtils";
import { OrderItems } from "../models/orderItemsModel";

export class OrderService {
  async createOrder(
    client: string,
    items: {product_id: string; quantity: number }[],
    payment: string,
    note: string
  ) {
    const orderItems = [];
    let totalOrder = 0;

    for (const item of items) {
      const product = await productService.productID(item.product_id);

      if (!product) {
        throw new Error(`Product with id ${item.product_id} not found!`)
      }

      const totalItem = product.price * item.quantity;
      totalOrder += totalItem;

      orderItems.push({
        product_id: product.id,
        product_name: product.name,
        quantity: item.quantity,
        price: product.price,
        total: totalItem,
      });
    }

    const newOrder = await Orders.create(
      {
        client,
        situation: "open",
        payment,
        note,
      },
      {
        include: [{ model: OrderItems, as: "items" }],
      }
    );

    await OrderItems.bulkCreate(
      orderItems.map((item) => ({
        ...item,
        order_id: newOrder.id,
      }))
    );

    //format date
    const orderData = newOrder.get({ plain: true });
    orderData.createdAt = formatDate(orderData.createdAt);
    orderData.updatedAt = formatDate(orderData.updatedAt);

    return orderData;
  }

  async allOrders() {
    const orders = await Orders.findAll();

    return orders;
  }

  async orderID(id: string) {
    const checkOrder = await Orders.findByPk(id);

    return checkOrder;
  }

  async updateOrder(
    id: string,
    product_id: string,
    total: number,
    payment: string,
    note: string
  ) {
    const orderUpdated = await Orders.update(
      {
        product_id,
        total,
        situation: "preparation",
        payment,
        note,
      },
      {
        where: {
          id,
        },
      }
    );
    return orderUpdated;
  }

  async finishOrder(id: string) {
    const closeOrder = await Orders.update(
      {
        situation: "finished",
      },
      {
        where: {
          id,
        },
      }
    );

    return closeOrder;
  }
}
