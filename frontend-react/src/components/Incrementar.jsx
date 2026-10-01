import { useState } from "react"


const boton = {    width:"50px",
        height:"40px",
        fontSize: "20px"
    }
function Incrementar(){
    const [contador, setContador] = useState(0)
    const [mostrar, setMostrar] = useState(false)

    

    function incremento(){
    setContador(contador + 1)
    
}

function decremento(){
    if(contador >0){setContador(contador - 1)}
}
return(
    <>
    <h1>Contador: {contador}</h1>
    <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
    <button onClick={incremento} style={{
        width:"50px",
        height:"40px",
        fontSize: "20px"
    }}>+</button>
    <button onClick={decremento} style={boton}>-</button>
    </div>
    
    <button onClick={()=>setMostrar(!mostrar)}>Mostrar/ Ocultar</button>
    {mostrar && <p>Informacion visible</p>}
    </>
)
}

export default Incrementar