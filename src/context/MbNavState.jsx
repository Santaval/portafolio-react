import { createContext } from "react";
import React, {useState} from "react"

const MbNavContext = createContext()



const MbNavState = (props) => {

  const initialState = false

  const [nav, setNav] = useState(initialState)
  

  return(
    <MbNavContext.Provider value={{setNav, nav}}>
      {props.children}
    </MbNavContext.Provider>
  )
}

export default MbNavState;
export {MbNavContext};