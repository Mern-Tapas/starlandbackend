const express = require("express")
const router = express.Router()
const leadmodel = require("../schema/models")
const dashboard = require("./AdminRoutes/dashboard")


router.get('', (req, res) => {
    res.send("home")
})

router.post("", async (req, res) => {
    console.log(req.body)  
})


router.use("/dashboard", dashboard)


module.exports = router