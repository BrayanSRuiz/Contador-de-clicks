import React, {useState} from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Display from './componentes/Display';

function App() {
  const [contValue, updateCont] = useState(0)
  const [clicksValue, updateClicks] = useState(0)
  
  const aumentar = () => {
      updateCont(contValue + 1)
      updateClicks(clicksValue + 1)
  }

  const decrementar = () => {
    updateCont(contValue -1)
    updateClicks(clicksValue +1)
  }

  const reiniciar = () => {
    updateCont(0)
    updateClicks(0)
  }

  return (
    <div className="app">
      <h1>Contador de clicks</h1>
      <div className='pantalla'>
      <Display tipo='Contador' value={contValue}/>
      <Display tipo='Clicks' value={clicksValue}/>
      </div>
      <div className='botones'>
        <Boton clase='click' tipo={aumentar} name='Incrementar +' />
        <Boton clase='click' tipo={decrementar} name='Decrementar -' />
      </div>
      <div className='boto-reiniciar'>
        <Boton clase='reiniciar' tipo={reiniciar} name='Reiniciar' />
      </div>
    </div>
  );
}

export default App;
