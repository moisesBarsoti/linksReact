import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import curriculo from "../../../assets/curriculo.pdf";
import "./SobreMim.css";

export const SobreMim = () => {
  return (
    <div className="containerSobreMim">
      <h2>Sobre Mim</h2>
      <p>
        Eaí, tudo bem? Eu me chamo Moisés Barsoti, nascido em São Paulo e tenho
        19 anos. Minha jornada é marcada por uma dedicação intensa. Sou
        apaixonado por voleibol, academia e música, atividades que moldam minha
        rotina e refletem a minha disciplina.
        <br /> <br />
        Minha formação técnica em Desenvolvimento pela Proz Educação,
        complementada por cursos extracurriculares, demonstra meu compromisso
        com a educação contínua e a excelência. Além disso, acumulo 10 meses de
        experiência na Atento, onde atuo como análise e suporte a sistemas,
        aprimorando minhas habilidades técnicas e solucionando problemas.
        <br /> <br />
        Essa combinação de interesses pessoais e formação profissional resulta
        em um perfil dinâmico e versátil, pronto para enfrentar novos desafios e
        contribuir de maneira significativa em qualquer ambiente.
      </p>
      <div className="linksSobreMim">
        <ul>
          <li id="instagram" title="Ver Instagram de Moisés Barsoti">
            <a
              href="https://www.instagram.com/moises_barsoti?utm_source=qr&igsh=Nmhxb245dXVnaTdn"
              target="_blank"
            >
              <FaInstagram />
              Instagram
            </a>
          </li>
          <li id="github" title="Ver Github de Moisés Barsoti">
            <a href="https://github.com/moisesBarsoti" target="_blank">
              <FaGithub />
              Github
            </a>
          </li>
          <li id="linkedin" title="Ver Linkedin de Moisés Barsoti">
            <a
              href="https://www.linkedin.com/in/mois%C3%A9s-barsoti-468869278"
              target="_blank"
            >
              <FaLinkedin />
              Linkedin
            </a>
          </li>
          <li id="curriculo" title="Deseja baixar currículo ?">
            <a href={curriculo} target="_blank">
              <IoIosDocument />
              Baixar currículo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
