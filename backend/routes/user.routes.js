const express=require("express");
const { test,updateUser } = require("../controllers/user.controller");
const {verifyToken}=require("../utils/verifyUser")
const router=express.Router()

router.get("/update",test)

router.post('/update/:id',verifyToken,updateUser)
module.exports=router