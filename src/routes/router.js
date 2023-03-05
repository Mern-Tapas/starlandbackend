const express = require("express")
const router = express.Router()
const dashboard = require("./AdminRoutes/dashboard")
const registrationmodel = require("../schema/models")


router.get('', (req, res) => {
    res.send("home")
})
router.get('/test', (req, res) => {
    res.send("test")
})

router.post("", async (req, res) => {
    const { studentName, fatherName, schoolclass , contact, email} = req.body 


    const data = new registrationmodel({
        studentName, fatherName, schoolclass , contact, email
    })

    try {
        const result = await data.save()
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }

})


router.use("/dashboard", dashboard)


module.exports = router