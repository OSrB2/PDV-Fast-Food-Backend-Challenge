import express from "express";
import { ProductController } from "../domain/product/controllers/productController";

const prodRoutes = express.Router();

prodRoutes.post("/products", ProductController.create);
prodRoutes.get("/products", ProductController.getAll);
prodRoutes.get("/products/:id", ProductController.getByID);
prodRoutes.get("/product/:name", ProductController.prodByName);
prodRoutes.put("/product/update/:id", ProductController.update);
prodRoutes.patch("/product/disable/:id", ProductController.disable);

export default prodRoutes;
