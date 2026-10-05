// import Titulo from "./components/Titulo"
// import {Navbar} from "./components/Navbar"
// import Footer from "./components/Footer"
// import TarjetaAlumno from "./components/TarjetaAlumno.jsx"
import CambiarTitulo from "./components/ejemplos/CambiarTitulo.jsx";
import Incrementar from "./components/Incrementar.jsx";
import { Adivina } from "./components/ejemplos/Adivina.jsx";
import Mensaje from "./components/ejemplos/Mensaje.jsx";
import TamanioTexto from "./components/ejemplos/TamanioTexto.jsx";
function App(){

 return(
    /*
    
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
    
    */


<>
<Incrementar />
<br/>
<CambiarTitulo/>

<br /><br />

<Adivina />

<br /><br /><br />

<Mensaje />

<br /><br /><br />

<TamanioTexto/>
</>
 )
}

export default App;
