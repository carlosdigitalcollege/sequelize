require('./models');
const sequelize = require("./config/sequelize");
const { Order, Product } = require('./models');

const main = async () => {
    try {
        await sequelize.authenticate();
        
        const products = await Product.findAll({ limit: 3 });
        
        const order = await Order.create({
            status: 'new',
        })

        products.forEach((product) => {
            order.addProduct(product);
        })

        order.update();

        console.log(products.length);
    } catch(error) {
        console.error('Unable to connect to the database: ', error);    
    }    
}

main();

