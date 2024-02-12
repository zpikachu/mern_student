const express = require('express');
const router = express.Router();

const {
    InsertStudent,
    getAllStudents,
    DeleteStudent,
    UpdateStudent,
    getSingleStudent
} = require("../Controller/Student_Controller");

router.post("/insertStudent", InsertStudent);
router.delete("/deleteStudent/:id", DeleteStudent);
router.get("/getAllStudents", getAllStudents);
router.put("/updateStudent/:id", UpdateStudent);
router.get("/getSingleStudent/:id", getSingleStudent);

module.exports = router;