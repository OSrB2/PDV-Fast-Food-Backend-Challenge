import db from "../../../infrastructure/database/index";
import { DataTypes } from "sequelize";
import { uuid } from "uuidv4";

export const Admin = db.define("admin", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: uuid,
  },
  name: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER(),
    allowNull: false,
    defaultValue: 1,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  upDATEdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
