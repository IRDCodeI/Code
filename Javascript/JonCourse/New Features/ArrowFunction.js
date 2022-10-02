//* --------- Funciones Flecha---------
//Nueva forma de definir funciones anonimas que sean expresadas

//Todo >> Cuando es una funcion declara se la puede llamar antes de crearla, ya que JS hace Hoisting

//? Funcion Expresada: Cunado a una variable se le asigna una funcion anonima

const saludo = () => console.log('Hola');

saludo();

//Cuando se tiene solo una linea de codigo se pueden omitir las llaves {}
//? Parametros de funciones flecha, se puede excluir los parentesis cuando se ingresa un parametro

const saludar = nombre => console.log(`Hola ${nombre}`);

saludar('Stalin');

//Puede trabajar como un return implicito

/* ------Normal-----
const sumar = function(a, b){
    return a + b;
}

console.log(sumar(1, 3)); */

// ----Arrow Function-------
const sumar = (a, b) =>  a + b;

console.log(sumar(9, 9));

//----------------------------------------------------
const funcion = () =>{
    console.log('one');
    console.log('two');
}
//----------------------------------------------------
const nums = [1, 2, 3, 4, 5];

nums.forEach( (e, i) => console.log(`${e} pos = ${i}`));
//----------------------------------------------------

// Arrow Function: Permiten capturar el objeto "this" del objeto en el que se encuentren su objeto padre

// AF -> Ignora el contexto del objeto y sale del objeto dog
//? No se debe cargar AF en objetos literales

const dog = {
    nombre: 'Kenai',
    
    ladrar: () => { 
        console.log(this);
    }
}


dog.ladrar();