//* ----------Manejo de Errores----------
//? try - catch - finally
//Permite evaluar fragmentos de codigo y cuando genere un lanzamiento de error se captura en 
// el catch permitiendo manejar errores

try {
    console.log('Codigo a Evaluar');
    noExiste;
    console.log('2do msj de try');
} catch (e) {
    console.log('Captura error generado en try');
} finally {
    console.log('Se ejecuta siempre al final del bloque try - catch');
}

//Generacion de errores

try {
    let numero = "y";
    if(isNaN(numero)){
        throw new Error('No es numero');
    }else{
        console.log(numero * numero);
    }
} catch (error) {
    console.log(error);
}