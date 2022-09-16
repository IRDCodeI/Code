//* Callbacks

//? Callback: Funcion que se ejecuta despues de que otra lo haga (mas usada)
//?     >> Función que será ejecutada cuando una operación asíncrona se haya completado.

//? >> Permite tener el control de la aplicacion haciendo que se ejecute paso a paso sin perdeer
//?    informacion

//Todo >> 1er Mecanismo de JS para poder trabajar con Asincronia
//Todo      >>> Cuando se trabaja con callbacks anidadas se forma el "callback hell"

//? Asincronia simulado con setTimeOut

function cuadradoCallBack(value, callback ){
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random() * 1000);
}

//? Callback Hell

cuadradoCallBack(0, (value, result) => {
    console.log('Inicio');
    console.log(`Callback: ${value}, ${result}`);

    cuadradoCallBack(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);

        cuadradoCallBack(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);

            cuadradoCallBack(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
            });
        });
    });
});

//* Eventos de navegador de usa adblistener con callbacks

//? ---------------------------------------------------------------

