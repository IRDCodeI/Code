//* Promesas

//? Permite evitar el callback hell

//? Promesas trabajan con dos recursos( resolve, reject ), es como un if else
//? Ya que si se accede al recurso, la promesa se cumple en caso contrario se ejecuta
//? el reject.

//Todo >> Promesas se usan con concatenacion de procesos ascrincronos

function cuadradoPromise(value){

    if(typeof value !== 'number') return Promise.reject('Error no es un numero');

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve({ //return positivo de la promesa
                value,
                result: value * value
            }); 

        }, 0 | Math.random() * 1000);
    });
}

//Siguiente bloque una vez se ejecuta la funcion inicial y Se puede tener varios then()
//Permite manejar errores en un solo cathc()

cuadradoPromise(0)
    .then( (obj) => {
        console.log('Inicio')
        console.log(obj);

        return cuadradoPromise(1);
    })
    .then( (obj) => {
        console.log(obj);

        return cuadradoPromise(2);
    })
    .then( (obj) => {
        console.log(obj);

        return cuadradoPromise('3');
    })
    .then( (obj) => {
        console.log(obj);
    })
    .catch(err => console.log(err)); 