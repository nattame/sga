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
    if(!codigo|| !nombre || !cargaHoraria || !Estado ){
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios. "})
        

    }
    
    if(typeof codigo != "string"){
        return res.status(400).json({
            mensaje:"El codigo de la matera tiene que ser texto"
        })
    }



    if(typeof nombre != "string"){
        return res.status(400).json({
            mensaje:"El nombre de la materia tiene que ser texto"
        })

    }
    if(typeof cargaHoraria != "number"){
         return res.status(400).json({
            mensaje:"Por favor ingrese horas validas."
        })
    }

     
    if(cargaHoraria<0){
            return res.status(400).json({
            mensaje:"Por favor ingrese horas mayores a 0."
        })

    }


        
    if((cargaHoraria%1 != 0)){
         return res.status(400).json({
            mensaje:"Por favor ingrese numeros enteros."
        })
    }
   
        
    
    if(Estado != "Activa" && Estado != "Inactiva"){
         return res.status(400).json({
            mensaje:"(El estado de la materia solo puede estar Activa o Inactiva.)"
        })}




    const existe = await Materia.findOne(
    {
        codigo: codigo.trim().toUpperCase()
    }) 

    if (existe){
        return res.status(400).json({
            mensaje: "Esta materia ya existe"
        })}




   
    
    
  
    

    const nuevaMateria = await Materia.create({
        
        codigo: codigo.toUpperCase().trim()
        ,nombre, descripcion, cargaHoraria, 
        Estado
    })


    res.status(201).json(nuevaMateria)

}

    async function actualizarMateria(req,res){
        const{codigo, nombre, descripcion, cargaHoraria, Estado} = req.body
        
        if(!codigo|| !nombre || !cargaHoraria || !Estado){

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
        if(typeof cargaHoraria != "number"){
         return res.status(400).json({
            mensaje:"Ingrese horas validas."
        })
        }

        if(Number(cargaHoraria)<0 ){
            return res.status(400).json({
            mensaje:"Ingrese numeros mayores a 0."
        })
        
        }   

        if((Number(cargaHoraria%1) != 0)){
         return res.status(400).json({
            mensaje:"Ingrese numeros enteros."
        })
        }
        if(Estado != "Activa" && Estado != "Inactiva"){
         return res.status(400).json({
            mensaje:"(El estado de la materia solo puede estar Activa o Inactiva.)"
        })}

   


    
        //  const existe = await Materia.findOne({
        //     codigo: codigo.toUpperCase().trim()
        // }) 

        // if (existe){
        // return res.status(400).json({
        //     mensaje: "Esta materia ya existe"
        // })}
    

        const materia = await Materia.findOneAndUpdate(
            
            {codigo: String(req.params.id)},
          
            {codigo:codigo.trim().toUpperCase(),nombre, descripcion, cargaHoraria, Estado},
            {
                returnDocument: "after"
            }
        )

        if(!materia){
            return res.status(404).json({
                mensaje: "Materia no encontrada"
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
            })}


            res.json({materia})
                    
        

    }


module.exports = {obtenerMaterias, obtenerMateria, crearMateria, actualizarMateria, eliminarMateria}


