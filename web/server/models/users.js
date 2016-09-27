/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		passwordHash: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'users',
    timestamps: true
	});
};
