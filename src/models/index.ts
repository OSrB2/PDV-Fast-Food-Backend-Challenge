import Orders from "../domain/order/models/ordersModel";
import Products from "../domain/product/models/productsModel";

Orders.hasMany(Products, {
  foreignKey: "product_id",
});

Products.hasMany(Orders, {
  foreignKey: "orders_id",
});

export default {
  Products,
  Orders,
};
