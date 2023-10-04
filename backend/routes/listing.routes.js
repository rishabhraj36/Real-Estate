const express=require("express");
const { createListing,deleteListing } = require("../controllers/listing.controller");
const { verifyToken } = require("../utils/verifyUser");
const router=express.Router()


router.post('/create',verifyToken ,createListing)
router.delete('/delete/:id', verifyToken, deleteListing);

module.exports=router