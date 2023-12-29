import express from "express";
import passport from "passport";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(passport.initialize());

app.get("/", (_req, res) => res.render("index", {currentPage: "index"}));
app.get("/login", (_req, res) => res.render("login", {currentPage: "login"}));
app.get("/signup", (_req, res) => res.render("signup", {currentPage: "signup"}));

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.render("login", {currentPage: "login"});
}

app.get("/chat", checkAuth, (_req, res) => res.render("chat", {currentPage: "chat"}));


app.get("/about-us", (_req, res) => res.render("about-us", {currentPage: "about-us"}));


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
