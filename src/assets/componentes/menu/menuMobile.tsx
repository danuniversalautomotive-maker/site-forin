import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./menuMobile.module.css";
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.menuMobileContainer}>
      {/* Cabeçalho com logo + botão */}
      <div className={styles.menuMobileContent}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <img src="logo.png" className={styles.logo} />
        <p style={{color: "#083D8B"}}>......</p>
      </div>

      {/* DropMenu que abre abaixo do header */}
      {isOpen && (
        <>
          
          <div className={styles.menuMobileHeader}>
            <hr />
            <a href="/portifolio">Portifólio</a>
            <a href="#">Rastrear Carga</a>
            <a href="/orcamento">Orçamento</a>
            <Link to="/contato">
              Contato
            </Link>
          </div>
        </>
        
      )}
    </nav>
  );
}
