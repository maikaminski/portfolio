
import Titulo from "../../components/Titulo";
import styles from "./SobreMim.module.css";


function SobreMim() {
    return (
        <>
        <Titulo />
            <section className={styles.sobre}>
                <h2>Olá! Sejam bem-vindas(os)</h2>
                <p>Meu nome é <span>Maíra</span>, sou formada e Mestra em História, Doutora Interdisciplinar em Ciências Humanas e estou abrindo os horizontes para a área de <span>tecnologia</span>.</p>
                <p>Tenho mais de 10 anos de experiência em pesquisa, produção e revisão textual, acadêmicas e de livros didáticos, tendo atuado como pesquisadora dos Laboratórios de Pesquisa em História Ambiental e Gênero da Universidade Estadual do Centro-Oeste (UNICENTRO) e do Laboratório de Pesquisa em Imigração, Migração e História Ambiental da Universidade Federal de Santa Catarina (UFSC). Mais de 5 anos de experiência com revisão e edição de trabalhos acadêmicos das mais diversas áreas, atuando na formatação, adequação às normas da ABNT, ortografia e concordância. Tenho formação e Mestrado em História, e Doutorado Interdisciplinar em Ciências Humanas. 1 ano de experiência como professora do Ensino Médio do Estado de Santa Catarina.</p>
                <p>Como professora da educação básica, lecionei as disciplinas de Projeto de Pesquisa e Pesquisa de Campo e Intervenção Local no Estado de Santa Catarina. Meu objetivo sempre foi facilitar ao máximo o aprendizado, de forma dinâmica, entendendo o processo individual de cada um, sem perder de vista o coletivo.
                Essa experiência me permitiu desenvolver e aperfeiçoar as relações pessoais, sempre em busca da <span>resolução de problemas</span> com excelência. Qualidades que trago para a área da tecnologia e que julgo essenciais para um bom profissional de qualquer âmbito. </p>
                <p>Como <span>Desenvolvedora Front-end</span>, busco soluções práticas, sempre levando em consideração a melhor experiência do usuário, com códigos de fácil manutenção e visando as boas práticas da programação. Estou estudando pela plataforma Alura para me especializar em React, e iniciando os estudos em Back-end, com objetivo de me tornar uma Desenvolvedora Full-Stack.</p>
            </section>
        </>
    )
}

export default SobreMim;