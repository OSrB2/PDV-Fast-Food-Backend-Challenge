import db from "../infrastructure/database/index";
import { DataTypes } from "sequelize";
import { Products } from "./products";
import { Client } from "./client";

export const Orders = db.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
      references: {
        model: Client,
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
      references: {
        model: Products,
        key: "id",
      },
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0,
    },
    situation: {
      type: DataTypes.ENUM("open", "preparation", "finished"),
      allowNull: false,
      default: "open",
    },
    payment: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "orders",
  }
);

export default Orders;
