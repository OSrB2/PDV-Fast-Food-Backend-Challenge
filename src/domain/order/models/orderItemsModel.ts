import { DataTypes } from "sequelize";
import db from "../../../infrastructure/database";
import { Orders } from "./ordersModel";
import { Products } from "../../product/models/productsModel";

export const OrderItems = db.define (
  "order_items",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Orders,
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Products,
        key: "id",
      },
    },
    product_name: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "order_items",
  }
);
