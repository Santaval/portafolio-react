import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Experience() {
  return (
    <section id="experience" className="experienceSection">
      <ExperienceCard
        place="Cubreasientos de Costa Rica"
        time="2019-2021"
        work="Getiòn de Redes Sociales"
        description="Atención de mensajes y comentarios en redes sociales como Facebook e Instagram, soporte al cliente y desarrollo de un sistema de control de pedidos."
      />

      <ExperienceCard
        place="Inversores Inteligentes Elite"
        time="2021-2022"
        work="Full Stack Web Developer"
        description="Desarrollo de una web donde se ofrecen cursos sobre criptomonedas la cual incluye un sistema de registro y administraciòn de archivos."
      />

      <ExperienceCard
        place='Proactiva'
        time="2023"
        work="Mobile and Web App Developer"
        description="Desarrollo y mantenimiento de una aplicaciòn mòvil y web para que los usuarios agendaran citas en las diferentes actividades del gimnasio."
      />
    </section>
  );
}

function ExperienceCard({ place, time, work, description }) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
   
    <div  data-aos="fade-up" data-aos-duration="1000" className="experienceCard">
      <div className="header">
        <p className="workPlace whiteShine">{place}</p>
        <span className="year shine">{time}</span>
      </div>
      <div className="line"></div>
      <div className="body">
        <p className="title">{work}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Experience;
