const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    address: { type: String },
    Class: { type: String },
    division: { type: String },
});

module.exports = mongoose.model("students", StudentSchema)