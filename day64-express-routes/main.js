const express = require("express");
const app = express();

const productRoutes = require("./routes/products.routes");

app.use(productRoutes);

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});