import { useState, useEffect } from "react";
import { FaAddressBook, FaHome } from "react-icons/fa";
import { FaPersonSnowboarding } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import "./Navegacao.css";

export const Navegacao = () => {
  const [ativo, setAtivo] = useState("link1");

  // Esse código dentro do useEffect é configurado para ser executado após o componente ser montado e também pode ser desmontado.

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.6,
    };

    // Cria uma nova instância do IntersectionObserver e define uma função de callback.
    // A função de callback recebe um array de entradas (entries) que está sendo observado.
    // Para cada entrada (entry), ele verifica se está intersectando (entry.isIntersecting).
    // Se estiver intersectando, atualiza o estado ativo com o id da seção visível (entry.target.id).

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAtivo(entry.target.id);
        }
      });
    }, options);

    // Adiciona cada seção à lista de observação do IntersectionObserver

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Remove todas as observações das seções para evitar vazamentos de memória.

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="navegacao">
      <div className="container">
        <div className="links" title="Ver sobre Moisés Barsoti">
          <a
            href="#sobreMim"
            onClick={() => setAtivo("sobreMim")}
            className={ativo === "sobreMim" ? "ativo" : ""}
          >
            <FaHome className={ativo === "sobreMim" ? "ativo-icon" : ""} />
            Sobre Mim
          </a>
        </div>
        <div className="links" title="Ver formações de Moisés Barsoti">
          <a
            href="#formacoes"
            onClick={() => setAtivo("formacoes")}
            className={ativo === "formacoes" ? "ativo" : ""}
          >
            <IoIosDocument
              className={ativo === "formacoes" ? "ativo-icon" : ""}
            />
            Formações
          </a>
        </div>
        <div className="links" title="Ver experiências de Moisés Barsoti">
          <a
            href="#experiencias"
            onClick={() => setAtivo("experiencias")}
            className={ativo === "experiencias" ? "ativo" : ""}
          >
            <FaAddressBook
              className={ativo === "experiencias" ? "ativo-icon" : ""}
            />
            Experiências
          </a>
        </div>
        <div className="links" title="Ver portifólio de Moisés Barsoti">
          <a
            href="https://portifolio-one-theta-71.vercel.app/"
            target="_blank"
            onClick={() => setAtivo("portfolio")}
            className={ativo === "portfolio" ? "ativo" : ""}
          >
            <FaPersonSnowboarding
              className={ativo === "portfolio" ? "ativo-icon" : ""}
            />
            Portifólio
          </a>
        </div>
      </div>
    </div>
  );
};
