//* -------------Prototipos-------------
// - Permite hacer programacion en prototipos
// - Compilador tranforma las clases en funciones prototipicas
// - Programacion Orientada a Objeto basado en prototipos
//? ************POO (Programacion Orientada a Objetos)**************
//? JS tiene la POO basada en Prototipos
//? Componentes que posee este paragdima:

//Todo >> Clase: Modelo a seguir del cual nos basamos y generamos instancias
//Todo >> Objeto: Es una instancia de una clase, osea es una copia del Modelo a seguir
//Todo            y esta siendo usado en el mundo real
//Todo      >> Atributos: Caracteristica o propiedad del objeto, son variables dentro de un objeto
//Todo      >> Metodos: Son las acciones que un objeto puede realizar, son funciones dentro de un objeto

//? Prototipo: Mecanismo por el cual un objeto puede herederar atributos y metodos de un objeto padre
//? Herencia: Se da por medio de la cadena de prototipos, la cual hace una copia del prototipo del cual esta basado

//Objeto Literal --> Prototipo (__proto__) primario "Object" --> __proto__: Object

const animal = {
    nombre: 'Snoopy',
    sonar() {
        console.log('Hago sonidos');
    }
}

console.log(animal);

// Generacion de Clase o Modelo a seguir
//? Clases usan UpperCamelCase

//Funcion constructora: Se genera una sola vez y apartir de ella se genera nuevos objetos o instancias
//  - Atributos y metodos deben tener la palabra this.
function Animal(nombre, genero){
    this.nombre = nombre; //--> Atributos
    this.genero = genero;

    //Metodos
    this.sonar = function(){
        console.log('Hago sonidos');
    }

    this.saludar = function(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

//Instancias: Para generar una nueva instancia se usa la palabra reservada new, la cual permite crear una 
// nueva instancia del tipo especificado
const lolaBunny = new Animal('Lola Bunny', 'hembra');

//console.log(snoopy);
console.log(lolaBunny);

//snoopy.saludar();
lolaBunny.saludar();

//Estos son objetos, pero estan basados en el constructor animal el cual es un prototipo object
//? Para mejorar el rendimiento debemos asignarle al prototipo de la funcion constructora animal
//? el metodo sonar, para evitar que se duplique el metodo sonar en cada instancia de una nueva clase

//Todo >> Funciones constructoras deben tener solo los atributos
//Todo >> Metodos deben estar asignados al prototipo

function Cartoon(nombre, genero){

    this.nombre = nombre;
    this.genero = genero;
}

//Asignacion de metodos al prototipo de la funcion constructora
//? Evita que se duplique los metodos en las instanacias de objetos mejorando el espacio y rendmiento

Cartoon.prototype.sonar = function (){
    console.log('Hola hago sonidos')
}

Cartoon.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}
 
const test = new Cartoon('Miniee', 'Macho');

test.saludar();

//* ------------Herencia Prototipicas-----------
//Capacidad de heredar caracteristicas de un padre a un hijo
//  - En prototipos se da medio de la cadena prototipica

function Dog (nombre, genero, raza) {
    //Herencia Prototipica (Padre) !!Copia las propiedades, afectando el rendimiento
    this.super = Cartoon; // --> Llama a la funcion constructor padre, para realizar herencia
    this.super(nombre, genero); // --> Inicializa el constructor con los parametros
    
    //(Hijo)
    this.raza = raza;
}

//? Asignacion de Herencia al prototipo, mas optima
//Se hereda todos los metodos del padre
// Podemos sobreescribir los metodos del padre

Dog.prototype = new Cartoon(); // --> Herencia mucho mas optima
Dog.prototype.constructor = Dog; // --> Establece al constructor, las caracteristicas del prototipo padre

//? Sobreescritura de metodos de padre

Dog.prototype.sonar = function () {
    console.log('Soy un perro, y ladro');
}

Dog.prototype.ladrar = function(){
    console.log('Ladro como un perro');
}

const snoopy = new Dog('snoopy', 'macho', 'Chiguaga');

console.log(snoopy);

snoopy.saludar();
snoopy.sonar();
snoopy.ladrar();