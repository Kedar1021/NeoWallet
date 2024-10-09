const express =require("express");
const userRouter = require("./user.js")

const router = express.Route();

router.use("/user", userRouter)

module.exports = router;