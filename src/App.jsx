import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Formacoes } from "./components/Sections/Formacoes/Formacoes";
import { Experiencias } from "./components/Sections/Experiencias/Experiencias";
import { Footer } from "./components/footer/Footer";
import { Navegacao } from "./components/Menu/Navegacao/Navegacao";
import { Perfil } from "./components/Menu/Perfil/Perfil";
import { SobreMim } from "./components/Sections/SobreMim/SobreMim";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const [menuFechado, setMenuFechado] = useState(false);

  const toggleMenu = () => {
    setMenuFechado(!menuFechado);
  };

  return (
    <div className="containerPrincipal">
      <div className={`menu ${menuFechado ? "fechado" : ""}`}>
        <div className="container">
          {menuFechado && (
            <FaArrowDown onClick={toggleMenu} title="Abrir Menu" />
          )}
          <Perfil />
          <nav>
            <Navegacao />
          </nav>
          {!menuFechado && (
            <FaArrowUp
              onClick={toggleMenu}
              title="Fechar Menu"
              className="iconFecharMenu"
            />
          )}
        </div>
      </div>

      <div className="sectionContainer">
        <section id="sobreMim">
          <SobreMim />
        </section>
        <section id="formacoes">
          <Formacoes />
        </section>
        <section id="experiencias">
          <Experiencias />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};