const StudentSchema = require("../Models/Student_Schema");

const InsertStudent = async(req, res) => {
    console.log(req.body);
    try {
        const { ffname, flname, femail, fpassword } = req.body;
        const newStudent = new StudentSchema({
            firstName: ffname,
            lastName: flname,
            email: femail,
            password: fpassword,
        });
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
    console.log("student information fetched from database");
    res.json({ students: studentData });
};

const DeleteStudent = async(req, res) => {
    let student = await StudentSchema.findById(req.params.id);
    console.log(student);
    await StudentSchema.findByIdAndDelete(req.params.id);

    if (student === null) {
        console.log("student is null");
        res.json({ message: "student is null", deletedStudent: student });
    } else {
        console.log("student deleted successfully");
        res.json({
            message: "student deleted successfully",
            deletedStudent: student,
        });
    }
};

const UpdateStudent = async(req, res) => {
    let student = await StudentSchema.findById(req.params.id);
    if (!student) {
        console.log("student not found with this id");
        res.json({ message: "student not found with this id" });
    } else {
        const { ffname, flname, femail, fpassword } = req.body;
        let updatedStudent = {};
        if (ffname) {
            updatedStudent.firstName = ffname;
        }
        if (flname) {
            updatedStudent.lastName = flname;
        }
        if (femail) {
            updatedStudent.email = femail;
        }
        if (fpassword) {
            updatedStudent.password = fpassword;
        }
        student = await StudentSchema.findByIdAndUpdate(
            req.params.id, { $set: updatedStudent }, { new: true }
        );
        console.log("student info update successful");
        res.json({
            message: "student info update successful",
            updatedStudent: student,
        });
    }
};

const getSingleStudent = async(req, res) => {
    let student = await StudentSchema.findById(req.params.id);
    if (!student) {
        res.json({ student: student });
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