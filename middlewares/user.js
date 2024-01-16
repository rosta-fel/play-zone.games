export const setUserMiddleware = (req, res, next) => {
    res.locals.user = req.user || null;
    next();
};

export default setUserMiddleware;
