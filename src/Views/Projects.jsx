import React from "react";
import TopNav from "../Components/TopNav";
import "../css/Projects.css";

function Projects() {
  return (
    <>
      <TopNav section={"Proyectos"} />
      <div className="projects">
        <ProjectCard
          number="01"
          type="Web App"
          title="Mirror Shop"
          url="http://mirror-shop.herokuapp.com"
          domain="www.mirrorshopcr.com"
          description="App with customer registration system, management of subscriptions, files and information in general"
          imgPath={"assets/MirrorPanel.png"}
        />
        <ProjectCard
          number="02"
          type="Web and Mobile App"
          title="Proactiva"
          url="http://proactivacr.net"
          domain="www.proactivacr.net"
          description="Desarrollé una aplicación de programación para el gimnasio Proactiva, que permite a los clientes reservar/cancelar citas en línea y a los propietarios administrarlas. La aplicación incluía recordatorios de citas por correo electrónico y notificaciones automáticas.
          "
          imgPath={"assets//proactiva/Panel.png"}
        />
      </div>
    </>
  );
}

function ProjectCard({
  number,
  type,
  title,
  url,
  domain,
  description,
  imgPath,
}) {
  return (
    <div className="projectCard">
      <div className="header">
        <p className="number">{number}</p>
        <div className="body">
          <p className="type details">{type}</p>
          <p className="title">{title}</p>
          <a className="details" target="_blank" href={url} rel="noreferrer">
            {domain}
          </a>
          <p className="description text">{description}</p>
        </div>
      </div>
      <img src={imgPath} alt="" />
    </div>
  );
}

export default Projects;
