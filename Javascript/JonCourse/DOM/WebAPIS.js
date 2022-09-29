//* Web APIs

//? DOM (Document Object Model) es la API (Application Programming Interface) la cual es una serie de objetos y
//? mecanismos que permiten interactuar con el navegador, este es todo el control del navegador.

//? >> Permite modificar el contenido y presentacion visual por medio de JS
//? >> Es todo el control del navegador

//Todo > Tipos de WEB APIs
//Todo      >> DOM (Document Object Model)
//Todo      >> BOM (Browser Object Model)
//Todo      >> CSSOM (CSS Object Model)
//Todo          >>> Eventos, Forms, AJAX - Fetch, Web Storage, Drag & Drop, Canvas ...

//? https://developer.mozilla.org/es/docs/Web/API

//* DOM (Es la representacion del HTML para ser trabajado con JS) "Interfaz estandarizada"
//*     >> Controla los nodos del DOM

//API que englobal a JS en el navegador
console.log(window);

//Document es el arbol del documento que mapea la estructura del HTML
console.log(document);

//? Para activar interfaz de Speach es:
//?     > Permitio activar interfaz de computadoras para que hable o lea un texto

let text = 'Hola soy Stalin ...';

const speakWeb = (text) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

speakWeb(text);

//? Las Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés) son 
//? construcciones disponibles en los lenguajes de programación que permiten a los 
//? desarrolladores crear funcionalidades complejas de una manera simple. 
//? Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar 
//? en su lugar.