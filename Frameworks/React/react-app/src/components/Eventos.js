//* Eventos

// Manejo de eventos similar a DOM pero aqui se nombran con camelCase y se
// pasa una funcion como manejador del evento.

// > Se debe considerar el renderizado no del metodo render solo de un componente
// > En class components se hace un bind del this a la clase

//? onClick={cambiarIdioma}

import React, {Component} from "react";

export class EventosES6 extends Component{

    // Definicion de eventos en un class component ES6
    constructor(props){
        super(props);
        
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this) // bind de la clase al metodo 
        this.restar = this.restar.bind(this) 
    }

    sumar(e){
        console.log("Sumando");

        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e){
        console.log("Restando");

        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button> 
                    <button onClick={this.restar}>-</button> 
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//Properties Initializer
export class EventosES7 extends Component{

    // Definicion de eventos en un class component ES7
        state = { // Atributo o propiedad de clase 
            contador: 0,
        }

    //Arrow Function "Autobinding" - Arrow function toma el contexto donde se encuentra o clase que pertenecen
    sumar= (e) => {
        console.log("Sumando");
        console.log(this)
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) =>{
        console.log("Restando");

        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button> 
                    <button onClick={this.restar}>-</button> 
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}