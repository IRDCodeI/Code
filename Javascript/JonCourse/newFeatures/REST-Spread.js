//* ---------Parametros REST & Operador Spread--------
//? Parametros REST: Una forma de agregar parametros infinitos a una funcion o variable

function sum(a,b, ...c){ //Parametros REST: ...c
    let result = a + b;

    c.forEach(function (n) {
        result += n;
    });

    return result;
}

console.log(sum(1, 2, 3, 7));

//? Spread Operator: Permite expandir una expreion cuando se tiene multiples argumentos o elementos
//?     - Se ejecuta en cualquier sentencia del codigo

const arg1 = [1, 2, 3, 4],
      arg2 = [5, 6 ,7, 8];

const arg3 = [...arg1, ...arg2]

console.log(arg3);