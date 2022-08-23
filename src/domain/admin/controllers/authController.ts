import { Request, Response } from "express";
import { Admin } from "../models/adminModel";
import jwt from "jsonwebtoken";
import { secret } from "../../../config/secret";
import bcrypt from "bcryptjs";

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const adminExist = await Admin.findOne({
        where: {
          email,
          status: true,
        },
      });

      if (!adminExist) {
        return res.status(404).json("Email not found");
      }

      if (!adminExist || bcrypt.compareSync(password, adminExist.password)) {
        return res.status(401).json("Invalid email or password");
      }

      const token = jwt.sign(
        {
          id: adminExist.id,
          email: adminExist.email,
          name: adminExist.name,
        },
        secret.key
      );

      const data = { token: token, admin: adminExist };

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json("Something went wrong, contact support");
    }
  },
};
