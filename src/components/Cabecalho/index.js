

import CabecalhoLink from "../CabecalhoLink";
import styles from "./Cabecalho.module.css"


function Cabecalho() {
    return (
    <>
        <header className={styles.cabecalho}>
        <nav>
                <CabecalhoLink url="/">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="/sobremim">
                    Sobre mim
                </CabecalhoLink>
                <CabecalhoLink url="/contato">
                    Contatos
                </CabecalhoLink>
            </nav>
            
        </header>
    </>
    )
}

export default Cabecalho;