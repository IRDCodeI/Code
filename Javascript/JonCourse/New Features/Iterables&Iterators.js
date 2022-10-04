//Todo >> Iterables & Iterators
// Iteracion es una vuelta en el recorrido del ciclo

// Iterable, significa que es una estructura de datos lienal
//  donde sus datos son publicos y es posible recorrerlos.

// Iterador: Interfaz que apunta y recorre los elementos de la estructura de datos
//  es el mecanismo que recorre los elementos.

//?Diferentes metodos de recorrido:
//  > Destructuracion
//  > For-Of
//  > Array.from()
//  > Spread Operator
//  > Promises

//? Interfaz directa del operador
// Iterador directo por medio del elemento next(), permite recorrer cada uno de los elementos

//* Iterador del Iterable
// Para acceder al iterador se usa symbol.iterator

const iterable = new Set([1, 2, 3, 3, {'user': 'Stalin'}]);
const iterableString = 'Hola Mundo';

//?Iterador
const iterador = iterable[Symbol.iterator]();
const iteradorString = iterableString[Symbol.iterator]();

console.log(iterable);
console.log(iterador)

console.log(iterableString);
console.log(iteradorString); // StringIterator

//* Recorrido de elementos
//1er valor.- Valor del iterable
//2do valor.- Valor que indica si ya terminaron los elementos
/*
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/

let next = iterador.next();

while( !next.done ){ // Lectura propiedad done
    console.log(next.value);
    next = iterador.next(); //Almacenado del siguiente elemento
}

//* Iterador, apunta y guarda el que objeto se quedo
