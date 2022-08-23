"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admin", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      name: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        defaultValue: 1,
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
    await queryInterface.dropTable("admin");
  },
};
