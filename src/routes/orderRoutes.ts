import express from "express";
import { OrderController } from "../domain/order/controllers/orderControllers";
import { orderValidation } from "../domain/order/validation";


const orderRoutes = express.Router();

orderRoutes.post("/order", orderValidation.create, OrderController.create);
orderRoutes.get("/orders",OrderController.getAll);
orderRoutes.get("/order/:id",OrderController.getByID);
orderRoutes.put("/order/update/:id",orderValidation.update, OrderController.update);
orderRoutes.patch("/order/close/:id",orderValidation.close, OrderController.close);

export default orderRoutes;
