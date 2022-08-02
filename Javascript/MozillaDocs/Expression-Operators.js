//* Expresiones y Operadores

//?Operadores
//Operador binario: operando1 operador operando2 => 3+4
//Operador unario: operador operando x++

//TODO Operadores de asignacion
//Asigna un valor al operando izquierdo basandose el valor en el operando derecho
//Cada expresion se evalua de derecha a izquierda
x = y
x += y
x -= y
x *= y
x /= y
x **=y

//Desestructuracion: Permite extraer datos de arreglos u objetos usando 
//una sintaxis que refleja la construccion de arreglos
var [one, two, three] = foo;

//TODO Operadores de comparacion
//Compara operandos y devuelve un valor logico en funcion de si la
//comparacion es true o flase
 //Aveces si los dos operandos no son del mismo tipo de datos JS
 // convierte los datos a uno compatible para comparacion

3 == 3 //Igual
3 != 3 //No es igual
3 ===3  //Estrictamente igual; Aqui no se convierte o transforman los datos en los demas si
3 !== 3 //Desigualdad estricta
3 > 3 //Mayor que
3 >= 3 //Mayor igual que
3 < 3
3 <= 3

//TODO Operadores de aritmeticos
//Toma un valor numerico como operandos y devuelve un solo valor numerico
12 % 5 //Residuo
3++ //Incremento
3-- //Decremento
-3 //Negacion unaria
+3 //Positivo unario
2 **3 //Operador de exponenciacion

//TODO Operadores de logicos
//Se usan con valores booleanos, y devuelve un valor booleano
//Los operadores || y && devuelven el valor de uno de los operandos especificados

3 && 2//AND logico
2 || 1// OR Logico
!3 //NOT Logico
//*Evaluacion cortocircuito
//Expresiones logicas se evaluan de izquerda a deracha, por lo que para realizar esta 
//evaluacion hacemos

false && anything //--? Se evalua corto como false
true || anythin //--> Se evalua corto como true

4 ?? 6 //Operador de fusion nulo, funciona como un OR Logico, pero solo 
    //regresa la 2da expresion cuando la 1ra es null (undefined)

//TODO Operadores de cadena
//Operador de concatenacion (+) contcatena dos valores de cadena, devolviendo
//la union de las dos en una

var mystring = 'alpha';
mystring += 'bet'; // se evalúa como "alphabet" y asigna este valor a mystring.

//TODO Operador condicional 
//Toma 3 operandos, y el operador puede tener uno de dos valores segun la condicion
//condition ? val1 : val2

var status = (age >= 18) ? 'adult' : 'minor';

//TODO Operador coma
//Evalua ambos operandos y devuelve el valor del ultimo operando, se usa
//en el for para permitir actualizacion de multiples variables cada vez en el bucle

var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
//                                ^
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);


//TODO Operadores de unarios
//Es una operacion con solo un operando
//?delete: Elimina propiedad de un objeto

delete object.property; //--> Object es el objeto y Property es la propiedad
delete object[propertyKey]; //--> property Key es una cadena que referencia a una propiedad existente
delete objectName[index];
delete property; // legal solo dentro de una declaración with

//delete devuelve true como operacion es posible y false cuando no es posible

x = 42; // implícitamente crea window.x
var y = 43;
var myobj = {h: 4}; // crea un objeto con la propiedad h

delete x;       // devuelve true (se puede eliminar si se crea implícitamente)
delete y;       // devuelve false (no se puede borrar si se declara con var)
delete Math.PI; // devuelve false (no se pueden eliminar propiedades no configurables)
delete myobj.h; // devuelve true (puede eliminar propiedades definidas por el usuario)

//?Eliminar elementos de un arreglo
//No se usa delete ya que la longitud del array no se afecta y otros elementos no se 
//vuelven a indexar
//  En este caso se usa otra manera como estabelcer undefined o usar metodo splice

//? typeof
//se usa como typeof operand o typeof(operand)

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

