function getProducts(req, res) {
    // api logics
    res.json({ message: "All Products fetched successfully" });
}

function createProduct(req, res){
    // api logic -> should be create a data from user input
    res.json({message: "Product Added"});
}

function updateProduct(req, res){
    res.json({message: "Product Updated"});
}

function deleteProduct(req, res){
    res.json({message: "Product Deleted"});
}

// exports default
module.exports = {getProducts, createProduct, updateProduct, deleteProduct};