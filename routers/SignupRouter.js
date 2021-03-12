const express = require('express');
const mongoose = require("mongoose");
// const router = express();
var cors = require('cors');
const router = express.Router();
const User = require('../models/user_Schema.js');
router.use(express.urlencoded({extended:true}));
var cors = require('cors');
router.use(cors({ origin : true, credentials : true }));
router.use(express.json({ extended: false }));
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');


router.get('/', (req,res) => {
    console.log("register chala");
    // res.render('../client/signup');
})

router.post('/', async (req,res) => {
    // const { rollno, password } = req.body;
    // const hash = await bcrypt.hash(password,12);
    // console.log(password);
    // console.log(hash);
    // const user = new User({
    //     rollno,
    //     password : hash
    // })
    // await user.save();
    User.create(req.body);
    console.log("Sign Up done");
    res.send("\n  Signup page  working  \n");
})


module.exports = router ;