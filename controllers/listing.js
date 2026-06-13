const Listing = require("../models/listing.js");
const getCoordinates = require("../utils/geocoder");

//index route

module.exports.index = async (req, res) => {

    const { category, search } = req.query;

    let query = {};

    if(category){
        query.category = category;
    }

    if(search){
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } }
        ];
    }

    const allListings = await Listing.find(query);

    res.render("listings/index.ejs", {
        allListings,
        category,
        search,
        title: "All Listings"
    });
};

module.exports.new = (req, res) => {

    res.render("listings/new.ejs", {title: "Create Listing"});

}

//show route

module.exports.showListing = async (req,res)=>{
    let id = req.params.id;
    const listing = await Listing.findById(id).populate("owner").populate({ 
        // populate("reviews")
      path: "reviews",
      populate: {
          path: "author",
        }
    });
    res.render("listings/show.ejs", {listing, title: listing.title});
}

//create route
module.exports.createroute = async (req, res) => {

    
    const newListing = new Listing(req.body);
    
    newListing.owner = req.user._id;
    
    newListing.image = {
        url: req.file.path, 
        filename: req.file.filename,
    };

    const coords = await getCoordinates( req.body.location );
    newListing.geometry = {
        lat: coords.lat,
        lon: coords.lon
    };


    await newListing.save();
    req.flash("success", "New Listing Created Successfully!"
    );

    res.redirect("/listings");

}

//editroute
module.exports.edit = async (req, res) => {

    const { id } = req.params;

    const listing = await Listing.findById(id);
    let originalUrl= listing.image.url;
    originalUrl = originalUrl.replace("/upload", "/upload/h_300,w_250");
   

    res.render("listings/edit", { listing , title: "Edit Listing",originalUrl});

}

module.exports.editpostroute = async (req, res) => {

    const { id } = req.params;

    let listing = await Listing.findByIdAndUpdate( req.params.id, req.body ,{ new:true });

    if(typeof req.file !== "undefined" ){
        listing.image = {

        url: req.file.path,

        filename:  req.file.filename
        };
        
        await listing.save();

    }

    if(req.body.location){

        const coords = await getCoordinates( req.body.location );

        listing.geometry = {
            lat: coords.lat,
            lon: coords.lon
        };

        await listing.save();
    }

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);

}

// deleteRoute
module.exports.delete = async (req, res) => {

    const { id } = req.params;

    await Listing.findByIdAndDelete(id);
    req.flash(
    "success",
    "Listing Deleted Successfully!"
    );

    res.redirect("/listings");

}