import express from "express";
import clientRoutes from "./clientRoutes";
import orderRoutes from "./orderRoutes";
import prodRoutes from "./productRoutes";

const routes = express.Router();

routes.use(clientRoutes);
routes.use(orderRoutes);
routes.use(prodRoutes);

export default routes;
