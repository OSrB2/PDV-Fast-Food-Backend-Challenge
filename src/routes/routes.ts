import express from "express";
import orderRoutes from "./orderRoutes";
import prodRoutes from "./productRoutes";


const routes = express.Router();

routes.use(orderRoutes);
routes.use(prodRoutes);


export default routes;
