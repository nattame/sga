
import Alumnos from "./pages/Alumnos"
//import SelectorTema from "./components/SelectorTema"
import FAQ from "./pages/FAQ"
import {Routes,Route} from "react-router-dom"
import LayoutPrincipal from "./layouts/LayoutPrincipal"
import Inicio from "./pages/Inicio"

function App()
{
    return(
        <Routes>
            <Route path="/" element={<LayoutPrincipal/>}>
            <Route index element={<Inicio/>}/>
            <Route index element={<Alumnos/>}/>
            <Route index element={<FAQ/>}/>
            </Route>
        </Routes>
    )
}
export default App