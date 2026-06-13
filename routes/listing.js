const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {
    validateListing,
    validateReview
} = require("../middleware/validationMiddleware.js");
const { isLoggedIn } = require("../middleware/isLoggedin.js");
const { isOwner } = require("../middleware/isOwner.js");
const listingController = require("../controllers/listing");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single("image"),validateListing, wrapAsync(listingController.createroute));


//New route
router.get("/new", isLoggedIn, listingController.new);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single("image"), validateListing, wrapAsync(listingController.editpostroute))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.delete));

//Edit route
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(listingController.edit));

module.exports = router;