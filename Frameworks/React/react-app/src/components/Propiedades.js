import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'true' : 'false'}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{`Nombre: ${props.objeto.name} - Email: ${props.objeto.email}`}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

// Definicion de propiedades por defecto
Propiedades.defaultProps = {
    porDefecto: "Las Props",
};

// Permite definir a un componente atributo con el cual se define los 
// diferentes caracteristicas que soporten las propiedades
// https://www.npmjs.com/package/prop-types 

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,
}