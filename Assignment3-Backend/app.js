const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const profileRoutes = require("./routes/profile");
const authRoutes = require("./routes/auth");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/profile", profileRoutes);
app.use("/auth", authRoutes);

//Error Routes
app.use("/", (req, res, next) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(8080, () => {
  console.log("server started on 8080");
});
