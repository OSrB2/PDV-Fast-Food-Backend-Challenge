import { OrderItems } from "../domain/order/models/orderItemsModel";
import { Orders } from "../domain/order/models/ordersModel";
import { Products } from "../domain/product/models/productsModel";

export function setupAssociations() {
  Orders.hasMany(OrderItems, {
    foreignKey: "order_id",
    as: "items",
  });

  OrderItems.belongsTo(Orders, {
    foreignKey: "order_id",
    as: "order",
  });

  OrderItems.belongsTo(Products, {
    foreignKey: "product_id",
    as: "product",
  });
}
