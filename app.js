const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
