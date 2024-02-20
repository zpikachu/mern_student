const StudentSchema = require("../Models/Student_Schema");

const InsertStudent = async(req, res) => {
    console.log(req.body);
    try {
        const { fname, fphone, femail, faddress, fclass, fdivision } = req.body;
        const newStudent = new StudentSchema({
            name: fname,
            phone: fphone,
            email: femail,
            address: faddress,
            Class: fclass,
            division: fdivision,
        });
        console.log(newStudent);
        let savedStudent = await newStudent.save();
        console.log("student inserted");
        res.json({ message: "inserted successfully", newStudent: savedStudent });
    } catch (err) {
        console.log("error in insertion" + err);
        res.status(400).json({ error: "Invalid data" });
    }
};

const getAllStudents = async(req, res) => {
    let studentData = await StudentSchema.find();
    res.json({ students: studentData });
};

const DeleteStudent = async(req, res) => {
    let student = await StudentSchema.findById(req.params.id);
    if (!student) {
        console.log("student not found with this id!");
        res.json({ message: "student not found with" + req.params + "id!" });
    } else {
        console.log(student);
        await StudentSchema.findByIdAndDelete(req.params.id);
        console.log("student deleted successfully")
        res.json({
            message: "student deleted successfully",
            deletedStudent: student,
        });
    }
};

const UpdateStudent = async(req, res) => {
    let student = await StudentSchema.findById(req.params.id);
    if (!student) {
        console.log("student not found with this id!");
        res.json({ message: "student not found with" + req.params._id + "id!" });
    } else {
        const { name, phone, email, address, Class, division } = req.body;
        let updatedStudent = {};
        if (name) {
            updatedStudent.name = name;
        }
        if (phone) {
            updatedStudent.phone = phone;
        }
        if (email) {
            updatedStudent.email = email;
        }
        if (address) {
            updatedStudent.address = address;
        }
        if (Class) {
            updatedStudent.Class = Class;
        }
        if (division) {
            updatedStudent.division = division;
        }
        await StudentSchema.findByIdAndUpdate(
            req.params.id, { $set: updatedStudent }, { new: true }
        );
        console.log("student info update successful")
        res.json({
            message: "student info update successful",
            updatedStudent: student,
        });
    }
};

const getSingleStudent = async(req, res) => {
    let student = await StudentSchema.findById(req.params.id);
    if (!student) {
        res.json({ message: "student not found" });
    } else {
        res.json({ student: student });
    }
};

module.exports = {
    InsertStudent,
    getAllStudents,
    DeleteStudent,
    UpdateStudent,
    getSingleStudent
};