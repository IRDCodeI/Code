//Todo >> AJAX (Asynchronous JavaScript & XML)
// https://jonmircha.com/ajax

//* >>> Introduccion 
//Mecanismo de JS que permite trabajar con asincronia y realizar peticiones al servidor
//  https://jonmircha.com/img/blog/ajax.png

//  > XML fue sustituido por JSON.
//      >> XML fue el sistema de comunicacion entre sistemas de diferentes lenguajes
//  > Se pueden usar formatos para el envio de datos como JSON, XML, HTML
//  > Posee naturaleza asincrona, por lo que puede obtener datos sin recargar navegador

//* >>>> Metodo Tradicional
//? Peticion del usuario por HTTP, servidor recibe y realiza una consulta a la BD 
//? la cual es entregada al servidor y lo envia al cliente, todo esto hace que se 
//? deba recargar el navegador para que muestre la informacion obtenida al cliente

//* >>>> Metodo AJAX
//? Ajax es un motor el cual es un intermediario entra la UI y el servidor, haciendo
//? que sin necesidad de recargar el navegador entre los datos al usuario.

//* >> Metodos Nativos
// ActiveeXObject(IE).- Usado en Internet Explorer pero ya esta obsoleto
// XMLHttpRequest.- Objeto que describe AJAX
// APIFecth.- Forma moderna de realizar AJAX

//* >> Librerias Externas
// jQuery.ajax().- Permite realizar AJAX pero ya esta comenzar a no ser usado
//      >> Detectaba el tipo de navegador para usar uno de los metodos nativos
// Axios.- Basada en promesas y es un cliente de peticiones HTTP para el front y back 
//      >> Usada en VueJS
//      >> Muy utilizada

//? Nota:
// Ajax no es un tecnologia sino un conjunto de varias tecnologias como
//  > HTML y CSS: Presentacion basada en estandares
//  > DOM: Interaccion y manipulacion dinamica de la presentacion
//  > HTML, XML y JSON: interncambio y manipulacion de informacion
//  > XMLHttpRequest o Fecth: intercambio asincrono de informacion
//  > Javascript: unir todas las tecnologias
//  Estado de la Peticion:  
//      >> READY_STATE_UNINITIALIZED = 0 (Se empieza a comunicar cliente)
//      >> READY_STATE_LOADING = 1 (Se empieza a enviar datos al servidor)
//      >> READY_STATE_LOADED = 2 (Responde el servidor pero el cliente no tiene la informacion lista)
//      >> READY_STATE_INTERACTIVE = 3 (JS ya tiene acceso a los datos)
//      >> READY_STATE_COMPLETE = 4 (AJAX termina la peticion y los datos son manipulables)

//* >> Codigos de estado de repuesta HTTP
//Indican el estado de repuesta HTTP o estado de la solicitud HTTP:
// https://developer.mozilla.org/es/docs/Web/HTTP/Status

// Repuesta informativas (100 - 199)
// Repuestas satisfactorisas (200 - 299)
// Redirecciones (300 - 399)
// Errores de los clientes (400 - 499)
// Errores del servidor (500 - 599)

//* >> Verbos de protocolo HTTP
//Repuestas se puede dar por diferentes recursos los cuales son:
// > GET: Acceso por URL
// > HEAD: Encabezados de entidad estan en el cuerpo 
// > POST o PUT: Recursos que describe el resultado de la accion se transmite al msj
// > TRACE: Cuerpo del msj contiene el msj de solicitud recibido del servidor

//? Actualmente todo se maneja con archivos JSON en AJAX
//? Codigos de respuesta del servidor se pueden ver en la seccion de "Network"