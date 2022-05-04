require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webRoutes = require('./routes/web');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require("path");
const routDir = require("./util/path");
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(routDir, 'public')));
app.set('view engine', 'pug');
app.set('views', 'views');

app.use('/' ,webRoutes);
app.use('/admin' ,adminRoutes);
app.use('/shop' ,shopRoutes);

app.use((req, res, next) => {
   res.status(404).sendFile(path.join(routDir, 'views', '404.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});