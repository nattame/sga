import Titulo from "./components/Titulo"
import {Navbar} from "./components/Navbar"
import Footer from "./components/Footer"
import TarjetaAlumno from "./components/TarjetaAlumno.jsx"

function App(){

 return(
    <>
    <Navbar />
  <Titulo texto="Sistema de Gestion Academica" color="blue" />
  <h2>Administracion de Alumnos</h2>
  <TarjetaAlumno 
  nombre="Natan Velazquez"
  carrera = "Programacion"
  edad = "20"/>
  
  <br/>
  
   <TarjetaAlumno 
  nombre="Axel Llaves"
  carrera = "Mozo"
  edad = "24"/>
  
  <br/>
  

  <Footer />
    </>
 )
}

export default App;
