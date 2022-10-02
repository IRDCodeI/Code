//Todo >> Manejadores de Eventos

//Mencanismo para poder controlar acciones del usuario y definir comportamiento del
// documento que suceda en ciertos momentos o con ciertas condiciones

//? Funciones de eventos son (Event Handler "Manejadores de Eventos, Escuchadores, ...")
//https://developer.mozilla.org/es/docs/Web/Events

//* >>> Maneras para definir eventos
//* 1.- Butones
//      >> Evento como atributo de la etiqueta html "No recomendada"
//          >> Empienzan con la palabra on con atributo el codigo js

//  <button onclick="alert('Hola')">Evento con atributo HTML</button>

//* 1.2.- Funcion definida en JS

function holaMundo() // Se convierte en el Manejador de Eventos
{
    alert("Hola Mundo");
    console.log(event);
}

//? Cuando una funcion en un evento se puede acceder al evento con la palabra "event"
//?     >> Manejador de Eventos hace referencia a la funcion que se ejecuta en el evento
//?     >> Cuando una funcion es un manejador de eventos, no puede recibir parametros, solo recibe el evento en si\

//* 2.- Manejador de Eventos

const $eventoSemantico = document.getElementById("evento-semantico");

//Manejador semantico es cuando se usa onclick
//  >> Cuando se define un evento como semanico se lo hace sin parentesis ya que estos causan
//      que se ejecute la funcion una vez carga la pagina.

$eventoSemantico.onclick = holaMundo; // --> Correcto | No va "holaMundo()"

//? Eventos semanticos hace que la funcion se agregue al prototipo de los eventos del DOM
//?     >> Cuando se define un evento semantico, hace que solo se puede ejecutar una sola funcion
//?     >> !!Por cada evento solo se puede asignar una fucnion!! --> holaMundo sera reemplazada

//* 2.2.- Funcion Anonima Semantica

$eventoSemantico.onclick = function (e) {
    alert('Hola Mundo con Manejador Semantico');
    console.log(e);
    console.log(event);
};

//* 3.- Manejadores Multiples
// Hace uso de addEventListener("evento", "funcion"), el cual permite levantar un Manejador de Eventos
//  >> Se ejecutan varias funciones definidas en diferentes manejadores
//  >> Listener: Funcion que se ejecuta al evento del elemento asociado

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert('Hola Mundo con Manejador Multiple')
    console.log(e);
    console.log(e.type);    // Tipo de evento
    console.log(e.target);  // Elemento que origina el evento
});

//Todo >> Eventos con Parametros y Remover Eventos

//!! Funcion que es manejadores de eventos solo puede recibir como parametros el evento!!

function saludar(nombre = "Desconocido"){
    alert(`Hola ${nombre}`)
};

$eventoMultiple.addEventListener("click", saludar);

//Funcion manejadora del evento es la arrow function por lo que permite usar una funcion con parametros
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Jon");
});

//? Eliminacion de Eventos
// Solo se aplica con manejadores multiples
// removeEventListener (evento, funcion)
//      >> Con Funciones Anonimas no sirven ya que cuando se declara se ejecuta, por lon que la referencia se pierde
//      >> Funcion debe estar guardada (expresada o declarada)

const $eventoRemover = document.getElementById("evento-remover");
const removerDobleClick = () => {
    alert('Removiendo Evento');

    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);
/*
$eventoRemover.addEventListener("dblclick", (e) => {
    alert('Removiendo Evento');

    $eventoRemover.removeEventListener("dblclick")
});*/

//Todo >> Flujo de Eventos (Burbuja y Captura)
// Como JS trabaja con los eventos
//      >> addeventListener(.., .., )

//? Fase Burbuja (por defecto)
//Es la propagacon del evento, osea que cuando un evento se origina este se propaga en el arbol del
//DOM el cual comienza desde el elemento mas interno hacia el mas externo, la cual es la fase de "burbuja" 

    //https://es.javascript.info/article/bubbling-and-capturing/event-order-bubbling.svg
    //https://excalidraw.com/#json=JSrCqtYB1ZNDgoGy03e1v,bvUThd8e0LhHu2wufEim4A

//  >> Esquema y modelo que navegadores soporta

const $divsEventos = document.querySelectorAll(".eventos-flujos div");
console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola saludo desde ${this.className}, click desde ${e.target.className}`);
    //e.stopPropagation(); // --> Detener propagacion
}

$divsEventos.forEach(div => {
    //div.addEventListener("click", flujoEventos, false); // --> Fase burbuja
    //div.addEventListener("click", flujoEventos, true); // --> Fase captura

    div.addEventListener("click", flujoEventos, { // --> Fases con parametros como Objecto
        capture: false
        //capture: true,
        //once: true ,// Ejecucion de evento una sola vez en objectos
    })
});

//? Fase de captura
// Va desde el elemento mas externo hacia el mas interno

//* Cuando la estructura del DOM posee muchos elementos, en elementos concatenados con el mismo evento
//* donde se propaga el evento la "fase de captura" es mas optima

//* Fase captura y burbuja se puede delegar el evento a un elemento mas externo, mejorando rendimiento

//? Evento de una sola ejecucion con elementos concatenados
// Para ejecutar un evento una sola vez se puede usar la propiedad once

//Todo >> stopPropagation & preventDefault
//Detener propagacion para evitar que el evento se propage a los elementos padres o hijo
// haciendo que se ejecute una sola vez la funcion manejadora

// Hay comportamientos del DOM que tienen eventos por defecto como (submit) dentro de un form
//      >> Scroll de la barra de desplazamiento con flechas o rueda del mouse
//      >> Comportamiento de enlaces en HTML

//? Detener propagacion
//e.stopPropagation(); // --> Detener propagacion

//? Prevenir accion por defecto

const $linkEventos = document.querySelector(".eventos-flujos a");
$linkEventos.addEventListener("click", e => {
    alert("Click en el enlace");
    e.preventDefault(); //Cancela la accion por default del elemento (a --> evitar abrir enlace)
    e.stopPropagation();
});

//Todo >> Delegacion de Eventos
//Optimiza los recursos de memoria en app JS
//? Consiste en asignar el evento a un elemento padre superior y a partir de ahi buscando el selecto
//? buscar quien origino el evento para ejecutar la funcion al momento del evento
//    >> Se puede generar un listener global para el document y apartir de ahi se dectecta el nodo activador

//* Evita la propagacion de eventos
//  >> Se debe usar una condicional para buscar la coincidencia de un condicional y ejecutar la funcion
//  >> Se evita la propagacion
//  >> El contexto actual es el objeto Window

document.addEventListener("click", (e) => {
    
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
    
    if(e.target.matches(".enlace-2")) //busca un selecto valido
    {
        alert("Click en el enlace");
        e.preventDefault();
    }
});

//? No se puede agrega addEventListener a elementos que no existen en el DOM, esto se aplica en AJAX
//? Forma mas optima de trabajar con eventos