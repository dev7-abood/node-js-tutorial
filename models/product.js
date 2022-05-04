const sequelize = require('../config/database');
const products = require('../database/migrations/products');

const Product = sequelize.define('products', products)

// Product.sync()
module.exports = Product;