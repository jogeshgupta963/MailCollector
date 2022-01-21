const express = require('express');
// import express from "express"
const path = require('path');
const mailModels = require('../models/mailModels')
const nodemailer=require("nodemailer");
require("dotenv").config();
// const { getMaxListeners } = require('process');
// import path from "path"
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


function getSignup(req,res){
    // console.log(path.join(__dirname,"../index.html"))

    res.sendFile(path.join(__dirname,"../public/","index.html"))
    // res.sendFile(path.join(__dirname,"../public/","valid.html"))
    
    // res.sendFile('C:\Users\JOGESH\OneDrive\Documents\GitHub\MailCollector\public\index.html');
    
}

async function postSignup(req,res){
    try {
        let userData = req.body;
        
        let data = await mailModels.create(userData);
        

      // async function main() {
  
  
        let gmailPass = process.env.gmailPass
        
         let transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: 'jogeshgupta963@gmail.com',
            pass: gmailPass
           }
        });

       // send mail with defined transport object
        let info =  transporter.sendMail({
        from: '"Mail 👻" <foo@example.com>', // sender address
         to:data.email, // list of receivers
         subject: "Hello ✔", // Subject line
         text: `Hello ${data.name} `, // plain text body
           html: `<b>HELLO ${data.name}</b>`, // html body
        });

    console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

      // main()

      console.log("Message sent: %s", info.messageId);
      // let validity=true;
      return res.json({validity:true});
            
            
            
          } catch (err) {
            res.json({validity:false});
          }
          
    
}
function redirectValid(req,res){
    
    res.sendFile(path.join(__dirname,"../public/","valid.html"))
    
}
function redirectInvalid(req,res){
    
    res.sendFile(path.join(__dirname,"../public/","invalid.html"))
    
}

module.exports = {getSignup,postSignup,redirectValid,redirectInvalid}