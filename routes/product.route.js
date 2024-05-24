const express = require("express");
const router = express.Router();
const { getProducts, postProducts, getProductsById, updateProduct, delteProduct } = require('../controllers/product.controller')

router.get('/', getProducts)

router.post('/', postProducts)

router.get('/:id', getProductsById)

router.put('/:id', updateProduct)

router.delete('/:id', delteProduct)

module.exports = router;