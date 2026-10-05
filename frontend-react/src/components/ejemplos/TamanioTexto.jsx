import { useState } from "react";

function TamanioTexto(){
    const [tamanio, setTamanio] = useState("20px")
    return(
        <>
        <p style={{fontSize: tamanio}}>
            Swistemwa dwe gwestion Acwademicwo
        </p>


        <div style={{display: "flex", justifyContent: "center", gap:"10px", marginTop:"10px"}}>
            <button onClick={()=> setTamanio("14px")}>Pequeño</button>
            <button onClick={()=> setTamanio("20px")}>Mediano</button>
            <button onClick={()=> setTamanio("50px")}>Grande</button>
        </div>
        </>
    )
}

export default TamanioTexto