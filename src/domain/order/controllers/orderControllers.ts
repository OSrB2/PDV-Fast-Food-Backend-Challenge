import { Request, Response } from "express";
import { orderService } from "../services";

export const OrderController = {
  async create(req: Request, res: Response) {
    try {
      const { client, product_id, product_name, quantity, total, payment, note } = req.body;
      const newOrder = await orderService.createOrder(
        client,
        product_id,
        product_name,
        quantity,
        total,
        payment,
        note
      );

      return res.status(201).json(newOrder);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const findOrder = await orderService.allOrders();

      return res.status(200).json(findOrder);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async getByID(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findOrder = await orderService.orderID(id);

      if (!findOrder) {
        return res.status(404).json("Client not found");
      }

      return res.status(200).json(findOrder);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { product_id, total, situation, payment, note } = req.body;

      if (!id) {
        return res.status(404).json("Order not found");
      }

      const orderUpdated = await orderService.updateOrder(
        product_id,
        total,
        situation,
        payment,
        note
      );

      return res.status(200).json(orderUpdated);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async close(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(404).json("Order not found");
      }

      await orderService.finishOrder(id);

      return res.status(200).json("Completed order");
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },
};
