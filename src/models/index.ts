import { BelongsTo } from './../../node_modules/sequelize/types/associations/belongs-to.d';
import { Orders } from "../domain/order/models/ordersModel";
import { Products } from "../domain/product/models/productsModel";
import { OrderItems } from "../domain/order/models/orderItemsModel";

// Orders.hasMany(Products, {
//   foreignKey: "product_id",
// });

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

// Exportar os modelos
export default {
  Products,
  Orders,
  OrderItems,
};
