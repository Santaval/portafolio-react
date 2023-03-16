import React from "react";
import Squares from "../Components/Squares";
import TopNav from "../Components/TopNav";

import "../css/Experience.css";

function Experience() {
  return (
    <>
      <TopNav section={"Experiencia"} />
      <div className="experience">
        <ExperienceCard
          job="Desarrollador Full Stack"
          enterprise="Inversores Inteligentes Èlite"
          description=" Desarrollo de una web donde se ofrecen cursos sobre criptomonedas la cual incluye un sistema de registro y administraciòn de archivos.
          "
          time='2021-2021'
        />
        <ExperienceCard
          job="Gestor de redes sociales"
          enterprise="Cubreasientos de Costa Rica"
          description=" Atención de mensajes y comentarios en redes sociales como Facebook e
          Instagram, soporte al cliente y desarrollo de un sistema de control
          de pedidos."
        />

        <ExperienceCard
          job="Desarrollador mòvil y web"
          enterprise="Proactiva"
          description="Desarrollo y mantenimiento de una aplicaciòn mòvil y web para que los usuarios agendaran citas en las diferentes actividades del gimnasio."
          time='2023'
        /> 
      </div>
    </>
  );
}

function ExperienceCard({ job, enterprise, description, time }) {
  return (
    <div
      style={{ width: "700px", height: "700px" }}
      className="squaresContainer"
    >
      <div className="data">
        <div className="experienceCard">
          <p className="jobTitle text">{job}</p>
          <p className="enterprise h1">{enterprise}</p>
          <p className="description text">{description}</p>
          <p className="time text">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
