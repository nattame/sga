import {useState} from "react"

const divboton = {display:"flex", justifyContent: "center", gap:"20px"}
const botones = {fontSize:"20px", color: "lightgreen", padding: "5px"}

function CambiarTitulo(){
    const [titulo, setTitulo] = useState("Inicio")

    return(
        <>
        <h2>{titulo}</h2>
        <div style={divboton}>
            <button onClick={()=>setTitulo("Alumnos")} style={botones}>Alumnos</button>
            <button onClick={()=>setTitulo("Docentes")} style={botones}>Docentes</button>
        </div>
        </>
    )
}

export default CambiarTitulo