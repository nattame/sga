import { useState } from "react";

const API_ALUMNOS = "http://localhost:3000/alumnos"
function FormularioA(){

    const [formulario, setFormulario] = useState({

        legajo:"",
        nombre: "",
        carrera:"",
        correo:""
    })

    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    function manejarCambio(e){
        const {name, value} = e.target
        setFormulario({
            ...formulario,
            [name]:value
        })
    }

    const[legajo, setLegajo] = useState("")
    const[nombre, setNombre] = useState("")
    const[correo, setCorreo] = useState("")
    const[carrera, setCarrera] = useState("")
  
    async function guardar(e){
        e.preventDefault()
        setError("")
        setGuardando(true)

        try{
            const alumno = {
                ...formulario,
                legajo: Number(formulario.legajo)
            }
            const respuesta =  await fetch(API_ALUMNOS, {
                method: "POST",
                header: {"Content-Type":"application"},
                body: JSON.stringify(alumno)
            })
            if(!respuesta.ok){
                throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`)
            }
            setFormulario({
                legajo: "",
                nombre:"",
                carrera:"",
                correo:""
            })
        }catch(error){
            console.error("Error al guardar:", error)
            setError(error.message||"No se puede conectar con el servidor")
        }finally{

            setGuardando(false)
        }
        }
    

    return(
            <>
        <form onSubmit={guardar}>
            <label htmlFor="legajo">Legajo</label>
            <input 
            id="legajo"
            name="legajo"
            value={formulario.legajo}
            onChange={manejarCambio}
            required
            />

             <label htmlFor="nombre">Nombre</label>
            <input
           
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            />
             <label htmlFor="correo">Correo</label>
            <input 
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            />
            <label htmlFor="carrera">Carrera</label>
             <input 
             id="carrera"
            name="carrera"
            value={formulario.carrera}
            onChange={manejarCambio }
            />

      

            <button type="submit" disabled={guardando}>
                {guardando ? "Guardando..." : "Guardar"}
            </button>
            <br/>
            {error && <p role="alert">{error}</p>}
            
             
        </form>
    

       <h3>Legajo: {legajo}</h3>
       <h3>Nombre: {nombre}</h3>
       <h3>Correo: {correo}</h3>
       <h3>Carrera {carrera}</h3>
       </>
    )

}

export default FormularioA