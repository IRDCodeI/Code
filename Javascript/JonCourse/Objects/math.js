//* ------------ Objeto Math------------
//Permite realizar operaciones matematicas especiales
//Metodos estaticos, se debe invocar al prototipo

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8)) // --> Valor absoluto
console.log(Math.ceil(7.2)); // --> Redondea al numero proximo
console.log(Math.floor(7.8)); // --> Redondea al numero anterior

console.log(Math.round(7.49)); // --> Redondea al mas cercano
console.log(Math.round(7.8));

console.log(Math.sqrt(2)); //--> Raiz cuadrada
console.log(Math.pow(2, 2)); // --> Potencias

console.log(Math.sign(-7.8)); // --> Indica si el num es negativo, cero o positivo
console.log(Math.sign(5));
console.log(Math.sign(0));

console.log(Math.random()) // --> Valor random entre 0 y 1
console.log(Math.round(Math.random() * 1000));