import { productService } from './../../product/services/index';
import { Orders } from '../models/ordersModel';
import { formatDate } from '../../../utils/dateUtils';

export class OrderService {
  async createOrder(
    client: string,
    product_id: string,
    product_name: string,
    quantity: number,
    total: number,
    payment: string,
    note: string
  ) {

    const product = await productService.productID(product_id);

    total = product.price * quantity;
    product_name = product.name;

    const newOrder = await Orders.create({
      client,
      product_id,
      product_name,
      quantity,
      total,
      situation: "open",
      payment,
      note,
    });

    //format date
    const orderData = newOrder.get({ plain: true});
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
