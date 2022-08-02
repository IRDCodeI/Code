//*Expresiones Regulares
//Son patrones que se usan para coincidir combinaciones de caracteres 
//en cadenas.
//Son objetos y los metodos se pueden usar.

//?Crear una expresion regular
//!Formas:
//Usando expresion regular literal, "patron encerrado entre barras"
//Estas proporcionan la compilacion de la expresion regular cuando se carga
//al script

let re = /ab+c/

//Llamando a la funcion constructura de objeto RegExp
//Esta permite una compilacion en tiempo de ejecucion de la er
//Se usa cuando la er cambiara o no se conoce el patron y se obtiene
//de una fuente externa

let rel = new RegExp('ab+c');

//?Escribir un patron de expresion regular
//Se compone de caracteres simples como /abc/ o combinacion de caracteres
//simples y especiales como /ab*c/ o /Capitulo (\d).\d*\.

//  Los parentesis se usan como dispositivos de memoria, y la coincidencia
//  se usa para el posterior uso.

//!Patrones simples
//Se construyen con caracteres para encontrar coincidencia directa
//"Hola, ¿conoces tu abc?" --> Coincidencia con abc

//!Uso de caracteres especiales
//Cuando se requiere una coincidencia con mas de una 'b' o encontrar
//caracteres especiales se incluyen caracteres especiales en el patron
    //!Caracteres especiales
//?Aserciones: 
//Tienen limites que indican el comienzo y final de linea y palabras
//y otros patrones otros que indican que el reconocimiento es posible
//(incluidas expresiones anticipadas, inversas y condicionales)

//* ^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B

//?Clases de caracteres
//Distingue diferentes tipos de caracteres, osea entre letras y digitos

//* \, ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]

//?Grupos y rangos
//Indica grupos y rangos de caracteres de expresiones

//* (x), (?:x), (?<Name>x), x|y, [xyz], [^xyz], \Number

//?Cuantificadores
//Inidica el numero de caracters o expresiones que deben coincidir

//* *, +, ?, x{n}, x{n,}, x{n,m}


//?Escapes de propiedades Unicode
//Distingue segun propiedades de caracteres Unicode, osea mayusculas y minusculas
//simbolos matematicos y de puntuacion

//* \p{UnicodeProperty}, \P{UnicodeProperty

//?Escapando
//Para escapar se usa una barra invertida delenate del caracter especial
/a\*b/ //--> a seguido de b
//Para buscar lieteral con barra inclinada "/"
//Todo /\/ejemplo\/[a-z]+/i //-->Barras invertidas antes de cada barra, las hacen literales
//Para escapar de barra invertida osea buscar "C:\" se usa
//Todo /[A-Z]:\\/ //--> La 1ra barra invertida escapa a la que sigue
//Cuando se usa RegExp se debe escapar en el nivel del literal de la cadena
//Todo /a\*b/ //En RegExp
RegExp("a\\b")

//Para unir cadena de escape en el patron se usa String.replace
function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g,'\\$&'); // $& significa toda la cadena coincidente
  } //La "g" es un indicador de busque global, busca en toda la cadena y devuelve en todas las coincidencias

//?Usando Parentesis
//Hace que se recuerde esa parte de la subcadena coincidente, haciendo que se pueda recuperar
//para otro uso

//?Usar expresiones regulares en JS
//Se usan con metodos RegExp; test() y exec() y metodos String, match(), replace(), search() y split()

exec();
test();
match();
matchAll();
search();
replace();
replaceAll();
split();
  
//Para saber si un patron esta en una cadena se usa test o serach
//Para obtener mas informacion se usa exec o match, estos devuelve un arreglo
//y actualizan propiedades del objeto expresion regular asociado y la er predefinida

var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');

var myArray = /d(b+)d/g.exec('cdbbdbsbz');
    // similar a "cdbbdbsbz" .match(/d(b+)d/g); sin embargo,
    // "cdbbdbsbz" .match (/d(b+)d/g) genera Array ["dbbd"], mientras
    // /d(b+)d/g.exec('cdbbdbsbz ') produce Array ['dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].

var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');
    
//Si no se establece el objeto de la re en una variable, no se podra acceder a las propiedades

var myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log('El valor de lastIndex es ' + /d(b+)d/g.lastIndex);

// "El valor de lastIndex es 0"

//?Busqueda avanzada con banderas
//Hay 6 indicadores opcionales que permiten funciones como busqueda global y que no
//distangan entre mayus y minus, se pueden usar por separado o juntos

g //Buqueda global 
i //Buqueda que no distingue entre mayus y minus
m //Busqueda multilinea
s //Permite que el "." coincida con caracteres de nueva linea
u //Trata un patron como una secuencia de puntos de codigo Unicode
y //Realiza buqueda pegajosa que coincida a partir de la posicion actual en la cadena destino

//!Para incluirla "No se pueden agregar ni quitar mas tarde"
//var re = /patrón/banderas;
//var re = new RegExp('patrón', 'banderas');

var reb = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(reb);
console.log(myArray);

// ["fee ", "fi ", "fo "]

//Existen comportamiento diferentes cuando se usa el .exec(), ya que aqui
//claes y argumentos se invierten
//En .match() la clase cadena posee el metodo y expresion regular es un argumento
//En .exec() la expresion regular posee el metodo y la cadena es el argumento y "g" se usa para un progresion iterativa

//* str.match(re) o re.exec(str)

var xArray; while(xArray = re.exec(str)) console.log(xArray);
// produce:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]

//Bandera "m" se usa para especificar cadena de entrada de varias lineas
//Indicardor m, ^, $ hacen que coincidan al principio o final de cualquier linea dentro de la cadena

//Todo: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions