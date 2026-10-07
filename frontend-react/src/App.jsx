import {useEffect, useState } from "react";
//import Pantalla from "./components/ejemplos/Pantalla";

function App(){


// const [alumno, setAlumno] = useState({
//   nombre:"Ana",
//   curso: "Programacion IV"
// })

// useEffect(()=>{
//   document.title = `Alumno: ${alumno.nombre}`
// }, [alumno])

  const[nombre, setNombre] = useState("")

  useEffect(()=>{
    if (nombre){
    document.title = `Hola ${nombre}`
 }else{
  document.title = `Mi aplicacion`
 }
 }, [nombre])
  



return(
  <>
  <input value={nombre}
  onChange={(e)=> setNombre(e.target.value)}
  placeholder="Escribi tu nombre"/>

  <h2>Hola {nombre}</h2>
  </>


)

}




export default App;