typeof myFun;       // devuelve "function"
typeof shape;       // devuelve "string"
typeof size;        // devuelve "number"
typeof foo;         // devuelve "object"
typeof today;       // devuelve "object"
typeof doesntExist; // devuelve "undefined"

typeof true; // devuelve "boolean"
typeof null; // devuelve "object"

typeof 62;            // devuelve "number"
typeof 'Hola mundo';  // devuelve "string"

typeof document.lastModified; // devuelve "string"
typeof window.length;         // devuelve "number"
typeof Math.LN2;              // devuelve "number"

typeof blur;        // devuelve "function"
typeof eval;        // devuelve "function"
typeof parseInt;    // devuelve "function"
typeof shape.split; // devuelve "function"

typeof Date;     // devuelve "function"
typeof Function; // devuelve "function"
typeof Math;     // devuelve "object"
typeof Option;   // devuelve "function"
typeof String;   // devuelve "function"

//?Operador void 
//Se usa como void(expression) o void expression
//Permite especificar una expresion que se evaluara sin devolver un valor

//TODO Operadores de relacionales
//Compara sus operandos y devuelve un valor boolean pasa en si comparacion es true

//? in
//Devuelve true si la propiedad esta en el objeto especificado

// Arreglos
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // devuelve true
3 in trees;        // devuelve true
6 in trees;        // devuelve false
'bay' in trees;    // devuelve false (debes especificar el número del índice,
                   // no el valor en ese índice)
'length' in trees; // devuelve true (la longitud es una propiedad de Array)

// objetos integrados
'PI' in Math;          // devuelve true
var myString = new String('coral');
'length' in myString;  // devuelve true

// Objetos personalizados
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // devuelve true
'model' in mycar; // devuelve true

//?instanceof
//devuelve true si objeto es un tipo de objeto espcificado
//Se puede usar para confirmar el tipo de un objeto en tiempo de ejecucion

var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // instrucciones a ejecutar
}

//?Precedencia de operadores
//Determina el orden en que se aplican al evaluar una expresion

//TODO Expresiones
//Es una unidad de codigo que se resuelve en un valor
//Existen dos tipos de expresion:
//Con efectos secundarios: Asignan valor a una variables
x = 7; //"Asigna un valor a una vaiable"

//Evaluacion: Se resuelven en un valor
3 + 4; //Se evalua a si misma sin asginar valor

//Categorias: 
//Aritmeticas: Se evalua como numero 3.14.159
//Cadenas: se evalua como cadena de caracteres "Fred"
//Logicas: se evaluan como true o false

//*Expresiones primarias
//palabres vlace baiscas y expresiones generales en JS

//?this 
//Usa la palanra reservada this, para referenciar al objeto actual
//this['propertyName'] o this.propertyName

function validate(obj, lowval, hival) {
    if ((obj.value < lowval) || (obj.value > hival))
      console.log('¡Valor no válido!');
  }
  
//Se puede llamar validate en eventos onChange de un form, usando this para 
//pasar el elmento de formulario

function validate(obj, lowval, hival) {
    if ((obj.value < lowval) || (obj.value > hival))
      console.log('¡Valor no válido!');
  }

//?Operador de agrupacion
//Controla la precedencia de evaluacion en expresion
var a = 1;
var b = 2;
var c = 3;

// precedencia predeterminada
a + b * c     // 7
// evaluado por omisión así
a + (b * c)   // 7

// ahora prevalece sobre la precedencia
// suma antes de multiplicar
(a + b) * c   // 9

// que es equivalente a
a * c + b * c // 9

//*Expresiones del lado izquierdo
// Los del lado izquierdo son el destino de asignacion

//?new
//Se usa para crear un instacion de un tipo de objeto definido por el usuario
//o de los integrados

var objectName = new objectType([param1, param2, ... paramN]);

//?super
//se usa para llamar a  funciones en el padre de un objeto, se usa en clases
super([arguments]); // llama al constructor padre.
super.functionOnParent([arguments]);

//* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#aritmeticos