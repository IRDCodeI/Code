//* ----------Objeto Windows-----------
//Metodos de la ventana para interacturar con el usuario
//? Alert, Confirm y Prompt

// >> window.alert('Alerta desde el objeto Window');
// >> window.confirm('Confirmacion desde el windows'); // --> Opciones de aceptar y cancelar
// >> window.prompt('Ventana para ingreso de valor');

//Podemos mandar solo como alert, confirm o prompt
//? Almacenamiento de valores ingresador en confirm y prompt

let alerta = alert('Alerta'),
    confirmacion = confirm('Confirmacion'),
    aviso = prompt('Ingreso de datos');

console.log(alerta);
console.log(confirmacion);
console.log(aviso);
