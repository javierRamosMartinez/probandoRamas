const express = require("express");

const motosRouter = express.Router();

const { createMoto, getOneMotoByMatricula } = require("./motos.controller");

const { isAuth } = require("../middleware/auth.middleware");

motosRouter.post("/", createMoto);
motosRouter.get("/matricula/:matricula", getOneMotoByMatricula);

module.exports = motosRouter;
