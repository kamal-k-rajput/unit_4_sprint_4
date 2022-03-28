const express = require("express");

const userController = require("./controllers/user.controller");
const app = express();
const { register, login } = require("./controllers/authentication.controller");
app.use(express.json());

app.use("/users", userController);

app.post("/register", register);
app.post("/login", login);

module.exports = app;
