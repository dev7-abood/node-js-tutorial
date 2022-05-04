const Sequelize = require('Sequelize')

const migrate = {
    id : {
        type : Sequelize.BIGINT,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    title : {
        type : Sequelize.STRING
    },
    price : {
        type : Sequelize.DOUBLE,
        allowNull : false
    },
    imageUrl : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.TEXT,
        allowNull : false
    }
}

module.exports = migrate;