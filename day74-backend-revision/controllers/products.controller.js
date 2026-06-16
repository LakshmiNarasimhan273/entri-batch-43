const productModel = require("../models/products.model");

// API Logics

// GET API
const allproducts = async (req, res) => {
    try{
        const products = await productModel.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message: "Products fetching failed"});
    }
};

// POST API
const createProduct = async (req, res) => {
    try{
        const { title, description, price, isStock, category } = req.body;

        const newProduct = await productModel.create({title, description, price, isStock, category});
        res.status(201).json({message: "Product Added"});

    }catch(err){
        res.status(500).json({message: "Product Creation failed"});
    }
};

// PUT API
const updateProduct = async (req, res) => {
    try{
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, 
            {new: true}
        );
        res.status(200).json({message: "Product updated"});
    }catch(err){
        res.status(500).json({message: "Product updation failed"});
    }
};

// DELETE API
const deleteProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Product deleted"});
    }catch(err){
        res.status(500).json({message: "Product Deletion failed"});
    }
};

module.exports = { allproducts, createProduct, updateProduct, deleteProduct };