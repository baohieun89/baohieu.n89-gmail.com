const express = require('express');

var controller = require('../controllers/products.controller')

var router = express.Router();

router.get('/', controller.index);

module.exports = router;