const express = require('express');
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsnc = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, isOwner} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const{storage} = require("../cloudConfig.js");

//img upload
const multer = require('multer');
const upload = multer({storage});


// All listings + Create listing
router
    .route("/")
    .get(listingController.index)
    .post(isLoggedIn, upload.single('listing[image]'), listingController.createRoute); 


// New listing form
router
    .route("/new") 
    .get(isLoggedIn, listingController.renderNewForm);


// Show listing + Update + Delete
router
    .route("/:id")
    .get(listingController.showListings)
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), listingController.updateRoute)
    .delete(isLoggedIn, isOwner, listingController.deleteRoute);


// Edit form
router
    .route("/:id/edit")
    .get(isLoggedIn, listingController.editRoute);

module.exports = router;