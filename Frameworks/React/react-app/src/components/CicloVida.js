//* Ciclo de Vida
// Metodos para ejecutar acciones de manera automatica en Class Component:
//  Montaje: Se inserta componente en el DOM
//?     Metodos: constructor(), render(), componentDidMount()
//  Actualizacion: Se renderiza el componente por paso de props, reviso de info, etc
//?     Metodos: render(), componentDidUpdate()
//  Desmontaje: Cuando componente desaparece de la UI
//?     Metodos: componentWillUnmount()

import React, {Component} from "react";

class Reloj extends Component{

    constructor(props){
        super(props);
    }    

    render(){
        return <h3>{this.props.hora}</h3>;
    }

    componentWillUnmount(){ // Se ejecuta cuando el componente ya no esta en el DOM
        console.log(3,'Componente fue eliminado del DOM')
    }
}

export default class CicloVida extends Component{

    constructor(props){
        super(props);
        console.log(0, "Componente se inicializa, aun no esta en el DOM")

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        }

        this.temporizador = null;
    }

    tictac = ()=> {
        this.temporizador = setInterval(()=> {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        },1000)
    }

    iniciar = ()=> {
        this.tictac();
        this.setState({
            visible: true,
        })
    }

    detener = ()=> {
        clearInterval(this.temporizador)
        this.setState({
            visible: false,
        })
    }

    render(){ // Convierte JSX en HTML y agrega al DOM
        console.log(4, "Componente se dibuja o redibuja en el DOM")
        return(
            //<h3>{this.state.hora}</h3>
            <>
                <h2>Ciclo de Vida de Componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }

    componentDidMount(){ // Funcion para cuando el componente ya esta en el DOM (render)
        console.log(1, "Componente en el DOM")
    }

    componentDidUpdate(prevProps, prevState){ // Permite pasar props y estados previos para trabajar con dichos values antes de actualizar
        console.log(2, 'El state o props del componente cambio')
        console.log(prevProps, prevState)
    }

}