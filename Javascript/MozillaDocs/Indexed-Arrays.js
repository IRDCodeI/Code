//* Colecciones indexadas

//?Coleccion de datos ordenados por un valor de indice, incluye objetos Array y TypedArray

//* ----Objeto Array----
//Array es una listta ordenada de valores a los que se refieren con un nombre e indice

//JS no tiene una dato array, pero se puede usar el objeto Array y usar los metodos
//con arreglos. Los metodos para manipular son varios y permiten manipular como
//unirlos, invertirlos y ordenarlos.

//? **Creacion de arreglos**
//Formas de declarar

//* let arr = new Array(element0, element1, ..., elementN)
//* let arr = Array(element0, element1, ..., elementN)
//* let arr = [element0, element1, ..., elementN]

//element0, element1, ... son lista de valores para elementos del arreglo.
//Cuando se especifican valores, el array inicia con ellos como elementos
//? *** Length, establece el numero de argumentos

//? ****Sintaxis de corchetes es "arreglo literal" o "iniciador de arreglo"
//! *Para crear arreglos, se usa la forma de corchetes

//Para crear elementos de longitud distinta de cero, sin ningun elemento se usa

// Esta...
//* let arr = new Array(arrayLength) //--> arrayLength es un numero

// ...da como resultado el mismo arreglo que este
//* let arr = Array(arrayLength)

// Esto tiene exactamente el mismo efecto
 //* let arr = []
arr.length = arrayLength

//? ****Arreglos tambien se pueden asignar como propiedad a un objeto
//? **Cuando se crear un arreglo con un valor Number entre [], crea un elemento con 
//? con dicho elemento y en Array() crea la cantidad de elementos en el numero

//!No se puede iniciar un array sin un numero entro (no 9.3)
//* let obj = {}
// ...
//* obj.prop = [element0, element1, ..., elementN]

// O
//* let obj = {prop: [element0, element1, ...., elementN]}

//*let arr = [42]       // Crea un arreglo con un solo elemento:
                     // el número 42.

//*let arr = Array(42)  // Crea un arreglo sin elementos
                     // y arr.length establecidos en 42.
                     //
                     // Esto es equivalente a:
//*let arr = []
arr.length = 42

//?Arreglos con elementos unicos, con un solo tipo de dato, es mejor
//? usar arreglos literales y luego crear un array varico antes de agregar el unico elemento

let wisenArray = Array.of(9.3)   // wisenArray contiene solo un elemento 9.3

//* ----Refiriendose a elementos del arreglo----
//Podemos acceder a propiedades usando la propiedad accessors

let myArray = ['Wind', 'Rain', 'Fire'] //Para referirnos al primer elemento hacemos

myArray[1], myArray[0]

//?Podemos acceder como un objeto

let arr = ['one', 'two', 'three']
arr[2]          // three
arr['length']   // 3

//* ----Llenar un arreglo----
//Se puede llenar un arreglo ingresando al indice del array

let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'
emp[2] = 'August West'

//? ***Si no se da un valor entero se creara una propiedad en el objeto
//? que representa al arreglo en lugar de un elemento de arreglo

//* let arr = []
arr[3.4] = 'Oranges'
console.log(arr.length)                 // 0
console.log(arr.hasOwnProperty(3.4))    // true

//? ***Se peude rellenar arreglo al crear

//* let myArray = new Array('Hello', myVar, 3.14159)
// OR
//* let myArray = ['Mango', 'Apple', 'Orange']

//* ---Entendiendo length----
//JS almacenan los elementos como propiedades de objeto estandar, y el indice como nombre de propiedad
//Length siempre devuelve el indice del ultimo elemento mas uno

let cats = []
cats[30] = ['Dusty']
console.log(cats.length) // 31

//? **Sse puede modificar el numero de elementos almacenados al truncar 

let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

cats.length = 2
console.log(cats)  // logs "Dusty, Misty" - Twiggy se ha eliminado

cats.length = 0
console.log(cats)  // logs []; el arreglo cats está vacío

cats.length = 3
console.log(cats)  // logs [ <3 elementos vacíos> ]

//? ----Iterando sobre arreglos----
//Forma sencilla:

let colors = ['red', 'green', 'blue']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

//Si arreglo contiene solo elementos de nodos DOM

let divs = document.getElementsByTagName('div')
for (let i = 0, div; div = divs[i]; i++) {
  /* Procesar div de alguna manera */
}

//* ***Evita sobrecarga para verificar la longiutd del arreglo y hace que 
//* variable div se reasigne al elemento actual cada vez que se reliaza el bucle

//? ---ForEach()--- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//Da una forma de iterar, ya que se ejecuta una vez por cada elemento del arreglo, pasado como argumento de la funcion
// Valores no asignados no se iteran con forEach, y este no se enumera cuando se itera
//pero se puede iterar asignando "undefined"

let colorsb = ['red', 'green', 'blue']
colorsb.forEach(function(color) {
  console.log(color)
})

//Funciones Flecha
colors.forEach(color => console.log(color))
// red
// green
// blue

