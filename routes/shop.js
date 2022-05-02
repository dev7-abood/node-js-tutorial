const path = require('path');

const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const helloWorldFromController = require('../controllers/products')

// import {helloWorldFromController} from "../controllers/products";

// router.get('/', (req, res, next) => {
//   // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//   //   res.render('shop', {name : 'cgvvccggg'})
// });


router.get('/:name?', helloWorldFromController.helloWorldFromController);

module.exports = router;
