//Todo >> Propiedades Dinamicas de los Objetos (Computed Properties)
// Crear propiedades al vuelo o inmediatamente para un objeto
//  > Podemos crear dentro del objeto propiedades dinamicas sin valores
//  > Propiedad dinamica es con los corchetes []

//? Carga de usuario y necesito crear id para los usuario
//? Se usa cuando se necesita crear objetos de manera dinamicas

let random = Math.round(Math.random()*100 + 5);
const objUsers = {
    //id_1 --> Intentar generar dinamicamente
    [`id_${random}`]: 'Valor' // --> [] se usa para propiedades dinamicas
};

const users = ['Stalin', 'David', 'Irma', 'Karen'];

//Crear propiedades en objetos es con ". u []", los [] nos permite crear de manera dinamica
//propiedades
console.log(objUsers);

//Se crean propiedades dinamicas
users.forEach((user, index) => objUsers[`id_${index}`] = user);

console.log(objUsers);

