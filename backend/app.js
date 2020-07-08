const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const profileRoutes = require("./routes/profile");
const authRoutes = require("./routes/auth");
const fuelformRoutes = require("./routes/fuelform");
const pricingFormRoutes = require("./routes/pricing");

const db = require("./database/connection");
const User = require("./database/user");
const Profile = require("./database/profile");
const FuelForm = require("./database/fuelform");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

//Routes
app.get("/", (req, res, next) => {
  res.status(200).send("Welcome to 4353 Group Project");
});

app.use("/profile", profileRoutes);
app.use("/auth", authRoutes);
app.use("/fuelform", fuelformRoutes);
app.use("/pricing", pricingFormRoutes);

//404 Error Routes
app.use("/", (req, res, next) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(8080, async () => {
  //create database if it doesnt exist
  try {
    await db.execute("CREATE DATABASE IF NOT EXISTS 4353group");
    //use db created
    await db.query("USE 4353group");
    //create tables if they dont exist
    await User.createUserTable();
    /*
    await Profile.createProfileTable();
    await FuelForm.createFuelFormsTable();
  */
  } catch (err) {
    console.log(err);
  }

  // console.log("server started on 8080");
});

module.exports = app;
