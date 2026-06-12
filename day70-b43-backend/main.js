const express = require("express");
const app = express();
require("dotenv").config();

const dbConnection = require("./config/dbconnection.config");
const taskRoutes = require("./routes/task.route");

app.use(express.json());
app.use("/tasks", taskRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server running on ${process.env.port}`);
});