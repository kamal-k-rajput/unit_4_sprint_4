const res = require("express/lib/response");
const User = require("../models/user.models");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const generateWebToken = function () {
  var token = jwt.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    //check
    if (user) {
      res.status(200).send({ message: "user email already registered" });
    }
    // register
    user = await User.create(req.body);
    res.status(200).send({
      message: "user created successfully",
      user: user,
      token: generateWebToken(),
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // not present   !null = true
    if (!user) {
      return res
        .status(401)
        .send({ message: "user email or password incorrect" });
    }
    // present => check password
    const match = user.checkPassword(req.body.password);

    // const match =
    if (!match) {
      return res
        .status(401)
        .send({ message: "user email or password incorrect" });
    }

    // correct match

    const token = generateWebToken(user);

    return res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { register, login };
