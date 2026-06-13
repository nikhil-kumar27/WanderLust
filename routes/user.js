const express = require("express");
const router = express.Router();

const passport = require("passport");

const User = require("../models/user");
const {saveRedirectUrl } = require("../middleware/isLoggedin");
const usersController = require("../controllers/users")

router.route("/signup")
    .get(usersController.signup)
    .post(usersController.postSignup);


// router.get("/signup", usersController.signup);

// router.post("/signup",usersController.postSignup);

router
  .route("/login")
  .get( usersController.login)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usersController.postLogin,
  );

// router.get("/login", usersController.login);

// router.post( "/login", saveRedirectUrl,

//     passport.authenticate(
//         "local",
//         {
//             failureRedirect: "/login",
//             failureFlash: true
//         }
//     ), usersController.postLogin);


router.get("/logout",usersController.logout);

module.exports = router;