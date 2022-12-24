import React, {useState} from 'react'; // Hook

export default function ContadorHooks (props) {
    //useState necesita valor y metodo 
    //console.log(useState())
    // useState(): Puede recibir cualquier tipo de dato y por cada variable se tiene un useState diferente

    const [contador, setContador] = useState(0) //Destructuracion de useState


    const sumar = () => setContador(contador + 1)

    const restar = () => setContador(contador - 1)

    return(  // Metodo render en componentes de funcion
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
            <h3>{contador}</h3>
        </>
    )
}

ContadorHooks.defaultProps = {
    titulo: 'Click',

}
