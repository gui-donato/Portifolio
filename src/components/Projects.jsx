import React from "react";
import "./Projects.css";

// Importa as imagens diretamente
import EspacoBelezaImage from "../components/espaçobeleza.png";
import ProjetoEstudosImage from "../components/pastel.png";

const projects = [
  {
    title: "Espaço Beleza",
    description: "Site para divulgação de produtos e serviços de beleza.",
    link: "https://gui-donato.github.io/espaco-beleza/",
    image: EspacoBelezaImage, // Usa a imagem importada
  },
  {
    title: "Lux Pastelaria",
    description: "Freelancer - Landing Page",
    link: "https://quiet-figolla-705d15.netlify.app/",
    image: ProjetoEstudosImage, // Usa a imagem importada
  },
];

const Projects = () => (
  <section id="projects" className="section projects">
    <h2>Meus Projetos</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-image-container">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-link"
              >
                Ver Projeto
              </a>
            </div>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
