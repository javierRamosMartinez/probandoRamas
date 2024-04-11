const Moto = require("./motos.model");
const createMoto = async (req, res, next) => {
  try {
    const moto = new Moto(req.body);
    const motoExist = await Moto.findOne({
      matricula: moto.matricula,
    });
    if (motoExist) {
      return new Error("Esta matricula ya existe en la bdd");
    }
    const motoDB = await moto.save();
    return res.json({
      status: 201,
      message: "create",
      data: motoDB,
    });
  } catch (error) {
    return next(error);
  }
};

const getOneMotoByMatricula = async (req, res, next) => {
  try {
    const matricula = req.params.matricula;
    const moto = await Moto.findOne(matricula);
    res.json({
      status: 200,
      message: "ok",
      data: moto,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createMoto, getOneMotoByMatricula };
