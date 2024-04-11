const mongoose = require("mongoose");
const cocheSchema = new mongoose.Schema({    
    marca:{type: String, trim: true, required: true},
    modelo: { type: String, trim: true, require: true},
    matricula:{type: Number, trim: true, required: true},
    tipo:{type: String, trim: true, required: true},
    año:{type: Number, trim: true, required: true},
    color:{type: String, trim: true, required: true},
    ruedas:{type: String, trim: true, required: true},
    transmision :{type: String, trim: true, required: true},
    combustible:{type: String, trim: true, required: true},    
});

const Coches = mongoose.model("Coches", cocheSchema);
module.exports = Coches; 