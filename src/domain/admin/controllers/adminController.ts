import { Request, Response } from "express";
import { adminService } from "../service";

export const AdminController = {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const findAdmin = await adminService.checkEmail(email);

      if (findAdmin) {
        return res.status(400).json("E-mail already registered");
      }

      const newAdmin = await adminService.createAdmin(name, email, password);

      return res.status(201).json(newAdmin);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async getAdmin(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const showAdmin = await adminService.getID(id);

      if (!showAdmin) {
        return res.status(404).json("User not found");
      }

      return res.status(200).json(showAdmin);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const findAdmin = await adminService.checkEmail(email);

      if (!findAdmin) {
        return res.status(400).json("User not found");
      }

      const updatedAdmin = await adminService.updateAdmin(
        id,
        name,
        email,
        password
      );

      return res.status(201).json(updatedAdmin);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },

  async removeAdmin(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(404).json("User not found");
      }

      await adminService.disableAdmin(id);
      return res.status(200).json("User removed");
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },
};
