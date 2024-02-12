const express = require("express");
const ConnectToMongo = require("./db");
const ProductSchema = require("./Models/ProductSchema");
const app = express();
const PORT = 7000;
ConnectToMongo();

app.use(express.json());

app.use("/api/product", require("./Routes/Product_Route"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});