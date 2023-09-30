const {UserModel}= require("../models/user.model")
const bcryptjs=require('bcryptjs')

const signup = async(req,res)=>{
    const {username,email,password}=req.body;
    const hashedPassword =bcryptjs.hashSync(password,10)
    const newUser= new UserModel({
        username,
        email,
        password:hashedPassword
    })
    try{
        await newUser.save()
        res.status(201).json('User created successfully!')
    }
    catch(error){
        res.status(500).json(error.message);
    }
  
}

module.exports={signup}