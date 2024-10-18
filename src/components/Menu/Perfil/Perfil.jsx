import fotoMoisesBlusaAzul from "../../../assets/fotoMoisesBlusaAzul.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import "./Perfil.css";

export const Perfil = () => {
  return (
    <div className="perfil">
      <img src={fotoMoisesBlusaAzul} alt="Uma fotografia de Moisés Barsoti" />
      <h1>Moisés Barsoti</h1>
      <div className="icones">
        <div className="caixaIcon">
          <a
            href="https://www.instagram.com/moises_barsoti?igsh=Nmhxb245dXVnaTdn"
            target="_blank"
          >
            <FaInstagram
              className="icon"
              title="Ver Instagram de Moisés Barsoti"
            />
          </a>
        </div>
        <div className="caixaIcon">
          <a href="https://github.com/moisesBarsoti" target="_blank">
            <FaGithub className="icon" title="Ver Github de Moisés Barsoti" />
          </a>
        </div>
        <div className="caixaIcon">
          <a
            href="https://www.linkedin.com/in/mois%C3%A9s-barsoti-468869278"
            target="_blank"
          >
            <FaLinkedin
              className="icon"
              title="Ver Linkedin de Moisés Barsoti"
              href=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
