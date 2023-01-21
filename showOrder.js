require('./models');
const sequelize = require("./config/sequelize");
const { Order, Product } = require('./models');

const main = async () => {
    try {
        await sequelize.authenticate();
        
        const order = await Order.findByPk(6);
        const products = await order.getProducts();

        console.log(`
            Data da compra: ${new Date(order.createdAt).toLocaleDateString()}
            Produtos: \n${products.map((product, index) => `
                produto #${index}: ${product.name}
            `).join('')}
        `);
    } catch(error) {
        console.error('Unable to connect to the database: ', error);    
    }    
}

main();

