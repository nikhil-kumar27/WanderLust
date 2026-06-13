const { 
    listingSchema, 
    reviewSchema
} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

// validation Middleware
const validateListing = (req,res,next) => {
    console.log(req.body);
    console.log(req.file);

    let { error } = listingSchema.validate(req.body);
    // if(!req.file){
    //     throw new ExpressError(400,"Please upload an image");
    // }

    if(error){

        let errMsg = error.details
            .map((el) => el.message)
            .join(",");

        throw new ExpressError(400, errMsg);

    } else {

        next();

    }

};

// validationMiddleware
const validateReview = (req, res, next) => {

    let { error } = reviewSchema.validate(req.body);

    if(error){

        let errMsg = error.details
            .map(el => el.message)
            .join(", ");

        throw new ExpressError(400, errMsg);

    }

    next();
};

module.exports = {
    validateListing,
    validateReview
};