import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MbNavContext } from '../context/MbNavState'

import '../css/TopNav.css'

function TopNav({section}) {

  const {nav, setNav} = useContext(MbNavContext)
  const links = ['Inicio', 'SobreMi', 'Experiencia', 'Proyectos', /*'Diseños', "API'S",*/ 'Contacto']


  return (
    <nav className='topNav'>
      <FontAwesomeIcon onClick={(() => setNav(!nav))} size={'lg'} color='grey' icon={faBars} className='topNavIcon'/>
      
      {links.map((link, index)=> <Link key={index} to={`/${link}`}><span className={`navItem ${link === section ? 'topNavSelected' : ''}`}>{link}</span></Link>)}
    </nav>
  )
}

export default TopNav