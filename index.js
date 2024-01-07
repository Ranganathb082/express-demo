const express = require("express");
const { path } = require("express/lib/application");
const mongoose = require("mongoose");



const app = express();


app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', __dirname + '/views');


mongoose.connect("mongodb://localhost:27017/crud");

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("user", UserSchema);

app.get("/getUsers", (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/", (req, res) => {
    res.render("index", {
      title: "Express EJS Example",
      message: "Welcome to Express with EJS!",
    });
  });

app.listen(3001, () => {
  console.log("Listening to the port 3001");
});
