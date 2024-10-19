const express = require('express');
const mongoose = require('./db/conn.js');
const Student = require('./model/students.js');

//connect to express
const app = express();
//get the Port Number 
const port = process.env.PORT || 3000;

//parse the object into json 
app.use(express.json());
//post the student data

app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createStudent = await user.save();
        res.status(201).send(createStudent);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
//How to read the data from the server
app.get("/students", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.status(200).send(studentData);
    } catch (error) {
        res.status(400).send(error);
    }
})
//get the student data by id
app.get("/students/:id", async (req, res) => {

    try {
        const studentData = await Student.params.id;
        console.log(studentData);
        if (!studentData) {
            return res.status(404).send();
        } else {
            return res.status(200).send(studentData);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
//update the students by Id
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(updateStudents);
    } catch (error) {
        res.status(400).end(error);
    }
});
//Delete the student by Id
app.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if (!deleteStudent) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(error);
    }
});
//to listen the server by sing port number 3000

app.listen(port, () => {
    mongoose;
    console.log(`Server is running on http://localhost:${port}`);
})