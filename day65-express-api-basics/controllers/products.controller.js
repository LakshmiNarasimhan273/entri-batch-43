const productModel = require("../models/products.model");

// get function
function allProducts(req, res) {
    
    if (productModel.length === 0) {
        return res.json({ message: "No Products Added" });
    }

    res.json(productModel);
}

// post function
function createProduct(req, res){
    const { title, price, category } = req.body;

    // new object
    const newProduct = {
        id: Date.now().toString(),
        title,
        price,
        category
    }
    productModel.push(newProduct);

    res.json({message: "Product Added"});
}

module.exports = { allProducts, createProduct };