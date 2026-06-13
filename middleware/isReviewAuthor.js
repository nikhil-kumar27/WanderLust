const Review = require("../models/review");

module.exports = async (req, res, next) => {
    const { id, reviewId } = req.params;

    const review = await Review.findById(reviewId);

    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }

    next();
};