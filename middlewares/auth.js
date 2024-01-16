class AuthMiddleware {
    static checkNotAuth(req, res, next) {
        if (req.isAuthenticated()) {
            return res.redirect('/');
        }
        next();
    }

    static checkAuth(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
}

export default AuthMiddleware;