//* Expresiones Regulares

//? Son secuencias de caracteres que forman un patron de buqueda usado en el analisis de cadenas
//? de texto o caracteres.

//Todo >> Permite validar la correcta escritura: email, dni, claves, etc.

// https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

//* > Declaracion de una Expresiones regular
// Funcion Constructora
//RegExp('Patron en donde buscar', 'Banderas[Comodines que se pueden agregar a la expresion]')
let cadena = 'Lorem ipsum dolor sit amet. Eum quia voluptatem est quia inventore et quia obcaecati. Et nostrum incidunt aut vitae similique eos ipsa odit est accusantium molestiae in cumque laborum. '

let expReg = new RegExp('lorem', 'ig');

//Declaracion Regular Clasica
let expRegA =/lorem/ig;
let expRegB = /\d/i
let expRegC = /[0-9]/ig; 
let expRegD = /lorem{1,3}/; // Debe repetirse de 1 a 3 veces, {1,} indica que se puede repetir infinitamente 

//* > Validacion en una cadena con 'test' (devuelve booleano) o 'exec' (devuelve un arreglo)

console.log(expReg.test(cadena));
console.log(expRegA.exec(cadena));

//? Banderas o Comodines
// g --> Encuentra la primera y continua buscando el resto de coincidencias
// i --> Ignora las mayus y minus
// d --> Representa digitos de 0 a 9

//* >> Para rangos validos se usan los corchetes []
//* >> Llaves indican repeticions {}