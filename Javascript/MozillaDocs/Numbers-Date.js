//*Numeros y fechas
//?Numeros
//Numeros se implementan en coma flotante de doble precision de 64 bits
//IEEE 754 (numero entre +- 2^-1022 y +-2^+1023)

//number tiene tres valores simbolicos + Infinity, - Infinity y NaN
//BigInt permite represetnar numeros enteros grandes
//*No se puede usar BigInt y Number en la misma operacion, no se puede usar BigInt con Math

//?Numeros Decimales
1234567890
42

// Precaución al usar ceros a la izquierda:

0888 // 888 procesado como decimal
0777 // procesado como octal en modo no estricto (511 en decimal)
//* Cuando se empiza con un 0 y el siguiente termino es menor que 8, este sera octal

//?Numero Binarios
//Usa un 0 inicial seguido de "b"

var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607

//?Numero Octales
//Usa un cero a la izquierda, y si el rango esta fuera de 0 y 7, este sera decimal

var n = 0755; // 493
var m = 0644; // 420

//?Numeros hexadecimales
//Usa un cero inicial seguido de "x", y si los digitos estan fuera de 0 .. F

0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10

//?Exponenciacion
1E3   // 1000
2e6   // 2000000
0.1e2 // 10

//*Objeto Number
//Tiene propiedades para constantes numericas, como max values es NaN e infinity

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

//?Metodos
Number.parseFloat();
Number.parseInt();
Number.isNaN();

//?Metodos prototpype
toExponential();
toFixed();
toPrecicion();

//*Objeto Math
//Tiene propiedades y metodos para constantes y funciones matematicas
Math.PI
Math.sin(1.56) //argumentos en radianes

//?Metodos
abs();
sin(), cos() 
pow(), exp(), log10()
min(), max()
random()
round(), fround(), trun()
sqrt(), cbrt(), hypot()
sign() 

//*Objeto Date
//Usamos los metodos para trabajar con fechas y horas
//Almacena fechas como numero de milis desde el 1 de enero de 1970, 00:00:00
 //?Creacion objeto Date

 var dateObjectName = new Date([parameters]); // Solo Date devuelve cadena con fecha y hora actual

 //Paramteros
 //Nada: crea fecha y hora de hoy
 // Cadena con Mes, dia y ano horas:minutos:segundos 
 var Xmas95 = new Date("December 25, 1995 13:30:00")

 //Conjunto de valores enteros para ano, mes y dia
 var Xmas95 = new Date(1995, 11, 25)

 //Conjunto de valores para ano, mes, dia, hora, minuto y segundos
 var Xmas95 = new Date(1995, 11, 25, 9, 30, 0)

//? Metodos
//Metodos establecedores "Set": configura vlaores de fecha y hora
//Metodos captadores "get": obtiene valores de fehca y hora

//!Se devuelve valores de 0 a 59, 0 a 23, 0 a 6, 1 a 31, 0 a 11 y anos de 1900
//!getTime: devuelve tiempo desde el 1 de enero de 1970

var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Establece día y mes

endYear.setFullYear(today.getFullYear()); // Establece año a este año
var msPerDay = 24 * 60 * 60 * 1000; // Número de milisegundos por día
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); // devuelve los días que quedan en el año

//!parse asigna valores de cadenas de fecha a objetos Date

var IPOdate = new Date();
IPOdate.setTime(Date.parse('Aug 9, 1995'));

//!JSClox() devuelve hora en formato de reloj digital

function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
      temp = '12';
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
    return temp;
  }
  

//Metodos convversores "to": devuelve valores de cadena de objetps
//"Metodos parse y UTC": analiza cadenas Date


//* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Numbers_and_dates