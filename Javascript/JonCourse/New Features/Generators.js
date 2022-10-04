//Todo >> Generators
// Funcion que permite trabajar de manera mas sencilla, con la interfaz de los iteradores
//  >> Agregar "*" para que JS sepa que es un generador
//  >> yield.- Es un return que devuelve un valor cuando un iterador se lo pide
//      >>> Este yield envia el valor y deja el puntero, cuando vuelve a ejecutar un next(),
//          busca el siguiente yield si no hay otro devuelve un done false 
//  >> Mecanismo similiares a datos iterables

//* Funcion Iterable
function* iterable () { // --> "*" Permite hacer iterable la funcion y acceder al iterador
    yield 'Hola';
    console.log('Hola Consola');
    
    yield 'Mundo'
    console.log('Otro Hola');

    yield 'Desde';

    yield 'Generators';
}

//? Se puede usar cuando una funcion retorna ciertos valores despues que que pase una 
//? iteracion, osea que transforma en iterables una funcion

let iterador = iterable();
/*
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/

for (let y of iterador) {
    console.log(y);
};

//? Los yields pueden ser almacenados para luego ser trabajados

//* Almacenamiento de Yields
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor){
    setTimeout(() => {
      return console.log({valor, resultado: valor*valor}); 
    }, Math.random() * 1000);
};

function* generador2 () {
    console.log('Inicia Generador');
    yield cuadrado(0);

    yield cuadrado(1);

    yield cuadrado(2);

    yield cuadrado(3);

    console.log('Termina Generador')
}

let gen = generador2();

for( let y of gen){
    console.log(y);
}

//? Estamos generador una asincronia no bloqueante

//!Repasar un poco mas