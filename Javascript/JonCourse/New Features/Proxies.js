//Todo >> Proxies
// Mecannismo que permite crear un objeto basado en un objeto literal inicial
//  > Similar a la programacion de objetos 
//  > Recibe objeto literal y genera copia
//      >> Permite realizar validaciones u otras acciones de la copia antes de realizar una asignacion de valores en la propiedad
//      >> Hay un medio de vinculacion el cual es el HANDLER (Manejador)
//  > Permite restringir y evitar que no sufran cambios la copia que esta realizando
//  > Copia tiene vinculacion con el objeto prinicipal por medio del handler

const person = {
    name: '',
    lastanem: '',
    age: 0
}

//* Manejador se ejecuta cada que se realizan cambios

const handler = {  // --> Manejador, logica de validaciones
    //Objeto, Propiedad, Valor
    set(obj, prop, value){  // --> Parametro obligatorio para la validacion
        //Validaciones
        if(Object.keys(obj).indexOf(prop) === -1){ // Identifica si la propiedad existe en el objeto original
            return console.error(`La propiedad "${prop}" no existe en Persona`);
        }

        if(
            (prop === "name" || prop === 'lastanem') &&
            !(/^[A-Za-z\s]+$/g.test(value)) // \s--> Espacios en blanco
        ){
            return console.log('Solo letras y espacios en blanco')
        }

        // Si no hay validaciones:
        obj[prop] = value; // Establece el valor que recibe del usuario en el Proxi
    }
}

//? Permite validar que el tipo de dato corresponda por medio de un proxy

const stalin = new Proxy(person, handler) //--> Copia del objeto

console.log(stalin);
//* Establece los valores automativamente del objeto que se basa

stalin.name = 'Stalin-29'; // Se ejecuta handler
stalin.lastanem = 'David';
stalin.age = 20;

stalin.twitter = '@stalin';

//* No se inicializan los parametros debido al metodo set(), ya que realiza las
//* vaidaciones para evitar la modificaciones de la estructura del objeto.

//Mantienen vinculacion por lo que si hay modificacion en la copia tambien se afecta el original
console.log(stalin);
console.log(person);

//* TARGET: Es el objeto del cual se basa