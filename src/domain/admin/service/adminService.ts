import { Admin } from "../models/adminModel";
import bcrypt from "bcryptjs";

export class AdminService {
  async createAdmin(name: string, email: string, password: string) {
    const newPass = bcrypt.hashSync(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: newPass,
    });

    return admin;
  }

  async checkEmail(email: string) {
    const findAdmin = await Admin.count({
      where: {
        email,
      },
    });
    return findAdmin;
  }

  async getID(id: string) {
    const findAmin = await Admin.findAll();

    return findAmin;
  }

  async updateAdmin(id: string, name: string, email: string, password: string) {
    const newPass = bcrypt.hashSync(password, 10);

    const adminUpdated = await Admin.update(
      {
        name,
        email,
        password: newPass,
      },
      {
        where: {
          id,
        },
      }
    );
    return adminUpdated;
  }

  async disableAdmin(id: string) {
    const disable = await Admin.update(
      {
        status: false,
      },
      {
        where: {
          id,
        },
      }
    );
    return disable;
  }
}
