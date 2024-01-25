import styles from "./Botao.module.css"

function Botao({ to, children }) {
return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={styles.botao}>{children}</a>
    )
}

export default Botao;