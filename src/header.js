import React from 'react';
import Boton from './componentes/Boton' // solocitamos el componente extractor

const Header = (props) => {
  // aqui iran las variables let de los states
  let {handleClick} = props
  return(
    <div>
      <h1>Header</h1>
      <Boton
        handleClick={handleClick}
        />
    </div>
  )
}

export default Header;
