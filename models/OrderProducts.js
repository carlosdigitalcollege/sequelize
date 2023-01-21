const Order = require('./Order');
const Product = require('./Product');

Product.belongsToMany(Order, { through: 'Order_Products' });
Order.belongsToMany(Product, { through: 'Order_Products' });
