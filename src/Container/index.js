import Botao from "../components/Botao";
import styles from "./Container.module.css"
import fotoPerfil from "./fotoperfil.png";

function Container() {
    return (
        <section className={styles.container}>
            <img src={fotoPerfil} alt="foto perfil" />
            <div className={styles.botoes}>
            <Botao to={"https://github.com/maikaminski"}>Github</Botao>
            <Botao to={"https://www.linkedin.com/in/maikaminski/"}>Linkedin</Botao>
            <Botao to={"https://vercel.com/dashboard"}>Vercel</Botao>
            </div>
        </section>
    )
}

export default Container;