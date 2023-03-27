import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MbNavContext } from '../context/MbNavState'

import '../css/MobileNav.css'

function MobileNav({section}) {

  const navigate = useNavigate()
  const {nav, setNav} = useContext(MbNavContext)
  const links = ['Inicio', 'SobreMi', 'Experiencia', 'Proyectos', /*'Diseños',*/ "API'S", 'Contacto']


  return (
    <nav className='mbNav'>
      <FontAwesomeIcon onClick={(() => setNav(!nav))} size={'lg'} color='grey' icon={faXmark} className='topNavIcon'/>
      
      {links.map((link, index)=> <span onClick={() => {navigate(`/${link}`); setNav(!nav)}} key={index} className={`navItem ${link === section ? 'topNavSelected' : ''}`}>{link}</span>)}
    </nav>
  )
}

export default MobileNav;