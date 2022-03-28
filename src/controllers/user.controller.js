const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/user.models");

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    res.status(201).send({ user: user });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).send({ user: user });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;