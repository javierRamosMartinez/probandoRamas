const express = require("express");

const {createCoche, getAllCoches, updateCoches, deleteCoche,
} = require("./coches.controler");
// const { isAuth } = require("../middleware/auth.middleware");
const cocheRouter = express.Router();

cocheRouter.post("/", createCoche);
cocheRouter.get("/", getAllCoches);
cocheRouter.patch("/", updateCoches);
cocheRouter.delete("/", deleteCoche);
module.exports = { cocheRouter };