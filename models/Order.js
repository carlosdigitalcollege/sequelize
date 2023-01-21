const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Order = sequelize.define('Order', {
    date: DataTypes.DATE,
    status: DataTypes.STRING
});

module.exports = Order
