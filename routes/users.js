const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

// Update User
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new:true});
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(401).json("You can only update your account");
    }
});

// Delete User
router.delete("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
        try{
            await Post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account Deleted Successfully!");
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(404).json("User Not Found!");
    }
    }
    else{
        res.status(401).json("You can only delete your account");
    }
});

// Get User
router.get("/:id",async(req,res)=>{
        try{
            const user = await User.findById(req.params.id);
            const {password, ...others} = user._doc;
            res.status(200).json(others);
    }catch(err){
        res.status(404).json("User Not Found!");
    }
});

module.exports = router;
