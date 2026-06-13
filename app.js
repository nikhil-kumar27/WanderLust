require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const listingsRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
console.log(MongoStore);
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const { isLoggedIn } = require("./middleware/isLoggedin.js");

const Review = require("./models/review.js");
const {
    validateListing,
    validateReview
} = require("./middleware/validationMiddleware.js");
const DB_URL = process.env.ATLASDB_URL;


// MongoDB Connection
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    console.log(process.env.ATLASDB_URL);

    await mongoose.connect(DB_URL);

}

main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.engine("ejs", engine);
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const store = MongoStore.create({
    mongoUrl: DB_URL,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("SESSION STORE ERROR", err);
});

app.use(
    session({
        store,
        secret: process.env.SECRET,

        resave: false,

        saveUninitialized: true,

        cookie: {
            expires: Date.now() + 7 * 24 * 60 * 60 * 1000,

            maxAge: 7 * 24 * 60 * 60 * 1000,

            httpOnly: true
        }
    })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(
    new LocalStrategy(
        User.authenticate()
    )
);
passport.serializeUser(
    User.serializeUser()
);
passport.deserializeUser(
    User.deserializeUser()
);

app.use((req,res,next)=>{

    res.locals.success = req.flash("success");

    res.locals.error = req.flash("error");

    res.locals.currUser = req.user;    

    next();

});

app.use((req, res, next) => {
    res.locals.search = "";
    next();
});

//root route
app.get("/", (req,res)=>{
    res.send("hi,I am root");
});



// listing route
app.use("/listings", listingsRouter);

// review Route
app.use("/listings/:id/reviews", reviewRouter);

// user route
app.use("/", userRouter);







app.use((req,res,next)=>{

    next(new ExpressError(404, "page not found"));

});





// app.all("/*", (req,res,next)=>{
//     next( new ExpressError(404, "page not found"));
// });

app.use((err,req,res,next)=>{
    let{statusCode=500, message= "something went wrong"}= err;
    res.status(statusCode).render("error.ejs" ,{err, title: "Error Page"});
});





const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});