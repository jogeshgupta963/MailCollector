const express = require("express");
const path= require("path");
const mongoose = require("mongoose")
const cors = require("cors")

const mailModel = require("./models/mailModels")
const dbConnect= require("./dbConnection/connect");
const mailRouter = require('./Routers/mailRouter');
require("dotenv").config();
// import path from "path"
// import express from "express"
// import mailModels from "./dbConnection/connect.js" 
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// import mailRouter from "./Routers/mailRouter.js";


const app=express();

// app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(cors());
// app.use(express.static('images'));

app.use('/',mailRouter);


// app.get("/",(req,res)=>{

//     res.sendFile(path.join(__dirname,'index.html'));
// })
async function dbConnection(){
    try {
        await dbConnect(process.env.dbLink);
        console.log("db connected")
        app.listen(80,()=>console.log("server connected"));
    } catch (error) {
            console.log(error);
    }

}
dbConnection();

