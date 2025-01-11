import React, { useState, useEffect } from "react";
import "./Hero.css";

// Lista de frases
const phrases = [
  "Codificar é transformar ideias em realidade.",
  "A tecnologia é o futuro, e o futuro está em nossas mãos.",
  "Cada linha de código é um passo para algo incrível.",
  "Programar é resolver problemas do mundo real com lógica e criatividade.",
  "A melhor forma de prever o futuro é criá-lo."
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <blockquote className="hero-quote">
          {phrases[currentPhrase]}
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;
