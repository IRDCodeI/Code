//* Modulos (import, export)

//? Permite llamar archivos js desde otros archivos js
//? >> Archivos JS debe estar llamados al final de la etiqueta body

//Todo > Se debe agregar un atributo al archivo javascript para que se puedan llamar 
//Todo > los modulos "type='module'";, y es importante ya que permite importar los archivos
//Todo > sin este daria error

//Todo > Para que no se cargue un archivo que no soporta modulos se agrega el atributo
//Todo > "nomodule", evitando asi que duplique la funcionalidad del codigo

//? para exportar se usa la palabra "export";

export const PI = Math.PI;

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a + b;
}

export const operaciones = {
    sumar,
    restar
};

//? para importar se usa la palabra "import";
//? Ademas se usa la destructuracion para llamarlas

//import {name export} from './name.js' --> ./ (Buscar a partir de la carptea que esta)
//* import {PI} from "./constantes.js"

//? Se puede exportar todo lo que necesitemos

//* Importacion por defecto
//? Cuando se llama a un modulo la funcion importada por defecto es la que se va a ejecutar
//? , no se puede tener dos cosas exportadas por defecto

//? Para llamar las importaciones por defecto se lo hace sin destructuracion
/*

import saludar from './constantes.js'

export default function saludar(){
    console.log('Importacion de Modulos por defecto')
}
*/

//Todo >> Una exportacion por defecto no se puede usar con const o let por el tema de alcance y hoisting
//Todo >> Exportaciones por defecto sin antes establecer un valor solo pueden ser usadas por 
//Todo >> funciones y clases

let pass = 'qwer';
export default pass;

/*
    export default class Saludar{
        constructo(){
            console.log('Hola');
        }
    }
*/

//* Generacion de Alias

// import {aritmetica as calc} from './aritmetica.js';
// calc.sumar(3, 7);