const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    category: {
        type: String,
        enum: [
            "Rooms",
            "Beach",
            "Mountains",
            "Camping",
            "Castles",
            "City",
            "Arctic",
            "Farms",
            "Desert",
            "Lake"
        ]
    },

    image: {
    url: String,
    filename: String,
    },

    price: {
        type: Number,
        min: 0,
    },

    location: {
        type: String,
    },

    country: {
        type: String,
    },
    geometry: {
        lat: Number,
        lon: Number
    },

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


});

// deleteMiddleware
listingSchema.post("findOneAndDelete", async (listing) => {

    if(listing){

        await Review.deleteMany({
            _id: {
                $in: listing.reviews
            }
        });

    }

});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
