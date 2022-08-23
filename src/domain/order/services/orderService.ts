import { Orders } from "../models/ordersModel";

export class OrderService {
  async createOrder(
    client_id: string,
    product_id: string,
    total: number,
    payment: string,
    note: string
  ) {
    const newOrder = await Orders.create({
      client_id,
      product_id,
      total,
      situation: "open",
      payment,
      note,
    });

    return newOrder;
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
