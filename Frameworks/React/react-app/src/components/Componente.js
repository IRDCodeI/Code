import React from 'react'

//* Clase 

// class Componente extends Component {
//     render(){
//         return (
//             <h2>{this.props.msg}</h2>
//         )
//     }
// };

//* Funcion

// function Componente(props){
//     return(
//         <h2>{props.msg}</h2>
//     )
// }

const Componente = (props) => <h2>{props.msg}</h2>

export default Componente;