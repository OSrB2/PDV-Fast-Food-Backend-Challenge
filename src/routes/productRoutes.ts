import express from "express";
import { ProductController } from "../domain/product/controllers/productController";
import { prodValidation } from "../domain/product/validation"


const prodRoutes = express.Router();

prodRoutes.post("/products",prodValidation.create, ProductController.create);
prodRoutes.get("/products", ProductController.getAll);
prodRoutes.get("/products/:id", ProductController.getByID);
prodRoutes.get("/product/:name", ProductController.prodByName);
prodRoutes.put("/product/update/:id", prodValidation.update, ProductController.update);
prodRoutes.patch("/product/disable/:id", prodValidation.disable, ProductController.disable);

export default prodRoutes;
