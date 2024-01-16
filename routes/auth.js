import express from "express";
import AuthMiddleware from "../middlewares/auth.js";
import AuthController from "../controllers/auth.js";
import PageUtil from "../utils/page.js";

const authRoute = express.Router();

authRoute.delete('/logout', AuthController.logout);
authRoute.get('/login', AuthMiddleware.checkNotAuth, (_req, res) => PageUtil.render(res, "login"));
authRoute.post('/login', AuthMiddleware.checkNotAuth, AuthController.login);
authRoute.get('/signup', AuthMiddleware.checkNotAuth, (_req, res) => PageUtil.render(res, "signup"));
authRoute.post('/signup', AuthMiddleware.checkNotAuth, AuthController.signup);

export default authRoute;