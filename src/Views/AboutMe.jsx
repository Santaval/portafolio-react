import { faDownload, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import TopNav from "../Components/TopNav";
import Knowledge from '../Components/Knowledge'
import "../css/AboutMe.css";
import Aos from "aos";

function AboutMe() {

    useEffect(() => {
        Aos.init()
    }, [])

  return (
    <>
      <TopNav section={"SobreMi"} />
      <div  className="aboutMe">
        <img src="assets/profilepic.png" alt="" />
        <div className="body">
          <p className="name h1">Aaron Santana</p>
          <div  className="info text">
            Hola, soy un desarrollador web y de aplicaciones móviles con 4 años
            de experiencia. Actualmente estoy estudiando en la Universidad de
            Costa Rica y me especializo en desarrollo web y desarrollo de
            aplicaciones móviles. Me considero una persona apasionada,
            responsable y siempre dispuesto a aprender y a poner mis
            conocimientos a disposiciòn de los demás. En mi portafolio,
            encontrarás algunos de mis trabajos recientes y desafiantes en el
            desarrollo de aplicaciones móviles y web.
          </div>

        <div className="buttons">
        <a href="assets/cv.pdf" download={"CV Aaron Santana"}>
            <button className="btn1">
              Currículum <FontAwesomeIcon icon={faFileDownload} />
            </button>
          </a>

         <a href="#knowledge">
         <button className="btn2">
             Mis conocimientos
            </button>
         </a>
        </div>
        </div>


      </div>

      <Knowledge />
    </>
  );
}

export default AboutMe;
