//*------------------- Objeto Date--------------
//Permite detectar la hora local y la hora en base a la hora 0

console.log(Date());

let fecha = new Date();
console.log(fecha);

//Dia mes
console.log(fecha.getDate());
//Dia semana
console.log(fecha.getDay());
//Mes
console.log(fecha.getMonth());
//Anio
console.log(fecha.getYear()); // --> Anio desed 1900
console.log(fecha.getFullYear());
//Hora
console.log(fecha.getHours());
//Minutos
console.log(fecha.getMinutes());
//Segundos
console.log(fecha.getSeconds());
//Milisegundo
console.log(fecha.getMilliseconds());

//Fecha en formato humano
console.log(fecha.toString());

//Extracion de fecha
console.log(fecha.toDateString());
//Fecha en hora local
console.log(fecha.toLocaleString());
//Fecha
console.log(fecha.toLocaleDateString());
//Hora
console.log(fecha.toLocaleTimeString());

//Uso horario local
console.log(fecha.getTimezoneOffset());

//* Para calcular horas con respecto a la hora 0 o meridiano de grenwitch

//UTC --> Horas de la hora 0
console.log(fecha.getUTCDate());

//UTC Horas
console.log(fecha.getUTCHours());

//Da el instante que ocurre ahora y que paso desde 1970 (TimeStamp)

console.log(Date.now());

//Calculo de fecha
let birthday = new Date(2000, 11, 7);

console.log(birthday);

//Todo >> MomentJS "Manejo de tiempos" --> momentjs.com