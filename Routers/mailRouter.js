const { Router } = require("express");
const express = require("express");
// import express from "express"
const {getSignup,postSignup,redirectValid,redirectInvalid} = require("../controllers/mailCon");
// import {getSignup} from "../controllers/mailCon.js"

const mailRouter = express.Router();

mailRouter
.route('/v1/signup')
.get(getSignup)
.post(postSignup)

mailRouter
.route('/v1/signup/valid')
.get(redirectValid)

mailRouter
.route('/v1/signup/invalid')
.get(redirectInvalid)


module.exports = mailRouter
// export default mailRouter;