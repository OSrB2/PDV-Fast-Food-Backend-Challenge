import db from "../../../infrastructure/database/index";
import { DataTypes } from "sequelize";
import { uuid } from "uuidv4";

export const Client = db.define(
  "client",
  {
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "client",
  }
);
