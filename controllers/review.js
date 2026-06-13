const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

// saveReview
module.exports.saveReview = async (req,res)=>{

    const { id } = req.params;

    const listing = await Listing.findById(id);

    const review = new Review(req.body.review);

    review.author = req.user._id;

    await review.save();

    listing.reviews.unshift(review._id);

    await listing.save();
    req.flash("success", "Review Added Successfully!");

    res.redirect(`/listings/${id}`);

}

//deleteReview

module.exports.deleteReview = async (req,res)=>{
        let { id, reviewId } = req.params;

        await Listing.findByIdAndUpdate(
            id,
            {
                $pull: {
                    reviews: reviewId
                }
            }
        );

        await Review.findByIdAndDelete(reviewId);
        req.flash("success", "Review Deleted Successfully!");

        res.redirect(`/listings/${id}`);
}