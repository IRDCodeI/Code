//* -------------------Variables---------------------
//Es un lugar en la "memoria" donde se almacenan datos

//*Scope
//Es el ambito de existencia de una variable
//Todo ## >>Scope Global:  Alcance y disponible en todo el documento
//Todo ## >>Scope Funcional: Alcance y disponible solo dentro de una funcion

//## Ambito en JS es por bloque osea que la variable tendra un "scope funcional"
// solo si se la declara como variable "let"

//Los ambito global se almacenan en el objeto Window, este mapea toda la ventana
//del navegador para JS >> console.log(window);

//?Declaracion

var hola = "Hola Mundo"; // --> Scope Global "No usar mas --var--"
let hello = "Hola Amigo"; // --> Scope Funcional o Ambito de bloque "Recomendado"

//? ##Ambito Bloque

var musica = "Rock";
let musicaB = "Rock";
console.log("Variable Musica antes del Bloque", musica);

//Bloque: Otro scope permite la redeclaracion de variables

{
  // -> Inicio de un bloque de funcion
  let musicaB = "Pop"; // >> Alcance solamente en el bloque

  var musica = "Pop"; // >> Son diferentes ya que se encuentra en otro scope, pero realiza hoisting y eleva la var
  console.log("Variable Musica antes del Bloque", musicaB);
}

console.log(musica);
console.log(musicaB);

//*  -------------------Constantes---------------
//const -> Permite crear variables y las usamos cuando tengamos variables que no van a cambiar su valor
//durante el flujo de nuestra aplicacion o programa

//Todo >>Usar let cuando el valor va a cambiar

//? - No podemos tener constantes vacias y no podemos cambiar los valores en tipo "primitivos"
//? - Podemos tener variables vacias
//? - Constante permite agregar, quitar, etc propiedades o valores en tipos "compuestos" (Objects, Arrays)

const PI = 3.1416;
//const NUEVE; "Error const empty"
//const PI = 3.15; "Error reasignacion a constante"

let a;
a = 'Stalin';
console.log(a);

//Todo Recomendacion: Si el valor de una variables cambia se usar "let" y si el valor no o el tipo no cambia se usa "const"

