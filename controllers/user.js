const express = require('express');
const User = require("../models/user.js");

module.exports.signup = (req,res)=>{
    res.render("user/signup.ejs");
};

module.exports.signupForm = async(req,res, next)=>{
    let{username, email, password, confirmPassword} = req.body;
    const newUser = new User({email, username});

    const registerUser = await User.register(newUser, password);
    req.login(registerUser, (err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome to trip Heven");
        res.redirect("/listings");
    })
};

module.exports.login = (req,res)=>{
    res.render("user/login.ejs")
};

module.exports.loginForm = (req,res)=>{
    req.flash("success", "Welcome to trip heven!");
    let redirect = res.locals.redirectUrl || "/listings";
    res.redirect(redirect);
};


module.exports.logout = (req,res, next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "you are successfully log out");
        res.redirect("/listings");
    });
};
