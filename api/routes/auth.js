const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

// Register Page
router.post("/register",async(req,res)=>{
    const hash = bcrypt.hashSync(req.body.password, salt);
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        const user = await newUser.save();
        res.status(200).json(user);
        
    }catch(err){
        res.status(500).json(err);
    }
});

//Login Page
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(400).json("Wrong Credentials");
        
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Credentials");

        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
