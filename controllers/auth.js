import AuthService from "../services/auth.js"
import UsersRepo   from "../repositories/users.js";
import passport from "passport";
import crypto from "crypto";

class AuthController {
    static login(req, res, next) {
        passport.authenticate('local', (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                req.flash('error', 'Incorrect username or password. Please try again.');
                return res.redirect('/login');
            }
            req.logIn(user, (loginErr) => {
                if (loginErr) {
                    return next(loginErr);
                }
                return res.redirect('/');
            });
        })(req, res, next);
    }

    static async logout(req, res) {
        req.logout((error) => {
            if (error) {
                return next(error);
            }
            res.redirect("/login");
        });
    }

    static async signup(req, res) {
        try {
            if (!req.body.username || !req.body.email || !req.body.password) {
                res.redirect("/signup");
            }

            const existingUser = await UsersRepo.getByUsername(req.body.username);
            if (existingUser) {
                req.flash('error', 'Username already exists. Please choose a different username.');
                return res.redirect("/signup");
            }

            const user = {
                username: req.body.username,
                email: req.body.email,
                password: AuthService.hashPassword(req.body.password),
            }
            await UsersRepo.insert(user);
            res.redirect("/login");
        } catch (error) {
            console.log(error);
            res.redirect("/signup");
        }
    }
}

export default AuthController;