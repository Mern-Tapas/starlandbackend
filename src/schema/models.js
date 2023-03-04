const mongoose = require("mongoose");

const registration = new mongoose.Schema({
    studentName: String,
    fatherName: String,
    schoolclass: String,
    contact: String,
    email: String
})

//only comment

const registrationmodel = mongoose.model("registrationmodel", registration)

module.exports = registrationmodel
