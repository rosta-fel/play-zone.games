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

// S-T-A-R-T: EXTERNAL FUNCTIONS

const renderPage = (res, pageName, additionalParams = {}) => {
  const defaultParams = { currentPage: pageName };
  const mergedParams = { ...defaultParams, ...additionalParams };
  res.render(pageName, mergedParams);
};

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// E-N-D: EXTERNAL FUNCTIONS

app.get("/", (_req, res) => renderPage(res, "index"));
app.get("/login", (_req, res) => renderPage(res, "login"));
app.get("/signup", (_req, res) => renderPage(res, "signup"));
app.get("/chat", checkAuth, (_req, res) => renderPage(res, "chat"));
app.get("/about-us", (_req, res) => renderPage(res, "about-us"));

app.get('*', (_req, res) => {
  res.status(404);
  renderPage(res, "utils/404");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
