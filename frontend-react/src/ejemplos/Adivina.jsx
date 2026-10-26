import {useState} from "react";

export function Adivina(){
    const [seleccion, setSeleccion] = useState("")
    const[resultado, setResultado] = useState("")
    const[colorResultado, setColorResultado] = useState("")
    const[ganadas, setGanadas] = useState(0)
    const[perdidas, setPerdidas] = useState(0)
    const[partidas, setPartidas] = useState(0)

    function sortear(){
        const ganador = Math.floor(Math.random() * 10) + 1
        const elegido = Number(seleccion)

        setPartidas(partidas + 1)

        if (seleccion === " "){
            setResultado("Ingresa un numero")
            setColorResultado("red")
            return
        }
        if(elegido<1 || elegido > 10){
            setResultado("Ingresa un numero entre el 1 y 10 :3")
            
            return
        }
        if(elegido === ganador){
            setResultado(`Ganador, sailo ${ganador}, vamos a felicitarle`)
            setColorResultado("green")
            setGanadas(ganadas + 1)
            
            return
        }else{
            setResultado(`y bueno si perdio jodase que salio ${ganador}`)
            setColorResultado("red")
            setPerdidas(perdidas + 1)
        }
    }

    return(
        <>
        <h2>Adivina el numero</h2>
        <input type="number" value={seleccion} onChange={(e)=>setSeleccion(e.target.value)} />
        <button onClick={sortear}>Adivinar</button>
        <p style={{color: colorResultado}}>{resultado}</p>
        <hr/>
        <p style={{color:"white"}}>Partidas Jugadas: {partidas}</p>
        <p style={{color: "red"}}>Partidas Perdidas:{perdidas}</p>
        <p style={{color: "green"}}>Partidas Ganadas:{ganadas}</p>
        </>
    )
}