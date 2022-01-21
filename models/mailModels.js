const mongoose =require('mongoose');

const mailSchema =mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})
const mailModel= mongoose.model("mailModel",mailSchema)
module.exports = mailModel