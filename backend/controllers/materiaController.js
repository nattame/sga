const Materia = require("../models/Materia")

async function obtenerMaterias(req, res){
    const materias = await Materia.find()
    res.json(materias)
}

async function obtenerMateria(req, res){
    const materia = await Materia.findOne({
        codigo: String(req.params.id)
    })
    if(!materia){
        return res.status(404).json({
            mensaje:"Materia no encontrada"
        })
    }
    res.json(materia)
}


module.exports = {obtenerMaterias, obtenerMateria}