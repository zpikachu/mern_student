const express = require('express');
const router = express.Router();

const {
    InsertProduct,
    getAllProducts,
    DeleteProduct,
    UpdateProduct,
    getSingleProduct
} = require("../Controller/Product_Controller")

router.post("/insertProduct", InsertProduct);
router.delete("/deleteProduct/:id", DeleteProduct)
router.get("/getAllProduct", getAllProducts);
router.put("/updateProduct/:id", UpdateProduct);
router.get("/getSingleProduct/:id", getSingleProduct)
module.exports = router;