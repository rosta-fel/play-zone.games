import express from "express";
import session from "express-session";
import passport from "passport";
import 'dotenv/config';

const app = express();
const port = process.env.APP_PORT;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize());

app.get("/", (_req, res) => res.render("index", {currentPage: "index"}));
app.get("/login", (_req, res) => res.render("login", {currentPage: "login"}));
app.get("/signup", (_req, res) => res.render("signup", {currentPage: "signup"}));

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.get("/chat", checkAuth, (_req, res) => res.render("chat", {currentPage: "chat"}));


app.get("/about-us", (_req, res) => res.render("about-us", {currentPage: "about-us"}));


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
