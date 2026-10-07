const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const passport = require("passport");
const{saveRedirectUrl} = require('../middleware.js');

const userController = require("../controllers/user.js");

router
    .route("/signup")
    .get(userController.signup)
    .post(userController.signupForm);

router
    .route("/login")
    .get(userController.login)
    .post(saveRedirectUrl,
    passport.authenticate('local', {failureRedirect: "/login", 
    failureFlash:"Please enter a correct username and password!"}), 
    userController.loginForm
    );


router
    .route("/logout")
    .get(userController.logout);
    
module.exports = router;
