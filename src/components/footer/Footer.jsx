import { FaAnglesUp } from "react-icons/fa6";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="containerFooter">
      <h3>Desenvolvido por Moisés Barsoti</h3>
      <a href="#sobreMim" title="Voltar ao início">
        <FaAnglesUp  />
      </a>
    </div>
  );
};
