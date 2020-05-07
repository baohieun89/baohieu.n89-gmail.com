const express = require('express');
var multer  = require('multer');


var bodyParser = require('body-parser');
var controller = require('../controllers/books.controller')
var router = express.Router();
router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))
var upload = multer({ dest: './public/images/covers' })


router.get("/", controller.index)
router.get('/cart', controller.cart)
router.get('/cart/lend', controller.lend)
router.get("/add", controller.add)
router.post('/add',upload.single('cover'), controller.postAdd)

router.get('/add-to-cart/:bookID', controller.addToCart)
router.get('/edit/:id', controller.edit);
router.post('/edit/:id', controller.postEdit);

router.get('/delete/:id', controller.delete);


module.exports = router;
