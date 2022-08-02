//JavaScript es CaseSensitive

//--------------------------------------------
//-----------------VARIABLES------------------
//--------------------------------------------
//Tipos de variables existentes en javascript
//Variables Globales: Estan disponibles en cualquier otro codigo
//Variable local: Variable declarada en una funcion y solo disponible en la misma
//Constante: No se puede modificar su valor y solo es para lectura 

var name = 'Stalin'; //Variable para enfoque local(bloque) o global
let place = 'Quito'; //Variable con enfoque de bloque
const num = 13; //Constante de solo lectura y bloque

//Identificadores
//Nombres para variables, se usan o deben empezar con _, $, 0 a 9

//Formas de Declaracion
var number = 9;
var lastname;
lastname = 'Masache';

//Valores de definicion por defecto
//Nan: Not a Number
//Null
//Undefined

//-------------------------------------------------------------------
//Elevacion: Cuando se declara una variable se la llama y luego inicializa regresa null

//--------------------------------------------
//-------------TIPO DE DATOS------------------
//--------------------------------------------

Boolean //true - false
null //valor nulo
undefined //Valor no definido
Number //Numero entero con coma flotante 42 o 3.14159
BigInt //Numero entero con precision arbitraria 900719925470992n
String //Secuencia de caracteres
Symbol //Tipo de dato con instancias unicas e inmutables
Object //Contenedores con nombre para valores
Function // Procedimientos que se pueden programar

//Operador "+"
//Convierte numero a string y sirve para concatenar cadenas
//  Conversion de texto a numeros
    parseInt(); //Devuelve numero enteros
    parseFloat();

//--------------------------------------------
//-------------Literales------------------
//--------------------------------------------

//Valores fijos y no variablesde tipo String, Objetos, Booleanos, Number,etc
//Arreglo: Conjunto de 0 o mas expresiones encerradas entre [] y "length" establece numero de argumentos

let coffes = ['Colombian', 'Kona', 'Minerva'];
let myList = ['home', , 'school', , ]; // Se ignora la ultima coma

//Literales numericos
//Numerico Decimal: sin cero inicial - 116
//Numeros octales: con cero inicial (0O) - 015
//Numero hexadecimal: con una 0x inicial 0xA - 0x1123
//Numero binario: con un 0b inicial - 0b11

//Litales de comaflotante
//3.1416, -.1234, -3.1E+12, .1e-23

//Array de Objetos
var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

//*Object Literals
//?Lista de cero o mas pares de nombres de propiedad y valores asociados a un objeto
//?entre llaves

var sales = 'Toyota'

function carTypes(name) {
    if (name === 'Honda') {
      return name;
    } else {
      return "Lo sentimos, no vendemos " + name + ".";
    }
  }

  var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

  console.log(car.myCar);   // Saturn
  console.log(car.getCar);  // Honda
  console.log(car.special); // Toyota
//? Anidacion de literales en una propiedad

var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

//*Literales mejorados:
//?Permite configuracion de protipo, abreviatura de foo: foo, llamadas a super
//?y calculo de nombre de propiedades con expresiones

var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Abreviatura de "handler: handler"
    handler,
    // Métodos
    toString() {
     // Llamadas a super
     return 'd ' + super.toString();
    },
    // Nombres de propiedad calculados (dinámicos)
    [ 'prop_' + (() => 42)() ]: 42
};

//*Cadena de Literales
//TODO: Creación de cadenas literales básicas
`en JavaScript '\n' es un avance de línea.`

//TODO: Cadenas multilínea
`En JavaScript, las cadenas de plantilla pueden ocupar
 varias líneas, pero las cadenas entrecomillas dobles o
 simples no pueden.`

//TODO: Interpolación de cadenas
var name = 'Bob', time = 'today';
`Hola ${name}, ¿cómo estás ${time}?`

//TODO: Construye un prefijo de petición HTTP utilizado para interpretar los reemplazos y la construcción
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);