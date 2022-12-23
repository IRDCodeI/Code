//* Comuniacion entre componentes

// Flujo de comunicacion one way databinding (comunicacion en un solo flujo)
// de padres a hijos.

// C.C padre a un hijo: Paso de propiedades
// C.C hijo a padre: Por medio de eventos, osea hijo ejecuta metodo que esta dentro del padre
// C.C no relacionados: Permite compartir informacion de componentes que no sea padre e hijo "Redux, Context" como estado global
//    > Portales: Permite enviar informacion de un elemento diferente en el DOM (Otro "root")

import React, {Component} from 'react';

export default class Padre extends Component {

    state = {
        contador:0, 
    };

    incrementarContador = (e) => { // Metodo del padre
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    render(){
        return(
            //Hijo Padre
            <div> 
                <h2>Comunicacion entre componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Hijo incrementarContador={this.incrementarContador} 
                msj="Mensaje Hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador} msj="Mensaje Hijo 2"/>
            </div>
        );
    }
}

function Hijo (props){ //Componente
    return (
        //Ejecucion Hijo "prop"
        <>
            <h3>{props.msj}</h3>
            <button onClick={props.incrementarContador}>+</button> 
        </>
    )
}