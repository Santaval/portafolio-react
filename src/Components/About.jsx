import React, { useEffect } from "react";
import offLights from "../lib/AboutLights";

function About() {

  useEffect(() => {
    offLights()
  }, [])

  return (
    <section id='about' className="aboutSection">
      <div className="presentationContainer">
        <img src="assets/code-solid.svg" alt="" className="mainLogoRender shine" />

        <div className="infoContainer">
          <p className="name aboutWhiteShine">Aaron Santana Valdelomar</p>
          <p className="subtitle shine">Full Stack Web Developer</p>
          <p className="resume">
          Hola, soy un desarrollador web y de aplicaciones móviles de 19 años con 5 años de experiencia. Actualmente estoy estudiando en la Universidad de Costa Rica y me especializo en desarrollo web y desarrollo de aplicaciones móviles. En mi portafolio, encontrarás algunos de mis trabajos recientes y desafiantes en el desarrollo de aplicaciones móviles y web.
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="footerItem">
          <p className="title">Redes Sociales</p>
          <i className="fa-brands fa-instagram shine"></i>
          <i className="fa-brands fa-facebook shine"></i>
        </div>

        <div className="footerItem">
          <p className="title">Contacto</p>
          <div className="contact shine">info@savaldev.com</div>
        </div>

        <div className="footerItem">
          <p className="title">Idiomas</p>
          <div className="lenguagesContainer">
            <i className="fa-solid fa-globe shine"></i>
            <p className="shine">Español <span>{'(nativo)'}</span></p>
            <p className="shine">Inglès <span>{'(intermedio)'}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
