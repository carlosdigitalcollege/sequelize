require('./models');
const sequelize = require("./config/sequelize");

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    
        console.log('Sucesso!');
    } catch(error) {
        console.error('Unable to connect to the database: ', error);    
    }    
}

main();

