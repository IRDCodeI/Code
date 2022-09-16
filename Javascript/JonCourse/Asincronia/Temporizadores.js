//* Temporizadores (setTimeout & setInterval)

//? JS posee funciones que permiten lanzar acciones una vez pase un tiempo
//? o pase una 'n' cantidad de veces

//? >> Formas de Aplicar: 
//Todo  > setTimeout(): Recibe una callback (funcion que se va a ejecutar) y
//Todo                  un tiempo expresado en milisegundos (1000 = 1s);
//Todo  >> JS espera el tiempo para poder ejecutar la funcion y lo hace una sola vez

//Todo  > setTimeInterval(): Permite ejecutar varias veces una funcion, recibe
//Todo                      una callback e intervalo de tiempo


//? Cancelacion de Intervalos; para que se aplique la cancelacion los intervalos
//? se deben guardar en una variable

//Todo >> clearTimeout();
//Todo >> clearInterval();

/*
console.log('Inicio');

setTimeout(() => {
    console.log('Ejecucion de una sola vez');
}, 2000);


setInterval( () => {
   console.log(new Date().toLocaleTimeString());
}, 1000)

console.log('Fin');
*/

let temp = setInterval( () => {
    console.log(new Date().toLocaleTimeString());
}, 1000)

//clearTimeout(temp);
clearInterval(temp);