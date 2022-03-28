const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.models");
const authenticated =  require("../middleware/authentication")
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find().lean().exec();

    res.status(201).send({ todo: todo });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.post("/",  authenticated,async (req, res) => {
  try {
    const todo = await User.create(req.body);
    res.status(201).send({ todo: todo });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
