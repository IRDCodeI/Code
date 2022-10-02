//Todo >> BOM: Propiedades y Eventos

//Metodos que cuelgan y pertenecen al objeto Window en el navegador
//?Pagina
console.log(window.innerHeight); // Es el tamanio del alto del viewport de la ventana
console.log(window.innerWidth); // Es el tamanio del ancho del viewport de la ventana

//?Navegador
console.log(window.outerHeight); // Es el tamanio del alto de la ventana navegador
console.log(window.outerWidth); // Es el tamanio del ancho de la ventana navegador

//*Redimension Pantalla
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("----resize----");

    console.log(window.outerHeight);
    console.log(window.outerWidth);
});

//*Movimiento Scroll
window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("----scroll----");
-
    console.log(window.scrollX); //Valor en referencia de cuanto se aleja la barra del margen
    console.log(window.scrollY);
});

//*Coordenada de Pantalla de Dibujado
//Load: espera a tener todas las etiquetas parceada en el arbol de elementos, ademas
//carga CSS, JS, etc

window.addEventListener("load", (e) => {
    console.log('-----Load------');

    console.log(window.screenX);
    console.log(window.screenY);
});

//* Carga de Documento
//Mucho mas rapido y es mejor que load
//  >> No espera a que cargue todas las eitquetas, estilos CSS y codigo JS para comenzar a funcionar
//? Es mucho mas recomendable y eficiente usar este

document.addEventListener("DOMContentLoaded", (e) => {
    console.log('-----DOM Content Load------');

    console.log(window.screenX);
    console.log(window.screenY);
});

//* Peticiones asincronas paran el cargado del DOM, por lo que se necesite cargar
//* en ese momento o al instante sin esperar nada es mejor usar DOM

//Todo >> Metodos
//? Metodos que pertenecen a window, pueden ser invocados sin agregar window
/*
window.alert("Mensaje"); //Envia un mensaje de alerta en el navegador
window.confirm("Confirmacion"); //Envia una caja con un mensaje y un boton de 
                                aceptar y cancelar las cuales pueden ser almacenadas en variables

window.prompt("Datos de Usuario"); //Envia un mensaje y muestra un input en donde se pueden ingresar datos
                                    lo cual puede ser almacenada en variables  
*/

const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click", (e) => {
    ventana.close();
});

$btnImprimir.addEventListener("click", e => {
    window.print();
})

//Todo >> Objectos: URL, Historial y Navegador
//Objectos que cuelgan del window

//*URL o Location
//? Funcionan en base al historial de navegacion

console.log('------URL (Location)---------');
console.log(location);
//location.reload(); //Recargar pagina
console.log(location.origin);   // Devuelve la ruta de la cual se origina el documento
console.log(location.protocol); // Devuelve el protocolo de comunicacion
console.log(location.host);  // Devuelve la maquina servidor con el numero de puerto
console.log(location.hostname); //Devuelve la ip de la maquina servidor
console.log(location.port);  //Devuelve el puerto del servidor
console.log(location.href);  //Devuelve toda la URL
console.log(location.hash);  //Devuelve el ancla interna del documento (https://...#contacto)
console.log(location.pathname);  //Devuelve el archivo de consula

//? Parametros por URL en el href tambien detecta el paso de parametros y los almacena en search
//* --> ?nombre=Stalin&edad=36
console.log(location.search)

//* Historial o history
//Almacena el historial en el que se encuentra y podemos saber cuantas paginas
//se han visitado
console.log("------Objecto Historial (history)");
console.log(history);
console.log(history.length) // Muestra las paginas que se han visitado

//? Navegar entre paginas

//* Regresar entre paginas
//history.back(1); // Regresar entre paginas, recibe como parametros 
                //el numero de paginas a regresar

//* Adelantar paginas
//history.forward(1)

//? Ambos metodos funcionan como los botones de navegacion en el navegador

//* Ir a una pagina en especifico
//history.go(3); Especifica el numero de paginas a ir ya sea adelante o atras
// Con numeros positivos o negativos para navegar


//* Navegador o navigator
//? Permite interactuar con el bluetooth, clipboard, credentials, geolocation, ....
//? UserAgent....

console.log("----- Navegador o navigator-----")
console.log(navigator);

console.log(navigator.connection); //Devuelve el tipo de conexion a la red del usuario
console.log(navigator.geolocation); // Geolocalicacion
console.log(navigator.mediaDevices); // Son dispositivos como camaras microfonos
console.log(navigator.mimeTypes); //Tipos de formatos que dependiendo del tipo app soporta el navegador
console.log(navigator.onLine);  //Permite saber cuando se pierde la conexion o el usuario recupera dicha conexion (Dinosaurio Game)
console.log(navigator.serviceWorker);  //API para realizar progresive web apps, osea convertir una web en una app
console.log(navigator.storage); //API de almacenamiento como web storage o localstorage
console.log(navigator.usb); //Permite detectar dispistivos USB
console.log(navigator.userAgent); //Muestra informacion del usuario como plataforma, OS, navegador, etc
