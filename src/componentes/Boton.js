import React from "react";
import './Boton.css'

const Boton = ( {tipo, clase, name} ) => {
  return (
    <div className={clase} onClick={tipo} >
      {name}
    </div>
  )
}

export default Boton;