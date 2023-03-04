const mongoose = require("mongoose");

const registration = new mongoose.Schema({
    studentName: String,
    fatherName: String,
    schoolclass: String,
    contact: String,
    email: String
})

const registrationmodel = mongoose.model("registrationmodel", registration)

module.exports = registrationmodel
