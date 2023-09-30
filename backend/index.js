const express= require("express")
const app=express();
const{connection}=require("./config/db");
const Userrouter  = require("./routes/user.routes");
const Authrouter=require("./routes/auth.routes")
const PORT=8080

app.use(express.json());
app.use("/user",Userrouter);
app.use("/auth",Authrouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500 ;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });

});

app.listen(PORT, async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(e){
        console.log("Error connecting to DB:",e)
    }
    console.log(`listening on PORT ${PORT}`
    )})