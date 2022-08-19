//*-------------- Object Console---------------------
// Consola de JS permite enviar mensajes que pueden ser errores o altertas

console.log(console);

console.error('Error'); // --> Errores
console.warn('Alerta'); // --> Alerta
console.info('Informacion'); // --> Informacion
console.log('Registro de lo sucedido');

let nombre = 'Stalin', apellido = 'Pillajo', edad = 35;

console.log(nombre, apellido);

//Comodines, representan cierto valor con algun tipo de dato
console.log(`Nombre es %s y apellido es %s con edad de %d`, nombre, apellido, edad);

console.clear(); //--> Limpia toda la consola

//? Document, es la representacion del documento HTML en JS, podemos modificar este con JS

// console.log(window);
// console.log(document); --> Muestra el codigo html del documento

// console.dir(window);
// console.dir(document); --> Muestra todas las propiedades, metodos, etc que tiene el documento

//? Grupos en consola

console.group(); // --> Muestra todo desplegado
console.log('JS');
console.log('NodeJS');
console.log('ReactJS');
console.groupEnd();

console.groupCollapsed(); //--> Muestra un menu desplegable

console.table(Object.entries(console).sort()); // --> Genera fila por cada propiedad

const nums = [1, 2, 3, ,4 , 5], letters = ['a', 'e', 'i', 'o', 'u'];

console.table(nums);
console.table(letters);

const dog = {
    nombre: 'Boni',
    raza: 'Boxer',
    color: 'cafe'
}

console.table(dog);

//* Para calcular el tiempo que demora una peticion o al ejecucion del codigo y saber el rendimiento de la app

console.time('Tiempo'); // --> Bandera de inicio, se puede agregar un msj pero debe ser igual al final

const array = Array(1000000);

for (let index = 0; index < array.length; index++) {
    array[index] = index;
}

console.timeEnd('Tiempo'); // --> Bandera de fin

//* Saber la cantidad de veces de ejecucion de un codigo

for (let i = 0; i < 100; i++) {
    console.count('Push');
    console.log(i);
}

//* Para realizar pruebas con console

let x = 3, y = 2,  z = 'X debe ser menor que Y';

console.assert(x < y, {x,y,z}); //--> Prueba condicion, variables