const express = require('express')

const {getProducts,getProductById} = require('../controllers/productController')
const routes = express.Router()

routes.get('/',getProducts);
routes.get("/:id",getProductById)


module.exports = routes