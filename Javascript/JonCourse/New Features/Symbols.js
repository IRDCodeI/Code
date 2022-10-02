//Todo >> Symbols
// Tipo de dato primitivo como (string, int, ...) y posee la caracteristica de que
// cuando se crea un symbol se mantiene privado y para uso interno.
//      > Usado en Objetos (propiedad) ya que se mantiene privadas
//      > Permite crear identificadores unicos o de referencia
//      > Crea una referencia unicas 
//      > Recibe como parametro una descripcion con el cual puede ser identificado
//      > Crear propiedades privdadas en objetos
//      > Oculta propiedades

//? >> Usados para identificar propiedades de objectos y evitar coliciones entre propiedades
//?     evitando sobreescribir

//? Se llama a la funcion constructura
Symbol();

let id1 = Symbol('id1');
let id2 = Symbol('id2');

console.log(id1, id2);
console.log(typeof id1);

let id3 = 'Hello';
let id4 = 'Hello';

console.log( id1 === id2? true : false)
console.log( id3 === id4? true : false)

//* Declaracion de variables con Symbol
const NAME = Symbol('Name');

const persona = {
    [NAME]: "Stalin", // Propiedad Symbol continua con el mismo valor ya que se establecio con corchete
    edad: 20
}

console.log(persona);

persona.NAME = "David";

console.log(persona); 
console.log(persona.NAME);

//Para llamar a un Symbolo se usa los corchetes
console.log(persona[NAME]);

//* Symbols con funciones

const HI = Symbol('Hi');

persona[HI] = function (){
    console.log('Hola');
}

console.log(persona);

for( let p in persona){
    console.log(p);
    console.log(persona[p]);
}
//? No se detecta los symbolos ya que son propiedades privadas

//* Listado de Atributos privados
console.log(Object.getOwnPropertySymbols(persona)); // --> Arreglo de Simbolos

//* Se pueden crear propiedades que hagan referencia aun simbolo

//* Se puede usar en una API donde ciertos valores se deben mantener internos
//* los cuales hacen funcionar internamente la API

//* !Codigo mas seguro y mas rendimiento!