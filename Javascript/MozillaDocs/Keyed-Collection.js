//* COLECCION CON CLAVE
//Objetos Map y Set tienen elementos que son iterables en orden de insercion

//? ----Mapas----
//Es un mapa de clave/valor simple y se puede iterar sobre los elementos en el
//roden de insercion

let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

//? ---Comparar Object y Map---
//Objetos permiten establecer claves a valores, recuperar esos valores, eliminar
//y detectar si algo esta almacenado en una clave

//Diferencias de Map:
//* Claves son cadenas o simboolos que pueden tener cualquier valor
//* Se puede obtener el size de un Map facil, y en el Object se debe hacer un seguimiento
//* Iteracion de mapas estan en el orden de insercion
//* Object tiene un prototipo, por lo que hay claves predeterminadnas en el map para omitir(map = "Object.create(null")

//? Consideraciones de Uso
//* Mapas sobre objetos cuando claves seans desconocidas hasta el momento de ejecucion
//* y cuando claves sean del mismo tipo y valores sean del mismo tipo

//*Mapas si es necesario almacenar valores primitivos como claves porque el objeto
//*trata cada clave como una codena, ya sea valor numerico, booleano, etc

//* Objetos cuando haya logica que opere en elementos individuales

//? ----WeakMap---- https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html, 
//Colecion de pares clave/valor en donde claves son objetos y valor pueden ser arbitrarios,
//aqui referencia de objeto son debiles, lo que los hace un objeto de recoleccion de basura (GC Garbage Collection)

//Claves en WeakMap no son enumerables, osea no hay metodo que de una lista de las claves

//Se usa para almacenar datos privados para un objeto u ocultar detalles de implementacion, ya que datos
//y metodos privados pertencen al objeto y se almacenan en privates del objeto WeakMap
// solo la instancia y prototipo es publico, lo otro es privado y no se exporta desde el modulo

const privates = new WeakMap();

function Public() {
  const me = {
    // Los datos privados van aquí
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Hacer cosas con datos privados en `me`...
};

module.exports = Public;

//? ----Sets----
//Coleccion de valores  iterables en el oreden de insercion, este solo aparee una vez y es unico en el Set

let mySet = new Set();
mySet.add(1);
mySet.add('algún texto');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "algún texto"

//? --Conversion entre array y Set
//Se puede crear un array apartir de un set usando Array.from y set acepta array para convertirlo en set
//!Set solo almacena valores unicos, y si se duplica un elmento se elmina al realizar la conversion

Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);

//? --Comparar Array y Set----
//* Elimina elementos aray por valor
//* Objeteos set permite eliminar elementos por valor
//* Valor NaN son se puede encontrar con indexOf en un arreglo
//* Set almacenan valores unicos, no es necearios realizar seguimiento

//? ----WeakSet----
//Son coleccion de objetos, el cual peude aprecer una vez
//* WeakSets son coleccion unicamente de objetos y no de valores arbitarios 
//* Es debil: Referencia a objetos coleccion son debiles, y si no hay otra referencia, se peude 
//* usar como recoelctados basura, por lo que no hay objetos almacenados en la collecion y no se peuden enumerar

//? --Igualdad de clave y valor de Maps y Set--
//las claves se basan en algoritmo del mismo valor cero
//*Igualdad funcionada como ===
//* -0 y 0+ son iguales
//* Nan se considera igual a si mismo
//Todo: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Keyed_collections