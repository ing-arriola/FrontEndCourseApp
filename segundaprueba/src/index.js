import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//funciona gracias a webpack para importar CSS
import App from './App';
import * as serviceWorker from './serviceWorker';
//renderiza la apicacion
//Lo que se dice es que se va a renderzar el elemento <App /> que en realidad es el archivo
//App.js en el elemento del documento HTML identificado como root
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
