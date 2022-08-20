import Orders from "./orders";
import Products from "./products";

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
