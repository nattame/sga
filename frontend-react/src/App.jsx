
import Alumnos from "./pages/Alumnos"
//import SelectorTema from "./components/SelectorTema"
import FAQ from "./pages/FAQ"
import {Routes,Route} from "react-router-dom"
import LayoutPrincipal from "./layouts/LayoutPrincipal"
import Inicio from "./pages/Inicio"
import Docentes from "./pages/Docentes"

function App()
{
    return(
        <Routes>
            <Route path="/" element={<LayoutPrincipal/>}>
            <Route index element={<Inicio/>}/>
            <Route path="alumnos" element={<Alumnos/>}/>
            <Route path="docentes" element={<Docentes/>}/>
            <Route path="ayuda" element={<FAQ/>}/>
            
            </Route>
        </Routes>
    )
}
export default App