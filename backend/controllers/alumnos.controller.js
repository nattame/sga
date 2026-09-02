const alumnos = require("../DATA/alumnos")




function obtenerAlumnos(req, res){

    res.json(alumnos)

}


module.exports = {obtenerAlumnos}