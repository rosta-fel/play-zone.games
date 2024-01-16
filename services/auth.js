import crypto from "crypto";

class AuthService {
    static hashPassword(password) {
        return crypto.pbkdf2Sync(password, '0x00', 1000, 64, "sha512").toString("hex");
    };

    static validatePassword(password, hash) {
        return AuthService.hashPassword(password) === hash;
    };
}

export default AuthService;