const res = require("express/lib/response");
const User = require("../models/user.models");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const generateWebToken = function () {
    var token = jwt.sign({ user},  process.env.SECRET_KEY);
}

const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    //check
    if (user) {
      res.status(200).send({ message: "user email already registered" });
    }

    // register

      user = await User.create(req.body);
      
      res.status(200).send({ message: "user created successfully" , user: user });
  } catch (err) {
    res.status(500).send("invalid input");
  }
};

const login = () => {};

module.exports = { register, login };
