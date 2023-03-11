import Aos from "aos";
import React, { useEffect } from "react";

function Projects() {
  return (
    <section id="projects" className="projectsSection">
      <ProjectCard
        number="01"
        subtitle="Mobile and Web App"
        title="Proactiva"
        link="https://www.proactivacr.net"
        linkTitle="www.proactivacr.net"
        description="Desarrollé una aplicación de programación para el gimnasio Proactiva, que permite a los clientes reservar/cancelar citas en línea y a los propietarios administrarlas. La aplicación incluía recordatorios de citas por correo electrónico y notificaciones automáticas."
        img="proactiva/Panel.png"
      />

      <ProjectCard
        number="02"
        subtitle="Online Store"
        title="Mirror Shop"
        link="https://mirror-shop.herokuapp.com"
        linkTitle="www.mirrorshopcr.com"
        description="Creé Mirror Shop, una tienda en línea que incluía una elegante interfaz de usuario, un sistema de pago seguro y herramientas de marketing como cupones y seguimiento de pedidos. La tienda online fue un gran éxito para el cliente."
        img="MirrorPanel.png"
      />
    </section>
  );
}

function ProjectCard({
  number,
  subtitle,
  title,
  link,
  linkTitle,
  description,
  img,
}) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="projectCard">
      <p className="number">{number}</p>
      <div className="content">
        <span className="subtitle shine">{subtitle}</span>
        <p className="title">{title}</p>
        <a className="shine" target="__blank" href={link}>
          {linkTitle}
        </a>
        <p className="description">{description}</p>
      </div>
      <div className="imgContainer">
        <div
          style={{ backgroundImage: `url(assets/${img})` }}
          className="imgRender"
        ></div>
      </div>
    </div>
  );
}

export default Projects;
