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

async function crearMateria(req, res){
    const { codigo, nombre, descripcion, cargaHoraria, Estado} = req.body
    if(!codigo|| !nombre || !descripcion || !cargaHoraria){
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios. "
        })
    }
    if(typeof codigo != "string"){
        return res.status(400).json({
            mensaje:"El codigo de la materia tiene que ser texto"
        })
    }
    if(typeof nombre != "string"){
        return res.status(400).json({
            mensaje:"El nombre de la materia tiene que ser texto"
        })

    }

    const existe = await Materia.findOne({
        codigo
    }) 

    if (existe){
        return res.status(400).json({
            mensaje: "Esta materia ya existe"
        })
    }
    const nuevaMateria = await Materia.create({
        codigo, nombre, descripcion, cargaHoraria, 
        Estado: "Activo"
    })

    res.status(201).json(nuevaMateria)
}


    async function actualizarMateria(req,res){
        const{codigo, nombre, descripcion, cargaHoraria, Estado} = req.body

        const materia = await Materia.findOneAndUpdate(
            {codigo: String(req.params.id)},
            {nombre, descripcion, cargaHoraria, Estado},
            {
                returnDocument: "after"
            }
        )

        if(!materia){
            return res.status(404).json({
                mensaje: "Materia no encontrado"
            })
        }

        res.json(materia)


    }


    async function eliminarMateria(req, res){

        const materia = await Materia.findOneAndDelete({
            codigo: String(req.params.id)
        })
        if(!materia){
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }

        res.json({materia})

    }


module.exports = {obtenerMaterias, obtenerMateria, crearMateria, actualizarMateria, eliminarMateria}


