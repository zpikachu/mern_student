const StudentSchema = require("../Models/Student_Schema");

const InsertStudent = async(req, res) => {
    console.log(req.body);
    try {
        const { fname, fcontact, femail, faddress, fclass, fdivision } = req.body;
        const newStudent = new StudentSchema({
            name: fname,
            phone: fcontact,
            email: femail,
            address: faddress,
            class: fclass,
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
        res.json({ message: "student not found with" + req.params.id + "id!" });
    } else {
        const { fname, fcontact, femail, faddress, fclass, fdivision } = req.body;
        let updatedStudent = {};
        if (fname) {
            updatedStudent.firstName = fname;
        }
        if (fcontact) {
            updatedStudent.lastName = fcontact;
        }
        if (femail) {
            updatedStudent.email = femail;
        }
        if (faddress) {
            updatedStudent.address = faddress;
        }
        if (fclass) {
            updatedStudent.class = fclass;
        }
        if (fdivision) {
            updatedStudent.division = fdivision;
        }
        await StudentSchema.findByIdAndUpdate(
            req.params.id, { $set: updatedStudent }, { new: true }
        );
        console.log("student info update successfully");
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