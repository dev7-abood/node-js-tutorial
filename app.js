const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webRoutes = require('./routes/web');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require("path");
const routDir = require("./util/path");
const port = 3000;

app.use(bodyParser.urlencoded({extended : false}));

app.use('/' ,webRoutes);
app.use('/admin' ,adminRoutes);
app.use('/shop' ,shopRoutes);

app.use((req, res, next) => {
   res.status(404).sendFile(path.join(routDir, 'views', '404.html'))
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});