let array = ['first', 'second', , 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// fourth

if (array[2] === undefined) {
  console.log('array[2] is undefined')  // true
}

array = ['first', 'second', undefined, 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// undefined
// fourth

//* ***No se recomienda iterar en arrelgos usando for...in, ya que se enumeran los elementos nomrales y proiedades enumerable

//? ----Metodos de Array----

//*concat(), une dos o mas arreglos y devuelve uno nuevo
//*join(delimiter = ','), une todos los elementos de un arreglo en una cadena
//* push(), agrega uno o mas elmentos al final de un arreglo y devuelve la longitud resultante
//* pop(), elimina el ultimo elmento de un arreglo y devuelve ese elemento
//* shift(), elimita el primer elemento de un arreglo y devuelve ese elemento
//* unshift(), agrega uno o mas elemento al inicio del arreglo y devuelve la longitud
//* slice(start_index, upto_index), extrae una seccion de un arreglo y devuelve un nuevo arreglo
//* splice(index, count_to_remove, addElement1, addElement2, ...), elimita elementos de un arreglo y los reemplaza "devuelve elementos que se elminaron"
//* reverse(), transpone los elementos y cambia la direccion 
//* sort(), ordena elementos en su lugar basado en alfabeto

//? ----Metodos Iterativos----
//Cada uno toma un 2da argumentos thisObjecto el cual se convierte en el valor de la palabra clave this
//Usa funciones retrollamas y se invoca con dos argumentos, que son elementos del array

//* indexOf(searchElement[, fromIndex]), buca en searchElement y devuelve el indice de la 1ra coincidencia
//* lastIndexOf(searchElement[, fromIndex]), busca desde el final y devuelve el indice
//* forEach(callback[, thisObject]), ejecuta callback en cada elemento del arreglo y devuelve undefined
//* map(callback[, thisObject]), devuelve un nuevo arreglo del valor de retorno de ejecutar callback en cada elemento del arreglo 
// *filter(callback[, thisObject]), devuelve un nuevo arreglo que contiene los elementos para los cuales callback devolvio true
//* every(callback[, thisObject]) devuelve true si callback devuelve true para cada elemento del arreglo
//* some(callback[, thisObject]), devuelve true si callback devuelve true para al menos un elemento del arreglo
//* reduce(callback [, initialValue]) aplica callback(acumulador, currentValue[, currentIndex[,array]]) para cada valor en el arreglo
//* a fin de reducir la lista de elementos a un solo valor
  //* si se da initialValue este va a ser el 1ra parametro y el valor del 1er elemento es el 2do valor
  //* si no se espcifica, entonce los dos 1ros valores seran los parametros
let​a = [10, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
console.log(total) // Imprime 60
//* reduceRight() funciona pero desde el ultimo elemento

//? ---Arreglo Multidimensionales----
//Se puede crear un arreglo que peude contener otros arreglos como elementos
//Se oueden usar como objetos y almacenar informacion relacionada

let ab = new Array(4)
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4)
  for (let j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']'
  }
}
/* 
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
*/

const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property);  // Registra "value"

//? ---Arreglos y expresiones regulares---
//Cuando se da una coincidente entre una er y cadena, el arreglo devuelve 
//propiedades y elementos que dan la informcion.
//Este es el valor de retorno de .exec(), mathc(), split()

//? --Trabajar con objetos tipo array--
//NodeList, devuelve por document.getElementsByTagName()  o arguemnts se ven y
//comportan como arreglos pero sin compartir metodos

//!Metodos de arregls no se puede aplicar en objetos similares a un arreglo
function printArguments() {
  arguments.forEach(function(item) {// TypeError: arguments.forEach no es una función
    console.log(item);
  });
}

//*Pero se pueden llamar usando prototipo
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}

//? tambien se pueden usar en cadenas, ya que proporcionan acceso secuencia a caracteeres de forma similar a un array
Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr)
})

//? ----Array tipados----
//Similares a arreglos y permiten acceder a datos binarios sin procesar

//* Buferes y vistas: arquitectura de arreglos con tipo
//Se divide implementacion bufes y vista.

//?Objeto ArrayBuffer
//Es un objeto que representa una porcion de datos, y para acceder a la memoria contenida
//en un buffer se usa una vista
//?Vista
//Da un contexto, osea un tipo de dtos, un desplazamiento inicial y un numero 
//de elemenots, que convierte los datos en un arreglo con tipo real

//?ArrayBuffer
//Es un tipo de datos que se usa para representa un bufer de datos binaros de longitud fija.
//Como no se puede manipular un ArrayBuffer se crea una vista de arreglo con tipo DataView que
//hace referencia al buffer en un formato especifico y lo usa para leer y escribir
//contenido del bufer

//?Bista de arreglos tipados
//Tienen nombres autodescriptivos y dan una vista para todos los tipos numericos habiturales
//como Int8, Uint32, Flot64 y {jsxref("Uint8ClampedArray")}}, que fija los valores entre 0 y 255.
//*Usado para procesamiento de datos en Canvas
//?Uint8Array --> Usado actualmente

//Todo: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections

