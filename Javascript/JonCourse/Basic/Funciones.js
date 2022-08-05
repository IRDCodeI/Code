//* -----Funciones------
// Bloque de codigo autocontenido, el cual es independiente del scope global
//  - Definido una sola vez 
//  - Se puede usar o ejecutar en cualquier momento
//  - Puede o no recibir parametros
//      >> Separados por comas los parametros
//      >> Puede devolver o no valores

//? Funciones en JS son un objeto
//  Funciones pueden retornar la ejecucion de una funcion adicional

//? Funciones Declaradas

function Funcion(){
    //Cuerpo de la funcion
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

function Retorno(){
    return "Retornando Cadena de Texto";
    console.log("No voy a ser mostrado");
}

function Parametros(nombre = 'David', edad){ // --> Parametros de una funcion y parametros por defecto
    console.log(`Hola ${nombre} tienes ${edad}`);
}

//Si se encuentra return, el compilador ignora las lineas de codigo de abajo y retorna el valor

//? Invocacion de Funciones

Funcion(); // Parentesis indican que la funcion sera ejecutada
let valor = Retorno();

console.log(valor);

Parametros('Stalin', 29);
Parametros();

//* ------ Fun.Declaradas vs Fun.Expresadas

FunDeclarada(); 

function FunDeclarada(){ // --> Cuando se declara la funcion JS va hacer hoisting, osea mueve la funcion al principio
    console.log('Funcion Declara antes de ser llamadas');
}

FunDeclarada();

//? Manera de declaracion 2: Se asigna una funcion a una variable, es una funcion expresada

funcionExpresada(); //Error no se puede acceder porque no esta inicializada

//? Funcion Expresada: Funcion Asiganada a una variable

const funcionExpresada = function(){ // -> Funcion Anonima osea que no tiene nombre
    console.log("Funcion Expresada la cual fue asignada como valor a una variable");
}

funcionExpresada();

//Todo >> Se recomienda usar funciones expresadas ya que no realizan hoisting