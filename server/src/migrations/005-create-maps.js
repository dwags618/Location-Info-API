'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Maps', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      siteNumber: {
        type: Sequelize.STRING,
        notEmpty: true
        },
      value: {
        type: Sequelize.STRING,
        notEmpty: true
        },
      name: {
        type: Sequelize.STRING,
        allowNull: false
        },
      surfaceType: {
        type: Sequelize.STRING,
        allowNull: false
        },
      zone: {
        type: Sequelize.STRING,
        allowNull: false
        },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Maps');
  }
}
