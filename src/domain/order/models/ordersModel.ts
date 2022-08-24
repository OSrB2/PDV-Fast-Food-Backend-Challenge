import db from "../../../infrastructure/database/index";
import { DataTypes } from "sequelize";
import { Products } from "../../product/models/productsModel";

export const Orders = db.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    client: {
      type: DataTypes.STRING(70),
      allowNull: false,
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
    note: {
      type: DataTypes.STRING(300),
      allowNull: true,
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
    tableName: "order",
  }
);
