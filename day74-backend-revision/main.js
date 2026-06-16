const express = require("express");
const app = express();
require("dotenv").config();

const dbConnection = require("./config/dbConnection.config");
const productRoutes = require("./routes/products.routes");
const osRoutes = require("./routes/system.routes");

app.use(express.json());
app.use("/api/products", productRoutes);
app.use(osRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server up and running on ${process.env.port}`);
});