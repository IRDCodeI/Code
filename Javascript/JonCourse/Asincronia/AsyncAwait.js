//* Async - Await

//? Funciones asincronas, esperan a que algo se cumpla para que se continue la ejecucion del proceso
//? Asyncs trabajan en conjunto con Promesas

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

//* --------------------------------------------------------
//? Cada peticion se la puede guardar en variables evitando usar los then() anidados
//? Se usa await para la funcion asincrona, asiendo que espere el resultado de la ejecucion para poder
//? pasar a la siguiente linea

async function funcionAsincronaDeclarada () {
    try{
        console.log('Inicio Async');

        //La funcion de console se imprime inmediatamente
        let obj = await cuadradoPromise(0);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        console.log('Fin Async');

    }catch (err){
        console.error(err);
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async() => {

    try{
        console.log('Inicio Async');

        //La funcion de console se imprime inmediatamente
        let obj = await cuadradoPromise(4);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(6);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(7);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        console.log('Fin Async');

    }catch (err){
        console.error(err);
    }

}

funcionAsincronaExpresada();