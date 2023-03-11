import Aos from "aos";
import React, { useEffect } from "react";

function Knowledge() {
  return (
    <section id="knowledge" className="knowledgeSection">
      <KnowledgeCard
        img="code-solid-kn.svg"
        title="Lenguajes"
        elements={["JavaScript", "Python", "Java", "HTML", "Css"]}
        fade="right"
      />

      <KnowledgeCard
        img="react.svg"
        title="Frameworks y Librerìas"
        elements={["React-native", "ExpressJS", "Tailwind", "NodeJS", "React"]}
        fade="left"
      />

      <KnowledgeCard
        img="terminal-solid.svg"
        title="OS"
        elements={["Windowns", "Linux", "MacOS"]}
        fade="right"
      />

      <KnowledgeCard
        img="server-solid.svg"
        title="Infraestructuras"
        elements={["AWS", "Fly.io", "Heroku", "Netlify", "Hostinger"]}
        fade="left"
      />

      <KnowledgeCard
        img="database-solid.svg"
        title="Bases de Datos"
        elements={["MySQL"]}
        fade="right"
      />

      <KnowledgeCard
        img="lightbulb-solid.svg"
        title="Otas Habilidades"
        elements={["Google Analytics", 'Enseñanza', 'Comunicaciòn', 'Compañerismo']}
        fade="left"
      />
    </section>
  );
}

function KnowledgeCard({ img, title, elements, fade }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos={`fade-${fade}`}
      data-aos-duration="1000"
      className="knowledgeCard"
    >
      <div className="inconContainer">
        <img src={`assets/${img}`} alt="icon" />
      </div>
      <div className="body">
        <p className="title shine">{title}</p>
        <div className="pointsContainer">
          {elements.map((element, index) => (
            <p key={index} className="name">{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
