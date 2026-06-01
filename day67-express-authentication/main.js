const express = require("express");

require("dotenv").config(); 

const app = express();

const authRoutes = require("./routes/auth.routes");

app.use(express.json());
app.use("/auth", authRoutes);

let port = process.env.serverport;    

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});