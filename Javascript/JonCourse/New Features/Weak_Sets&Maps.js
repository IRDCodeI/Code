//todo >> WeakSets & WeakMaps
// Solamente pueden almacenar referencias debiles, osea que las llaves deben ser
// de tipo objeto.
//  >> Una referencia debil.
//      >>> Referencia en memoria debil permite que el garbage collector de JS, al
//          momento de que dicha referencia sea null o este limpia, el GCJS las 
//          limpia de memoria mejorando el rendmiento de la app.
//  >> No es posible iterar claves y valores
//  >> No se puede usar el metodo clear(), delete()
//  >> No se puede verificar el tamanio.
//  >> Se puede usar set, get, has
//  >> Para almacenar valores se debe agregar uno por uno con add()

//? Objetos
let value1 = {'value1': 1};
let value2 = {'value2': 2};
let value3 = {'value3': 3};

const wSet = new WeakSet();

//wSet.add(1); --> No permite agregar porque no es valor
wSet.add(value1);
wSet.add(value2);

console.log(wSet);

console.log(wSet.has(value1));
console.log(wSet.has(value3));

wSet.delete(value2);
console.log(wSet.has(value2));

//* Nulificacion de referencia

value1 = null;
value2 = null;

//* Puede usarse en componentes, cuando dicho componente esta null, se elimina la referencia
//* del componente

//? WeakMaps
// Solo permite objetos referenciados en una variable

const wMaps = new WeakMap();

let key1 = {};
let key2 = {};
let key3 = {};

wMaps.set(key1, 1);
wMaps.set(key2, 2);

console.log(wMaps);

console.log(wMaps.has(key1));
console.log(wMaps.has(key3));

console.log(wMaps.get(key1));
console.log(wMaps.get(key2));

wMaps.delete(key1);
console.log(wMaps.has(key1));

key2 = null;
console.log(wMaps.has(key2));