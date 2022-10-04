//Todo >> Sets
// Estructura similar a un array pero de datos unicos
//  > Arreglo mejorado de JS que solo acepta valores unicos(Primitivos)
//  > Posee la propiedad "size" para conocer el tamanio del arreglo

//* Usar operador new Set([Valores])
const set = new Set([1, 2, 3, 3, true, false, false, {}, {}, 'hola', 'HOLA']);
console.log(set);

//? No se repiten los mismo valores

const set2 = new Set();
set2.add(1); // --> Agregar datos a un Set
set2.add(2);
set2.add(2);
set2.add(true);
set2.add(true);
set2.add({});

console.log(set2);
//* Elementos no se repiten en Set

console.log(set2.size); // --> Cantidad de elementos

//* Iteracion de Set (of - for each)

for (item of set){
    console.log(item);
}

set2.forEach(element => {
    console.log(element);
});

//* Acceder a una posicion en Set
//* -> Array.from(): Permite convertir un tipo de dato en un dato iterable (cualqier 
//*    tipo de dato que permite contar sus elementos, arrays, string, ...)

//? >> Convertir Set en un Arreglo
// let arr = Array.from(set2)
console.log(Array.from(set)[0]);

//Metodo para eliminar valores
set.delete("HOLA");

console.log(set);

//Metodo para comprobar si un valor existe

console.log(set.has('hola'));
console.log(set.has(5));

//Limpiar un set

set2.clear();
console.log(set2);

//? Usados para validar que no se repita y sean unicos (no repetidos)
