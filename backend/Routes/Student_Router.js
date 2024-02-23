const express = require('express');
const multer = require('multer');
const router = express.Router();




const {
    InsertStudent,
    getAllStudents,
    DeleteStudent,
    UpdateStudent,
    getSingleStudent
} = require("../Controller/Student_Controller");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage })

router.post("/insertStudent", upload.single("fprofile"), InsertStudent);
router.delete("/deleteStudent/:id", DeleteStudent);
router.get("/getAllStudents", getAllStudents);
router.put("/updateStudent/:id", UpdateStudent);
router.get("/getSingleStudent/:id", getSingleStudent);

module.exports = router;