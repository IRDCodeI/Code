//* -----Objetos Literales-------
//Nueva forma de escribir y asginar, atributos, metodos

let nombre = 'David',
    edad = 10;

const user = {
    nombre: nombre,
    edad: edad,

    saludo: function(){
         console.log('Hola');
    }
}

console.log(user);
user.saludo();

//Si una variable tiene el mismo nombre que el de la propiedad que se le va 
//asignar dicho valor de variable se puede simplificar

//? Nueva forma y recomendable
const usuario = {
    nombre,
    edad,

    saludo(){
        console.log('Hola');
   }
}

console.log(usuario.nombre);
