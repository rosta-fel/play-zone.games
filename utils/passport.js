import LocalStrategy from "passport-local";
import AuthService from "../services/auth.js";
import UsersRepo from "../repositories/users.js";

class PassportUtil {
    static async authUser(username, password, done) {
        const user = await UsersRepo.getByUsername(username);
        if (!user) {
            return done(null, false, { message: "User not found" });
        }
        try {
            if (AuthService.validatePassword(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Incorrect password" });
            }
        } catch (e) {
            return done(e);
        }
    };

    static initialize(passport) {
        passport.use(new LocalStrategy({ usernameField: "username" }, PassportUtil.authUser));
        passport.serializeUser(UsersRepo.serialize);
        passport.deserializeUser(UsersRepo.deserialize);
    };
}

export default PassportUtil;