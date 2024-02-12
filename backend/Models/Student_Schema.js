const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: Number },
});

module.exports = mongoose.model("students", StudentSchema)