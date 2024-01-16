import express from "express";
import session from "express-session"
import passport from "passport";
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import methodOverride from "method-override";
import AuthMiddleware from "./middlewares/auth.js";
import PageUtil from "./utils/page.js";
import PassportUtil from "./utils/passport.js";
import authRoute from "./routes/auth.js";
import setUserMiddleware from "./middlewares/user.js";
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

PassportUtil.initialize(passport)

const app = express();
const port = process.env.APP_PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session({}));
app.use(methodOverride('_method'))

app.use(setUserMiddleware);

app.get("/", (_req, res) => PageUtil.render(res, "index"));
app.get("/chat", AuthMiddleware.checkAuth, (_req, res) => PageUtil.render(res, "chat"));
app.get("/about-us", (_req, res) => PageUtil.render(res, "about-us"));

app.use(authRoute);

app.get('*', (_req, res) => {
  res.status(404);
  PageUtil.render(res, "utils/404");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
