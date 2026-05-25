const express = require("express");
const router = express.Router();

const productController = require("../controller/products.controller");

// http://localhost:8080/all-products
router.get("/all-products", productController.getProducts);

router.post("/create", productController.createProduct);

router.put("/edit", productController.updateProduct);

router.delete("/delete", productController.deleteProduct);

module.exports = router;