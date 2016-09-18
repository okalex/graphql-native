'use strict';

const { hashSync } = require('../server/util/password-utils')

const genUser = (name) => return {
  name: name,
  email: name.toLowerCase() + '@email.com',
  password_hash: hashSync(name.toLowerCase())
}

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
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    ).then(_ => {
      const names = ['Alex', 'Mara', 'Levi', 'Allison', 'Hermione', 'Harry', 'Weston', 'Becca', 'Valerie', 'Timothy']
      let users = names.map(genUser)
      queryInterface.bulkInsert('users', users)
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users')
  }
};
