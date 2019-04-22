import React from 'react'; // llamamos a react que es el general
import ReactDOM from 'react-dom'; // este manipula al DOM y por medio de su metodo puede hacer la interfaz
import './index.css'; // el estilo el cual esta importado
import App from './App'; // la apliacion general la cual

let renderizar = document.getElementById('root');  // donde queremos renderizar nuestro elemento

let apliacion = <App/> // lo enlazamos para que sea mas limpia la sintaxis

ReactDOM.render(apliacion, renderizar); // usando el metodo de ReactDOM para poder crear la parte visual

// apliacion es el link que tengo en mi index.html el cual react usa como ID
