import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Squares from "../Components/Squares";
import TopNav from "../Components/TopNav";
import MobileNav from '../Components/MobileNav';
import {MbNavContext} from '../context/MbNavState'

import "../css/Landing.css";
function Landing() {


  return (
    <>
      <TopNav section={"Inicio"} />
      
      <div className="landing">
        <Squares className='landingSquare' size="300px" Component={Title} />
       <div className="description">
       <p className="introduction">Saval es mi marca personal como desarrollador web, y representa mi enfoque centrado en el cliente y mi pasión por crear soluciones digitales efectivas. En Saval, mi objetivo es brindar a mis clientes un servicio personalizado, trabajar en colaboración con ellos para entender sus necesidades y ofrecer soluciones que satisfagan sus objetivos. Además, me dedico a construir herramientas open source, como APIs y diseños, para que otros desarrolladores puedan utilizarlos en sus propios proyectos. Me enorgullece trabajar con profesionalismo y ética, entregando proyectos de alta calidad en tiempo y forma. Con Saval, puedes estar seguro de que estás trabajando con un desarrollador comprometido en crear soluciones web eficaces, atractivas e intuitivas para ti y tu audiencia.</p>

       <Link to={'/SobreMi'} className="btn1"><span >Conóceme</span></Link>
       </div>
      </div>
    </>
  );
}

function Title() {
  return <h1>Saval</h1>;
}

export default Landing;
