import { Request, Response } from "express";
import { clientService } from "../services";

export const ClientController = {
  async create(req: Request, res: Response) {
    try {
      const newClient = await clientService.createClient(req.body);

      return res.status(201).json(newClient);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const findClient = await clientService.allClient();

      return res.status(200).json(findClient);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async getOneByID(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findClient = await clientService.clientID(id);

      if (!findClient) {
        return res.status(404).json("Client not found");
      }

      return res.status(200).json(findClient);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async inactivateClient(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findClient = await clientService.clientID(id);

      if (!findClient) {
        return res.status(404).json("Client not found");
      }

      await clientService.disableClient(findClient);
      console.log(findClient);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },
};
