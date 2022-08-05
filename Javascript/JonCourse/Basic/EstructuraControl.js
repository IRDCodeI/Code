//* -------Operadores--------
//? Aritmeticos --> + - * % / ()

//Modulo = 5 % 2 --> 1 "Residuo"

//? Relacionales o Comparacion <, >, >=, <=, ==, ===, !=, !===

//? Asignacion =

//? Incremento - Decremento: +=, -=, *=, /=

//? Operador Unario: i++ "Le suma despues de leer i" --> Recomendacion usar este
//?                 , i--, ++i "Le suma antes de leer i"

//? Operadores Logicos: Not(!), Or(||), And(&&)

//* ------------Estructura de Control-----------
//Controla el flujo de la programacion

//? If Else
//Permite tomar una decision en base a una condicion
//Todo >> Recomendacion usar los 3 iguales para comparar "==="
let edad = 17;

if (edad > 17){
    console.log("Mayor de Edad");
}else{
    console.log("Menor de Edad");
}

//? If - else if -else "Anidados"

//? Operador Ternario (condicion) ? resul1 : resul2

let rango = (edad >= 18) ? 'Mayor' : 'Menor';

console.log(rango);

//? Switch case
//Se lo usa cuando tenemos diferentes valores para una misma variable

let dia = 2;

switch(dia){
    case(1):
        console.log('Domigo');
        break;

    case(2):
        console.log('Lunes');
        break;
        
    default:
        break;
}

//*-----------Loops----------
//? While y do While estan cayendo en desuso

let cont = 0;

while(cont < 10){
    cont ++;
}

do{
    cont++
}while(cont < 10);

//? For

for (let index = 0; index < 10; index++) {
    console.log(index)
}

//? for in: Permite recorrer las propiedades de un objeto solo (Objeto)

for (const key in object) {
    console.log(`Key: ${key}, Value: ${object[key]}`);
}

//? for of: Permite recorrer todos los elementos de cualquier objeto iterable (Arrays, Objectos, String, etc)

for (const iterator of object) {
    
}