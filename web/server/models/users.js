/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: 'now()'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: 'now()'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password_hash: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'users'
	});
};
