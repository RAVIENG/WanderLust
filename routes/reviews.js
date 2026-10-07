const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsnc = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { reviewSchema } = require("../schema.js");
const{isLoggedIn, isReviewAuthor} = require("../middleware.js");


const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        throw new ExpressError(400, error.details[0].message);
    }

    next();
};

const reviewController = require("../controllers/review.js");

//create Review
router.post("/", validateReview, isLoggedIn, reviewController.createReview);


//delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, reviewController.deleteReview);

module.exports = router;
