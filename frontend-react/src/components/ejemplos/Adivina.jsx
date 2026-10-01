import {useState} from "react";

export function Adivina(){
    const [seleccion, setSeleccion] = useState("")
    const[resultado, setResultado] = useState("")

    function sortear(){
        const ganador = Math.floor(Math.random() * 10) + 1
        const elegido = Number(seleccion)

        if (seleccion === " "){
            setResultado("Ingresa un numero")
            return
        }
        if(elegido<1 || elegido > 10){
            setResultado("Ingresa un numero entre el 1 y 10 :3")
            return
        }
        if(elegido === ganador){
            setResultado(`Ganador, sailo ${ganador}, vamos a felicitarle`)
            return
        }else{
            setResultado(`y bueno si perdio jodase que salio ${ganador}`)
        }
    }

    return(
        <>
        <h2>Adivina el numero</h2>
        <input type="number" value={seleccion} onChange={(e)=>setSeleccion(e.target.value)} />
        <button onClick={sortear}>Adivinar</button>
        <p>{resultado}</p>
        </>
    )
}