import { Outlet } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";


function PaginaPadrao () {
    return (
        <main>
            <Cabecalho />
                
                <Outlet />
            
            <Rodape />
        </main>
    )
}

export default PaginaPadrao;