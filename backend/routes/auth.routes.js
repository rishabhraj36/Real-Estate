const express=require("express");
const { signup, sigin } = require("../controllers/auth.controller");
const router=express.Router()

router.post("/signup",signup)
router.post("/signin",sigin)

module.exports=router