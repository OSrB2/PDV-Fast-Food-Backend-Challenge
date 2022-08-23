import express from "express";
import { ClientController } from "../domain/client/controllers/clientController";

const clientRoutes = express.Router();

clientRoutes.post("/client", ClientController.create);
clientRoutes.get("/clients", ClientController.getAll);
clientRoutes.get("/client/:id", ClientController.getOneByID);
clientRoutes.patch("/client/disable/:id", ClientController.inactivateClient);

export default clientRoutes;
