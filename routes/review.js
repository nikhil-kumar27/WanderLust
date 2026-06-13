const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {
    validateListing,
    validateReview
} = require("../middleware/validationMiddleware.js");
const isReviewAuthor = require("../middleware/isReviewAuthor");
const { isLoggedIn } = require("../middleware/isLoggedin.js");
const reviewController = require("../controllers/review.js")

// save reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.saveReview));

// delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor,reviewController.deleteReview);


module.exports = router;