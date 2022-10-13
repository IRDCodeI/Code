// Estado
//? Conjunto de variables que tienen la aplicacion y dichas variables
//? intervienen en la modificacion del componente, y como se encuentran en 
//? cierto momento dado (Que valores poseen)

//? > Es inmutable (Cuando se modifica estado, se crea una copia y a dicha copia se le
//?     agrega lo nuevo y genera un nuevo estado, !No permite modificacion directa!)

//? > No se puede modificar directamente

//? > Es asincrono

//* Metodo >> setState()

//? Propagacion es unidireccional osea que va de padres a hijos

import React, {Component} from 'react';

function EstadoHijo(props) {
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

export default class Estado extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };

        setInterval(() => {
            //this.state.contador += 1 --> No se permite cambio directo
            this.setState({
                contador: this.state.contador + 1,
            });
        }, 1000);
    };

    render(){
        return(
            <div>
                <h2>State</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo contadorHijo={this.state.contador}/>
            </div>
        );
    };
};