'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    ).then(_ => {
      queryInterface.bulkInsert('users', [
        { name: 'Alex' },
        { name: 'Mara' },
        { name: 'Levi' },
        { name: 'Allison' },
        { name: 'Hermione' },
        { name: 'Harry' },
        { name: 'Weston' },
        { name: 'Becca' },
        { name: 'Valerie' },
        { name: 'Timothy' }
      ])
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users')
  }
};
