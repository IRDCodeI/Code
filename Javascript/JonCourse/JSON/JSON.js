//Todo >> JSON
// Javascript Object Notation.- Formato ligero de intercambio de datos 
// entre sistemas con diferentes lenguajes de programacion
//  > Estandar
//  > Acepta: String, number, object, array, boolea, null, ...
//  > Todos los lenguajes tienen soporte para json (estandar de intercambio informatico)

//https://www.json.org/json-en.html 

const json = {
    cadena: 'Stalin',
    numero: 25,
    booleano: true,
    arreglo: ['Run', 'Programming'],
    objeto: {
        twitter: '...',
        email: ' ... '
    },
    nulo: null
}

console.log(json);

//? Para convertir objeto a json se debe crear un archivo en formato json
//?     > Archivos JSON deben empezar con {} y las propiedades y valores (cadenas, numeros, boolean, array, object) deben ser con comillas ""

// JSON sirve para JS de navegadores y servidor

//* Metodos de JSON en JS
// JSON es una interfaz del lenguaje y puede convertir valores de JS en JSON

//? .parse().- Analiza un JSON y la convierte a un dato que JS valide

console.log(JSON.parse("{}")); // Transforma a un objeto JS
console.log(JSON.parse("[1, 2, 3]"));
console.log(JSON.parse(19));
console.log(JSON.parse("null"));
//console.log(JSON.parse("'Hola'")); --> No tiene un token valido para JSON

//?stringify().- Convierte un objeto o valor de JS en una cadena de texto 

console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3])); // --> Texto:
console.log(JSON.stringify(json));

console.log(JSON.parse(`
{
    "cadena": "Stalin",
    "numero": 25,
    "booleano": true,
    "arreglo": ["Run", "Programming"],
    "objeto": {
        "twitter": "...",
        "email":" ... "
    },
    "nulo": null
}
`));