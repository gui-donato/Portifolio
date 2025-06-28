import React from "react";
import "./Header.css";

import githubIcon from "../components/github.ico";  // Caminho para o ícone do GitHub
import linkedinIcon from "../components/linkedin.ico";  // Caminho para o ícone do LinkedIn
import emailIcon from "../components/email.ico";  // Caminho para o ícone do E-mail


const Header = () => (
  <header className="header">
    <div className="header-top">
      <div className="header-name">
        <h1>Guilherme Donato</h1>
        <p>Desenvolvedor Front-End | HTML | CSS | JavaScript | React</p>
      </div>
    </div>

    <div className="header-nav">
      <a href="#about">Sobre</a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
    </div>
    <div className="header-bottom">
  <div className="header-links">
    <a href="https://github.com/gui-donato" target="_blank" rel="noopener noreferrer">
      <img src={githubIcon} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/-guilhermedonato/" target="_blank" rel="noopener noreferrer">
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>
    <a href="mailto:guidonato.conato@hotmail.com">
      <img src={emailIcon} alt="Email" />
    </a>
  </div>
</div>
  </header>
);

export default Header;
