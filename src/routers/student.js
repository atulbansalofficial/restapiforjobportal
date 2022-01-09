const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
//create a new students
//////////////using promisses
// router.post("/students", (req, res) => {
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => res.status(201).send(user))
//     .catch((e) => res.status(400).send(e));
// });
/////////////////////////////////////

router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});
//Read the data of registered students
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
    console.log(studentsData);
  } catch (error) {
    res.send(e);
  }
});
//get the indivisual Students data using id
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById({ _id: _id });
    console.log(studentData);

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (error) {
    res.send(error);
  }
});
//get data using students name

//update students data using id

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      unique: true,
    });

    res.send(updateStudents);
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete student data
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deletestudentdata = await Student.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(400).send();
    } else {
      res.send(deletestudentdata);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
