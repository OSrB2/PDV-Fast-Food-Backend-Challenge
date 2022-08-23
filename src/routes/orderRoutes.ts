import express from "express";
import { OrderController } from "../domain/order/controllers/orderControllers";

const orderRoutes = express.Router();

orderRoutes.post("/order", OrderController.create);
orderRoutes.get("/orders", OrderController.getAll);
orderRoutes.get("/order/:id", OrderController.getByID);
orderRoutes.put("/order/update/:id", OrderController.update);
orderRoutes.patch("/order/close/:id", OrderController.close);

export default orderRoutes;
