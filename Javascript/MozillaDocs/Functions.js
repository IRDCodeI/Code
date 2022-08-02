//* Funciones
//Bloques son un conjunto de instrucciones 
//Para ser una fucnion debe tomar un valor de entrada y devolver
//uno de salida

//?Declaracion de funcion
//Consta de:   
//Palabra reservada: function
//nombre de la funcion
//parametros de la funcion
//declaracion 

function square(number) {
    return number * number;
}
  
//Valores primitivos como number son cambiados por la funcion, pero no se
//refleja globalmente dicho cambio

//Valores complejos como propiedades de un objetos son cambias por la funcion
//y se reflejas globalmente

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  //*[parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
  var x, y;
  
  x = mycar.make; // x obtiene el valor "Honda"
  
  myFunc(mycar);
  y = mycar.make; // y obtiene el valor "Toyota"
                  // (la propiedad make fue cambiada por la función)
  
//?Expresiones function
//Es una funcion anonima ya que no tiene nombre, pero se le puede asignar un nombre
//  Cuando se declara un nombre se puede referenciar a la misma funcion dentro de la funcion

const square = function(number) { return number * number } //Anonima
var x = square(4) // x obtiene el valor 16

const factorial = function fac(n) { 
    return n < 2 ? 1 : n * fac(n - 1) } //Con nombre
console.log(factorial(3))

//Son usadas cuando se para una funcion como argumento
function map(f, a) {
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);

//Se puede definir en una condicion
var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}

//?Lammar funciones
//Llamar a la funcion en realidad realia las acciones especificas con los
//parametros indicados.

//Las funciones definidas como constantes no pueden ser llamadas antes de la
//inicializacion.

console.log(square)    // square se eleva con un valor inicial undefined.
console.log(square(5)) // Error de tipo no detectado: square no es una función
const square = function(n) {
  return n * n;
}

//Las fucniones definidas como "funciones" si pueden ser llamadas antes de ser
//inicializadas
//! El ambito de la fucnion se puede elevar cuando aparece debajo de la llamada de la funcion
//! Solo trabaja con declaraciones de funcion
console.log(square)  
console.log(square(5))
function square(n) {
  return n * n;
}

//Una funcion puede llamarse a si misma

function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}

//? Ambito de una Funcion
//No se puede acceder a la variables definidas dentro de una funcion, ya que estan 
//pertenecen al ambito de la funcion

//  Una funcion puede accerder a todas las variables y funciones definidas
//  dentro de esta.
  //Una funcion puede global accede a variables globales 
  //Una funcion local dentro de otra accede a variables que la funcion
  // contenedora y la original tenga acceso

  // Las siguientes variables se definen en el ámbito global
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// Esta función está definida en el ámbito global
function multiply() {
  return num1 * num2;
}

multiply(); // Devuelve 60

// Un ejemplo de función anidada
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + ' anotó ' + (num1 + num2);
  }

  return add();
}

getScore(); // Devuelve "Chamahk anotó 5"

//?Ambito y pila de funciones

//*Recursion
//Hay 3 formas de hacer que una funcion se refiera a si misma
//1) Nombre de la funcion
//2) arguments.callee
//3) Variable dentro del ambito que se refiere a la funcion

var foo = function bar() { } 

// cuepo de funcion:
bar(), arguments.callee(), foo()

//Una funcion que se llama a si misma es una funcion recursiva
//Para realizar algoritmo recursivos se reuiqre el uso de pila "pila de funciones"

function foo(i) {
  if (i < 0)
    return;
  console.log('inicio: ' + i);
  foo(i - 1);
  console.log('fin: ' + i);
}
foo(3);

// Produce:

// inicio: 3
// inicio: 2
// inicio: 1
// inicio: 0
// fin: 0
// fin: 1
// fin: 2
// fin: 3

//?Funciones anidadas y cierres
//Se puede anidar una funcion dentro de otra y esta va a ser privada 
//Ademas forma un cierres (Expresion que peude terner vairables libres junto con un entorno que una las variables)

