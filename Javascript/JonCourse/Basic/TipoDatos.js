//* --------------Tipo de datos-------------
//Todo >> Documentacion de JS en MDN (https://developer.mozilla.org/es/)

//? Todo en JS es un objeto, y las palabras claves en un objeto tienen dos atributos:
//?  - Propiedades: Atributos de un objeto que dan informacion de un objeto
//?  - Metodos: Son acciones que el objeto hace

//! La diferencia es que os metodos termianan con parentecis "metodo()"

//* -----Cadena de Texto "String"-------
// Es un texto que esta encerrado en comillas, comillas simples y backtics "", '', ``

let nameU = "Stalin"; // --> Texto
let lorem = `      Lorem ipsum, dolor sit amet`;
// Se puede declarar con un objeto tipo String

let lastname = new String("Pillajo"); // --> Declaracion con objeto

//? Se usa mucho mas para declarar con comillas

console.log(nameU, lastname); //Debido a que se declaro lastname con un constructor de objeto
// nos da las propiedades del objeto String

console.log(lastname.length);

//? >> Metodos de String

//Todo >> Transformacion de caracteres MAYUS y minus
console.log(nameU.toLowerCase(), lastname.toUpperCase());

//Todo >> Busqueda de caracteres

console.log(lorem.includes("amet"));

//Todo >> Quitar espacios en blanco
console.log(lorem.trim());

//Todo >> Converitr cadena de texto en un array, en base a un caracter (espacio en blanco);

console.log(lorem.split(" "));

//* -----Template Strings------

//?Concatenacion: Unir una cadena de texto con una variable de tipo cadena generalmente

let nombre = "Stalin";
let apellido = "Pillajo";
let saludo = "Hola mi nombre es";

console.log(saludo + " " + nombre + "."); // --> Concatenacion

//? Interpalacion de variables: Meter en una cadena de texto el valor dinamicamente de una variable
//? con el uso de Template String

let hi = `Hola tu nombre es ${nombre}
            ${apellido}`; // --> Uso de Backtic y ${variable} && Es una interpolacion

console.log(hi);

//Todo >> Se recomienda el uso de Template Strings

//* -------Numbers--------

let a = 2; //Number
let b = new Number(1);
let c = 7.19; //Double
let d = "5.6";

console.log(a, b);

//Todo >> Metodo toFixed: Establece el numero decimales que va a tener el valor numerico
console.log(c.toFixed(1)); 

//Todo >> Metodo parseInt: Devuelve la parte entera de una variables ya sea number o string

console.log(Number.parseInt(c));
//Este metodo biene del objeto Number

//Todo >> parseFloat: Devuelve la parte entera y flotante

console.log(parseFloat(c));

//Todo >> Operador typeof, permite saber el tipo de dato que es una variable

console.log(typeof c, typeof d);

//? Input Number, regresa una cadena de texto por lo que se debe hacer un casting, osea una cambio
//? de tipo de dato con un parseInt o parseFloat

console.log(c + parseFloat(d));

//* ----------Booleans-----------
//? Solo existen dos tipos true, false

let verdadero = true;
let falso = false;
let v = Boolean(true); // --> Constructor

console.log(verdadero, falso, v);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean(" "));

//Truthy o Falsy: Son los tipos de valores que tienden a false o true
//? https://developer.mozilla.org/es/docs/Glossary/Truthy
//? https://developer.mozilla.org/en-US/docs/Glossary/Falsy

//* ----------Null, Undefined, Nan------
//Casos particulares de JS
//Undefined y Null: Representan un valor ausente osea una variable que no tiene valor
    // - Undefined: Variable que no es inicializada con valor y es asignada por JS --> let a;
        let indefinida;
        console.log(indefinida);
    // - Null: Cuando se asigna un valor de nulo, osea que esta vacia pero intencional y agregada por el 
    // programados
        let nulo = null;
        console.log(nulo);

//? Variable vacia pero una es intencional y otra no

//Nan: Cuando se trata de hacer operaciones aritmeticas en variables que no son numericas

        let noEsNumero = "hola"*3.7;
        console.log(noEsNumero);