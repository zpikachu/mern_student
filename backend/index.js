const express = require("express");
const ConnectToMongo = require("./db");
const ProductSchema = require("./Models/Student_Schema");
const app = express();
const PORT = 7000;
ConnectToMongo();

app.use(express.json());

app.use("/api/student", require("./Routes/Student_Router"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});