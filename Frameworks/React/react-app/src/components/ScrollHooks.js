import React, {useState, useEffect} from 'react';

//Se puede tener varios useEffect
// useEffect sin valores en lista de dependecia, funciona como montaje
//* Se recomienda aplicar la actualizacion con control de variable osea a las variables de estado que intervienen

export default function ScrollHooks() {
    
  const [scrollY, setScrollY] = useState(0)
  const [name, setName] = useState("Stalin")

  // Actualizacion
    useEffect(() => { // Cada que se renderiza se ejecuta       
      console.log("Actualizacion") //Actualizacion no se recomienda hacer peticiones por que se cae en un loop

      const detectarScroll = () => setScrollY(window.pageYOffset); //Funcion

      window.addEventListener('scroll', detectarScroll);

      return () => {
         window.removeEventListener('scroll', detectarScroll)
      }

    }, [scrollY]);

  //Montaje
    useEffect(()=>{
      console.log("Fase Montaje")
    }, []) // [] dependeci list "Arreglo" permite controlar variable de estado
                  // para que se ejecute una sola vez se deja vacia la lista "Montaje"

  //Desmontaje
    useEffect(() => {

      return () => { //return simula el desmontaje
        console.log("Desmontaje");
      } 
    })

    return(
        <>
            <h2>Hooks - useEffect "Ciclo de Vida"</h2>
            <p>Scroll Y {scrollY} px</p>
        </>
    )
}