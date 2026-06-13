const Listing = require("../models/listing");

module.exports.isOwner = async (req,res,next) => {

    let { id } = req.params;

    const listing = await Listing.findById(id);

    if(!listing.owner.equals( req.user._id)){

        req.flash(
            "error",
            "You are not the owner of this listing!"
        );

        return res.redirect(
            `/listings/${id}`
        );
    }

    next();
};