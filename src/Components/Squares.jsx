import React from 'react'
import '../css/Squares.css'

function Squares({size, Component}) {
  return (
   <div style={{width: size, height:size}} className="squaresContainer">

    <div className="data">
      <Component/>
    </div>

   </div>
  )
}


export default Squares