//* Renderizado de Elementos
//? Renderizado de elementos como arrays, objects, etc
//? Cuando se requiere pintar elementos de manera dinamica se usa una key
//?     > Permite asignar un indice a un elemento y que sea mas rapida la busqueda 
//?     en caso de un cambio 
//?     Generar ID por medio de librerias

import React, {Component} from "react";
import data from "../helpers/data.json"

function ElementoLista(props){
    return(
        <div>
            <li>
                <a href={props.el.web} target="_blank">{props.el.name}</a>
            </li>
        </div>
    );
}

export default class RenderizadoElementos extends Component {

    constructor(props){
        super(props);

        this.state = {
            seasons: ['Primavera', 'Verano', 'Invierno']
        }
    }

    render(){

        console.log(data);

        return(
            <div>
                <h2>Renderizado Elementos</h2>
                <h3>Estaciones</h3>
                <ol>
                    { this.state.seasons.map((el, index) => <li key={index}>{el}</li>)}
                </ol>
                <h3> Frameworks JSON</h3>
                <ul>
                    {
                        data.frameworks.map((el) => <ElementoLista key={el.id} el={el}/>)
                    }
                </ul>
            </div>
        );
    };
};