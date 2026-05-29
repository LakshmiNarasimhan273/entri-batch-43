const express = require("express");
const app = express();

const employeeRoutes = require("./routes/employee.routes");

app.use(express.json());
app.use("/employees", employeeRoutes);

let port = 8080;

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});