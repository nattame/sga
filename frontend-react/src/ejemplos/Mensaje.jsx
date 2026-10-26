import { useState } from "react";

function Mensaje(){
    const [mensaje, setMensaje] = useState("Hola, alumno")

    function cambiarmensaje(){
        setMensaje(mensaje === "Hola alumno")
        ? "Bienvenidoa a programacion IV"
        : "Hola, alumno"
    }

    return(
        <>
        <h2>{mensaje}</h2>
        <div style={{
            display: "flex",
            justifyContent:"center"

        }}>
            <button onClick={cambiarmensaje}>Cambiar</button>
        </div>
        </>
    )
}

export default Mensaje;