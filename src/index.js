const express = require("express");

const userController = require("./controllers/user.controller");
const todoController = require("./controllers/todo.controller");
const app = express();
const { register, login } = require("./controllers/authentication.controller");
app.use(express.json());

app.use("/users", userController);

app.post("/register", register);
app.post("/login", login);
app.use("/todo", todoController);
module.exports = app;
