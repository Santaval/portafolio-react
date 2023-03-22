import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import '../css/MobileNav.css'

function MobileNav({section}) {

  const links = ['Inicio', 'SobreMi', 'Experiencia', 'Proyectos', /*'Diseños', "API'S",*/ 'Contacto']


  return (
    <nav className='mbNav'>
      <FontAwesomeIcon size={'lg'} color='grey' icon={faXmark} className='topNavIcon'/>
      
      {links.map((link, index)=> <Link key={index} to={`/${link}`}><span className={`navItem ${link === section ? 'topNavSelected' : ''}`}>{link}</span></Link>)}
    </nav>
  )
}

export default MobileNav;