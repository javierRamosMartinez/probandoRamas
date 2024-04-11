const { request } = require("http");
const Coche = require("./coches.model");
const { response } = require("express");
const createCoche = async (req, res, next) => {
    try{
        const coches = Coche(req.body);
        const cocheExist = await Coche.findOne({matricula: coches.matricula });
        if (cocheExist){
            return new Error("Este coche ya existe en la base de datos, verifica la informacion");            
        }
        const cocheDB = await coche.save();
        return res.json({
            status: 201,
            message: "create",
            data: cocheDB,              
        });
    }    catch (error){
        return next(error);
    }
};
const updateCoches = async (request, response) => {
    try {
      const coche = await Coche.findById(id);
        const id = request.params.id;
        const body = request.body;
        const updatedCoche = await Coche.findByIdAndUpdate(id, body, {
            new: true,
});
     response.json({
        status: 200,
        message: "updated",
        data: updatedCoche,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getAllCoches = async (request, response) => {
    try {
      const coches = await Coche.find();
      response.json({
        status: 200,
        message: "found",
        data: coches,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCoche = async (request, response) => {
    try {
      const id_coche = request.params.id_coche;
      const coche = await Coche.findByIdAndDelete(id_coche);
      response.json({
        status: 200,
        message: "deleted",
        data: coche,
      });
    } catch (error) {
      console.log(error);
    }
  }; 
  module.exports = { createCoche, getAllCoches, updateCoches, deleteCoche };

