import React from "react";
import TopNav from "../Components/TopNav";

import '../css/Contact.css'

function Contact() {
  return (
    <>
      <TopNav section={"Contacto"} />
      <section id="contact" className="contact">
        <div className="container">
          {/* <div className="contactButton" data-aos="fade-right">
            <h6>ContactMe</h6>
          </div> */}

          {/* <form action="/contactUs" data-aos="fade-left">
            <div className="inputContainer">
              <input type="text" placeholder="Nombre" name="user" />
            </div>

            <div className="inputContainer">
              <input type="text" placeholder="Correo" name="email" />
            </div>

            <div className="inputContainer">
              <input
                type="text"
                placeholder="Mensaje"
                name="reason"
              />
            </div>

            <button className="submit">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form> */}

          <div className="socialsContainer" data-aos="fade-right">
            <p>Socials</p>
            <div className="icons">
              <a
                target="_blank"
                href="/"
                rel="noreferrer"
              >
                {" "}
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                target="_blank"
                href="/"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>

              <i className="fa-brands fa-whatsapp"></i>
            </div>

            <p className="emailp">aaron.santana@ucr.ac.cr</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
