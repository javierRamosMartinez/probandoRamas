const mongoose = require("mongoose");
const motoSchema = new mongoose.Schema({
  ruedas: { type: Number },
  matricula: { type: String, trim: true, required: true },
  modelo: { type: String, trim: true, required: true },
  marca: { type: String, trim: true, required: true },
});

const Moto = mongoose.model("Moto", motoSchema);

module.exports = Moto;
