//* -----------Arreglos----------
// Tipo de datos para arreglos en JS son "[]"
//? Arreglo es una coleccion de elementos los cuales pueden ser de diferente tipo
//  - Arreglos siempre empiezan por el indice 0
//  - En objetos compuestos se accede a la referencia del valor 

const a = [];
const b = [1, true, 'Hola', ["A" ,"B",[1, 2, 3]]];

console.log(a);

console.log(b);
console.log(b.length);

//Accediendo a la referencia para mostrar el valor
console.log(b[2]);

//Arreglo de un Arreglo
console.log(b[3][0]);
//Arreglo padre[3], arreglo hijo[0]

console.log(b[3][2][1]);

//Cargo de datos en un arreglo o llenar elementos en un arreglo
const c = Array.of("X", "Y", "Z", 1, 2, 3); //Objeto Array
console.log(c);

//Llenando valor en las posiciones de una arreglo

const d = Array(10).fill(10);
console.log(d);

//Declaracion con Objeto Arreglo --> Ya no se usa
const e = new Array(1, 2, 3, true);
console.log(e);

//* Metodos
const colors = ["Red", "Blue", "Green"];
console.log(colors);

//Todo >> Agregar un elemento al final
colors.push("Black");
console.log(colors);

//Todo >> Eliminar un elemento del final
colors.pop();
console.log(colors);

//Todo >> Ejecucion de una funcion para cada elemento del arreglo

colors.forEach(function(e){ // --> e: este es un paraemtro que hace referencia al elemento que es recorrido por la funcion forEach en el arreglo
    console.log(`<li>${e}</li>`);
});