import React from "react";
import './Display.css'

const Display = ( {tipo, value} ) => {

  const evaluarClase = (valor) => {
    return (valor === 'Clicks')
  }
  return (
    <div className="display">
      <div className={`contador ${evaluarClase(tipo) ? 'clicks' : ''}`.trimEnd()}>
        <p>{tipo}</p>
        <span>{value}</span>
      </div>
    </div>
  )
}

export default Display;