//Funcion anidada peude heredar los argumentos y variables de la funcion contenedora
//*Solo se puede acceder a la funcion interna desde declaraciones en funcion externa
//*Funcion interna forma un cierre ya que puede usar arguments y variables externa y la externa
//*no puede usar los de las interna

function addSquares(a, b) {
  function square(x) {
    return x * x; //Funcion que forma cierre
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // devuelve 13
b = addSquares(3, 4); // devuelve 25
c = addSquares(4, 5); // devuelve 41

//*Preservacion de variables
//Se conserva x cuando se devuelve inside, ya que un cierre conserva arguemntos y variables en todos los 
//ambitos que hace referencia

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Piensa en ello como: dame una función que agregue 3 a lo que sea que le des
                        // eso
result = fn_inside(5); // devuelve 8

result1 = outside(3)(5); // devuelve 8

//*Funciones multianidadas
//Se puede anidar varias funciones, en donde los cierres pueden tener multiples ambitos
//Se le conoce como encadenamiento de enlace

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // registra 6 (1 + 2 + 3)

//* Conflictos de nombres
//Cuando hay dos var en el ambito de un cierres con el mismo nombre, hay un conflicto 
//y aqui tiene mas prioridad el ambito interno 

function outside() {
  var x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

outside()(10); // devuelve 20 en lugar de 10

//? Cierres
//Permiten el anidamiento de funciones y otorga acceso a varaiables y funciones
//definicadas en la funcion externa. Porporcionando una encapsulacion para las vars internas

var pet = function(name) {   // La función externa define una variable llamada "name"
  var getName = function() {
    return name;             // La función interna tiene acceso a la variable
                             // "name" de la función externa
  }
  return getName;            // Devuelve la función interna, exponiéndola así a ámbitos externos
}
myPet = pet('Vivie');

myPet();                     // Devuelve "Vivie"

//--------------------------
var getCode = (function() {
  var apiCode = '0]Eal(eh&2';    // Un código que no queremos que los externos puedan modificar...

  return function() {
    return apiCode;
  };
})();

getCode();    // Devuelve el apiCode

//? Obejeto arguments
//Arguementos se envian como arguments[i] -> i el numero ordinal del argumento
//Numero total de argumentos con arguments.length

//Se puede llamar a una funcion con mas argumentos de los que se declara, puede ayudar
//cuando no sabemos cuantos argumentos se pasan a la funcion

  //Usamos arguments.length para determinar el numero de arguemntos para na funcion y luego
  //acccedemos a cada uno con el indice

  function myConcat(separator) {
    var result = ''; // inicia list
    var i;
    // itera a través de arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }
 
 myConcat(', ', 'red', 'orange', 'blue');
 myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

 //? Parametros de funcion
 
 //*Parametros predetermiandos: 
 //Parametros de funciones estas predetermiandos en undefined, pero podemos modificar ese valor

//*Con Parametros
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5

//*Parametros rest
//Permite representar un numero indefinido de argumentos como un arreglo
//erst para recopliar argumento desde el segundo hasta el final 

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

//? Funciones Flecha
//No posee this, arguments, super, new.target
//Estas son siempres anonimas

//* Funciones mas cortas

var a = [
  'Hidrógeno',
  'Helio',
  'Litio',
  'Berilio'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]

//*Sin this separado
//El valor this se usa en el contexto de ejecucion adjutno

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| propiamente se refiere al objeto person
  }, 1000);
}

var p = new Person();
//TODO: Considereaciones

//Si una función encerrada define una variable con el mismo nombre que una variable en el ámbito externo,
// entonces no hay forma de hacer referencia a la variable en el ámbito externo nuevamente. (La variable 
//de ámbito interno "anula" la externa, hasta que el programa sale de el ámbito interno).

//* Un metodo es una funcion que es propiedad de un objeto