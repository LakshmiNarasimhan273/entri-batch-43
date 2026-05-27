const express = require("express");
const app = express();

const productRoutes = require("./routes/products.routes");

// express.json() - inbuild function, it allows the json typed incoming datas
app.use(express.json());

app.use(productRoutes);

let port = 8080;

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});

// Backend Architecture
// model -> array as a temp database
// controller -> application logic(get, post)
// routes -> convert the logic function into an API

// model - [{id: 1, title: "Watch"}];

// controller - (model) = get(find)
// controller - (model) = post(push)

// routes - (get) (post) = endpoint