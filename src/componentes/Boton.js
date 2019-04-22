import React from 'react';
// se crea una clase de javascript que extiende de react y llama a un metodo render

const Boton = (props) => {
  return (
    <div>
      <h1>Soy el boton de que realizara un listado</h1>
      <div>
      <button type="button"
        onClick={props.handleClick}>
        clic soy el boton original
      </button>
      </div>
    </div>
  )
}
export default Boton;
