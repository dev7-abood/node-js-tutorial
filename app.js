require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webRoutes = require('./routes/web');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require("path");
const routDir = require("./util/path");


// const sequelize = require('./config/database');
const productsModel = require('./models/product');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(routDir, 'public')));
app.set('view engine', 'pug');
app.set('views', 'views');

app.use('/', webRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(routDir, 'views', '404.html'));
});

const port = process.env.PORT;

productsModel.sync().then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

productsModel.create({
    title : 'Abood',
    price : 25.2,
    imageUrl : 'imageUrl',
    description : 'description'
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});