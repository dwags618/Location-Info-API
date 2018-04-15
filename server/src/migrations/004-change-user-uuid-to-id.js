'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'uuid', 'id');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'id', 'uuid');
  }
}
