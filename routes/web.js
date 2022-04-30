const express = require('express');
const path = require('path');
const router = express.Router();

const routDir = require('../util/path')

router.get('/', (req, res) => {
    res.sendFile(path.join(routDir, 'views', 'shop.html'))
});

module.exports = router;