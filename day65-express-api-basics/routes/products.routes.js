const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.controller");

router.get("/products", productController.allProducts);

router.post("/create", productController.createProduct);

module.exports = router;