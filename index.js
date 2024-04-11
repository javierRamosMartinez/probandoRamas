const express = require("express");
require("dotenv").config();
const motosRouter = require("./api/motos/motos.router");
const { connectMongo } = require("./utils/db");

const {
  notFoundHandler,
  errorHandler,
} = require("./api/middleware/error.middleware");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
connectMongo();

app.get("/", (req, res) => {
  res.json({ message: "El servidor está funcionando" });
});

app.use("/motos", motosRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`El servidor se ha iniciado en el puerto: ${PORT}`);
});
