"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      client: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      product_id: {
        type: Sequelize.UUID,
        allowNull: false,
        foreingKey: true,
        references: {
          model: "products",
          key: "id",
        },
      },
      product_name: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        default: 0,
      },
      situation: {
        type: Sequelize.ENUM("open", "preparation", "finished"),
        allowNull: false,
        default: "open",
      },
      payment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
