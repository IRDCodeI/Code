//Todo >> Maps
// Objetos que almacenan un conjunto de valores asociados, es como un objeto
// primitivos.
//  >> Coleccionh de datos relacionadas entre si con "clave - valor"
//  >> Se usan getters y setters (Trabajo similar a clases)
//  >> Objeto iterador (Similar aun array pero no es un array)
//  >> Se pueden generar llaves que son NaN, Undefined, Null, ...
//      pero no es recomendable

//  > !! Todo lo que no es un valor primitivo se lo puede guardar en una constante
//      debido a que la referencia del objeto, por lo que el tipo objeto no cambia solo
//      las propiedades !!

//? Declaracion
let map = new Map();

//? Seteo
map.set('name', 'Stalin');
map.set('lastname', 'David');
map.set('age',20);

console.log(map);
console.log(map.size); // Tamanio del "map"

//Comprobar existencia de un elemento
console.log(map.has('email'));
console.log(map.has('name'));

//Seleccionar un indice
console.log(map.get('name'));

//Sobreescribir valor 
map.set('lastname', 'Pillajo');
console.log(map.get('lastname'));

//Eliminar elementos
map.delete('lastname');
console.log(map);

//Llave con diferentes tipos de datos
map.set(19, 'Diecinueve');
map.set(false, 'falso');
map.set({}, {});

//Iterar Mapa
//? Destructuracion for-of
for( let [key, value] of map){
    console.log(`Llave: ${key}, Valor: ${value}`);
};

//* Se puede usar para algo que debe estar preestablecido en la aplicacion
//* Lo podemos convertir en array para el uso de metodos o recorrerlo

// Declaracion 2
const map2 = new Map([
    ['name', 'David'],
    ['age', 21],
    ['person', true],
    [null,'nulo']
]);

console.log(map2);

//Guardado de Claves, Valores

const keyMap2 = [...map2.keys()];
const valueMap2 = [...map2.values()];

console.log(keyMap2);
console.log(valueMap2);