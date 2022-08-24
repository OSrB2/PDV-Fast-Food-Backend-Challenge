"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: uuidv4(),
          name: "Hamburguer",
          product_code: 132,
          description: "Beef, lettuce, cheese, sauce, onion",
          price: 18.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Chicken hamburguer",
          product_code: 135,
          description: "Chicken meat, lettuce, cheese, sauce, onion",
          price: 15.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Natural Sandwich",
          product_code: 137,
          description: "chicken, onion, tomato, carrot, corn, parsley, sauce",
          price: 12.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Soda",
          product_code: 122,
          description: "coke, lemon, grape, orange",
          price: 6.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Water",
          product_code: 120,
          description: "",
          price: 3.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "natural juice",
          product_code: 125,
          description: "strawberry, orange, pineapple, passion fruit",
          price: 6.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
