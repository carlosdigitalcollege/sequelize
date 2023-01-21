require('./models');
const sequelize = require("./config/sequelize");
const { Product } = require('./models');

const main = async () => {
    try {
        await sequelize.authenticate();
        
        Product.create({
            name: 'Test',
            sku: 'salkdja',
            price: 12.90
        })
    } catch(error) {
        console.error('Unable to connect to the database: ', error);    
    }    
}

main();

