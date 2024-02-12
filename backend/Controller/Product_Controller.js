const ProductSchema = require("../Models/ProductSchema");

const InsertProduct = async(req, res) => {
    console.log(req.body);
    try {
        const { fname, fbrand, fmodel, fprice, fquantity } = req.body;
        const newProduct = new ProductSchema({
            name: fname,
            brand: fbrand,
            model: fmodel,
            price: fprice,
            quantity: fquantity,
            total: fprice * fquantity,
        });
        let savedProduct = await newProduct.save();
        console.log("product inserted");
        res.json({ message: "inserted succusfull", newProduct: savedProduct });
    } catch (err) {
        console.log("error in insertion" + err);
        res.status(400).json({ error: "Invalid data" });
    }
};

const getAllProducts = async(req, res) => {
    let productData = await ProductSchema.find();
    console.log("product information fetched from database");
    res.json({ product: productData });
};

const DeleteProduct = async(req, res) => {
    let product = await ProductSchema.findById(req.params.id);
    console.log(product);
    await ProductSchema.findByIdAndDelete(req.params.id);

    if (product === null) {
        console.log("product is null");
        res.json({ message: "product  is null", DeltedProduct: product });
    } else {
        console.log("product  deleted succesfully");
        res.json({
            message: "product  deleted succesfully",
            DeltedProduct: product,
        });
    }
};

const UpdateProduct = async(req, res) => {
    let product = await ProductSchema.findById(req.params.id);
    if (!product) {
        console.log("user not found this id");
        res.json({ message: "user not found this id" });
    } else {
        const { fname, fbrand, fmodel, fprice, fquantity } = req.body;
        let updatedProduct = {};
        if (fname) {
            updatedProduct.name = fname;
        }
        if (fbrand) {
            updatedProduct.brand = fbrand;
        }
        if (fmodel) {
            updatedProduct.model = fmodel;
        }
        if (fprice) {
            updatedProduct.price = fprice;
        }
        if (fquantity) {
            updatedProduct.quantity = fquantity;
        }
        product = await ProductSchema.findByIdAndUpdate(
            req.params.id, { $set: updatedProduct }, { new: true }
        );
        console.log("user info update succesfull");
        res.json({
            message: "user info update succesfull",
            updatedProduct: product,
        });
    }
};

const getSingleProduct = async(req, res) => {
    let product = await ProductSchema.findById(req.params.id);
    if (!product) {
        res.json({ product: product })
    } else {
        res.json({ product: product })
    }
}

module.exports = {
    InsertProduct,
    getAllProducts,
    DeleteProduct,
    UpdateProduct,
    getSingleProduct
};