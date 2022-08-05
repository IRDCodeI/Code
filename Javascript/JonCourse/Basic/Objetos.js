//* ----------Objetos----------
// Se recomienda usar const cuando trabajamos con objetos
// porque evitamos que cambie el tipo de dato y se ocupe la referencia
// en memoria del objeto

//? > Objeto es una coleccion de claves, valores
//?     - Pueden tener cualquier tipo de dato
//?     - Para acceder a los valores en un objeto, se debe usar ."valor"
//?     - Para hacer uso de una propiedad dentro de un objeto se usa "this"
//?         >>This hace referencia al contexto en el que nos encontramos, en este caso llega a ser el objeto

//Todo >> Dentro de un objeto a las variables se la llaman atributos o propiedades
//Todo >> A la funciones se le llaman metodos ademas porque tienen parentesis

const a = {};
console.log(a);

const c = new Object();
console.log(c);

const user = {
    name: 'Reixer', //--> Atributos de un objeto
    password: 1234,
    desc: ['Soltero', 'Admin'],
    contacto: {
        email: 'reixer@gmail.com',
        phone: 0976312324
    },
    saludo: function(){ //--> Ya no es un atributo o propiedad, ahora es un metodo
        console.log(`Hola ${this.name}`);
    }
}

console.log(user);
console.log(user["name"]);
console.log(user.name); //--> Es usado mucho mas, recomendable
console.log(user.contacto.email);
user.saludo();

//* ---------Metodos--------

//Todo >> Lista las llaves del objeto
console.log(Object.keys(user));

//Todo >> Lista los valores del objeto
console.log(Object.values(user));

//Todo >> Permite saber si un objeto tiene una propiedad
console.log(user.hasOwnProperty("name"));
