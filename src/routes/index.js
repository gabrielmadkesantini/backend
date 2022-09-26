const express = require("express");
const UserController = require("../app/controllers/user/User.js");

const routes = express.Router();
routes
  .get("/", (req, res) =>
    res.json({ mensage: "Seja bem vindo a API da bolsa" })
  )
  .get("/user/:id", UserController.getUser);
module.exports = routes;
