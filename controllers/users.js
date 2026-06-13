const User = require("../models/user");


module.exports.signup = (req, res) => {
    res.render("users/signup", {
        title: "Sign Up"
    });
}

module.exports.postSignup =  async (req,res,next)=>{

    try{

        const { username, email, password } = req.body;

        const newUser = new User({
            username,
            email
        });

        const registeredUser = await User.register(
                newUser,
                password
            );
        
        let redirectUrl = req.session.redirectUrl || "/listings";

        req.login( registeredUser, (err) => {
                if (err) {
                    return next(err);
                }

                req.flash(
                    "success",
                    `Welcome to Wanderlust, ${registeredUser.username}!`
                );

                

                delete req.session.redirectUrl;

                res.redirect(
                    redirectUrl
                );
            }
        );

    } catch(err){

        req.flash(
            "error",
            err.message
        );

        res.redirect("/signup");
    }
}

module.exports.login = (req, res) => {
    res.render("users/login", {
        title: "Login"
    });
}

module.exports.postLogin =  (req,res)=>{

        req.flash(
            "success",
            "Welcome Back!"
        );

       let redirectUrl = res.locals.redirectUrl ||  "/listings";

        delete req.session.redirectUrl;

        res.redirect( redirectUrl);
    }
module.exports.logout = (req,res,next)=>{

    req.logout((err)=>{

        if(err){
            return next(err);
        }

        req.flash(
            "success",
            "Logged Out Successfully!"
        );

        res.redirect("/listings");
    });
}