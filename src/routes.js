import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import PaginaPadrao from "./pages/PaginaPadrao";
import Contato from "./pages/Contato";

function AppRoutes() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaPadrao />}> 
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="sobremim" element={<SobreMim />}></Route>
        <Route path="contato" element={<Contato />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}



export default AppRoutes;
