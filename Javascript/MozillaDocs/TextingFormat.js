//*Formato de texto
//?Cadenas de caracteres (String)

//Se usa para respresentar datos textuales
//Conjunto de valores enteros sin signo de 16 bits
//Cada caracter ocupa una posicion, indice 0, 1, ...
//Longitud de la cdena es es el numero de elementos que contiene

'foo'; "bar";

//?Secuencia de escape hexadecimal
'\xA9' // "©" --> Numero despues de \x es hexadecimal

//?Secuancia de espace unicode
'\u00A9' // "©" --> Requiere 4 digitos hexadecimales

//?Puntos de escape de codigo Unicode
//Cualquier caracter se peude escapar usando numeros hexadecimales
'\u{2F804}'

// lo mismo con los escapes Unicode simples
'\uD87E\uDC04'

//*Objeto String

const foo = new String('foo'); // Crea un objeto String
console.log(foo);              // Muestra: [String: 'foo']
typeof foo;                    // Devuelve 'object'

//Se puede llamar a los metodos del objeto String en una cadena
//JS convierte la cadena literal en un objeto String temporal

//*Usar cadenas a menos que se necesite un objeto String, ya que el objeto
//*puede tener comportamientos extranos

const firstString = '2 + 2';              // Crea un valor de cadena literal
const secondString = new String('2 + 2'); // Crea un objeto String
eval(firstString);                        // Devuelve el número 4
eval(secondString);                       // Devuelve la cadena "2 + 2"

//No se pueden cambiar caracteres ya que no son modificables

const hello = '¡Hola, mundo!';
const helloLength = hello.length;
hello[0] = 'L'; // Esto no tiene ningún efecto, porque las cadenas son inmutables
hello[1];       // Esto devuelve "H"

//?Metodos 

charAt();
indexOf(), lastIndexOf();
startWith(), endsWith(), includes();
concat();
split();
slice();
substring(), substr();
toLowerCase(), toUpperCase();
repeat();
trim();

//?Plantillas literales multilinea
//Son cadenas que permiten expresiones incurstadas, se puede usar cadena de varias lineas y funciones
//de interpolacion

//Se encierran entre ``, estas pueden contener marcadores de posicion que se indicar con 
// ${expresion}

//!Multilineas

console.log('cadena de texto línea 1\n\
cadena de texto línea 2');
// "cadena de texto línea 1
// cadena de texto línea 2"

//Es lo mismo que:
console.log(`cadena de texto línea 1
cadena de texto línea 2`);
// "cadena de texto línea 1
// cadena de texto línea 2"

//!Expresiones Incrustadas

const five = 5;
const ten = 10;
console.log('Quince es ' + (five + ten) + ' y no ' + (2 * five + ten) + '.');
// "Quince es 15 y no 20."

//Es lo mismo que:
const fives = 5;
const tens = 10;
console.log (`Quince es ${five + ten} y no ${2 * five + ten}.`);
// "Quince es 15 y no 20."

//*Internacionalizacion
//Intl proporciona compracion de cadenas sensible al idioma, formato de numeros, fecha y hora
//Constructores son Collator, NumberFormat, FateTimeFormat

//!Formato de fecha y hora
//Se usa para formatear la fecha y hora
const msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT

//!Formato de numero
const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五

//!Colacion
//Para comparar y ordenar cadenas
const names = ['Hochberg', 'Hönigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// como ordenando ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// registra "Hochberg, Hönigswald, Holzman"

//Todo https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting