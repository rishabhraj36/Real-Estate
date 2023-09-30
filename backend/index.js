const express= require("express")
const app=express();
const{connection}=require("./config/db");
app.use(express.json());

const PORT=8080
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