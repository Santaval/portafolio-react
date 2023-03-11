import React, { useEffect } from 'react'
import scrollIndicator from '../lib/ScrollShine'

function SectionsNav() {
  return (
    <div className='sectionsNavContainer'>
      <nav className="mainNav">
        <div className="line" />
        <Indicator to={'#about'} sectionName='Sobre Mì'/>
        <Indicator to={'#experience'} sectionName='Experiencia'/>
        <Indicator to={'#knowledge'} sectionName='Conocimiento'/>
        <Indicator to={'#projects'} sectionName='Proyectos'/>
      </nav>
    </div>
  )
}


function Indicator ({to, sectionName}) {

  useEffect(() => {
    scrollIndicator()
  }, [])

  return (
    <div className="indicator">
      <div className="dot"></div>
      <a href={to}><span id={to + 'Indicator'} className="sectionName">{sectionName}</span></a>
    </div>
  )
}

export default SectionsNav