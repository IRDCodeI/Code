import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes.js"
import CicloVida from "./components/CicloVida"
import AjaxApis from "./components/AJAXApis";
import ContadorHooks from './components/HookState'
import ScrollHooks from "./components/ScrollHooks";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
      <section>
        <Componente msg="Atributo para componente de React 'prop'" />
        <hr/>
        <Propiedades 
          // Corchetes indican que se va a escribir codigo JS
          cadena="String"
          numero={19} // --> Uso con propTypes, permite recibir ciertos valores o hacer validaciones
          booleano={false}
          arreglo={[1, 2, 3]}
          objeto={{name: 'Stalin', 'email': 'dev.rdcode@gmail.com'}}
          funcion={(num) => num * num}
          elementoReact = {<i>Elemento React</i>}
          componenteReact={<Componente msg="Componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <ContadorHooks titulo="Seguidores"/>
        <hr/>
        <ScrollHooks/>
      </section>
      </header>
    </div>
  );
}

export default App;
