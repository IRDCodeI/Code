//Todo  ------ API REST -------
//* > Introduccion
// Manera en como se trabajan las aplicaciones WEB como las aplicaciones Nativas

// API (Application Programming Interface) conjunto de rutinas que permiten el acceso
// a funcionalidades de un software en especifico.

//? >> API Nativa
// Son todas las opciones que un motor como el de JS tiene integrado
//      >>DOM
//      >>Camara Web
//      >> ...

//? >> API Externa
//Url de un sitio web que entrega informacion comunmente en formato JSON
//  Wordpress.- Permite crear un front con HTML y extraer categorias, usuarios, comentarios, etc
//      >> Generalmente tienen documentacion 
//      >> No son nativas del navegador, si no que la realizan 3ros
//      >> Funcionan con Arquitectura REST

//? >> REST (Represatational State Transfer ) o RESTful
//Cojunto de restricciones con las que se peuden crear un estilo de arquitectura de software para el 
// desarrollo de apps web por medio del protocolo HTTP.
//  > Basado en reglas y estandares del protocolo HTTP

//  >> Estandar logico y eficiente para creacion de servicios web
//  >>> Restricciones:
//      > Cliente-Servidor.- Mantiene al cliente y servidor debilmente acoplados, por lo que
//                          el cliente no necesita conocer implementacion del servidor y este ultimo
//                          no se preocupa por saber como se usan los datos
//      > Sin Estado.- Cada peticion en el servidor debera ser independiente
//      > Cacheable.- Se debe tener un sistema de almacenamiento en cache para no repetir conexion entre servidor 
//                      y el cliente recupere el mismo recurso, sin tener que volver a enviar solicitud a ese recurso
//      > Interfaz Uniforme.- Interfaz generica para administrar cada interaccion entre cliente y servidor, simplificando
//                          y separando la arquitectura, por lo que cada servicio REST debe tener una URL unica (endpoints)
//      > Sistema de Capas.- Servidor puede tener de varias capas para la implementacion, ayudando a la escalabilidad, 
//                          rendimiento y segurirdad

//?     >> API REST = CRUD 
// Es el CRUD de desarrollo modeno, ya que permite desacoplar la logica del cliente y el servidor y base de datos
//  "C" --> Create 
//  "R" --> Read
//  "U" --> Update
//  "D" --> Delete

//?     >> Operaciones CRUD
//  "Insert" --> "POST" --> HTTP = POST /api/device + payload <-- 201 + Location
//  "Select" --> "GET" --> HTTP = GET /api/device <-- 200 + payload
//  "Update" --> "PUT"  --> HTTP = PUT /api/device/1 + payload <-- 200
//  "Delete"  --> "DELETE" --> HTTP = DELETE /api/device/1 <-- 200
//https://jonmircha.com/img/blog/rest-crud.png

//* Se puede usar un mismo origen de datos para diferentes clientes (App, Web, Desktop)
// https://jonmircha.com/img/blog/rest-arquitectura.jpg

// >> Usada actualmente

//? JSONPlaceholder
// JSON Server.- Instala el API de JSONPlaceholder en nuestros servidor y crear un archivo
// json para poderla trabajar como base de datos.
//  >> Permite tener una API Falsa local y enviar archivos json (db.json)
//      desde un proceso ejecuta en NodeJS

//  >json-server --watch "file.json"
//      >> options:
//          > -p 5000 = port
//          > -w = watch
//      >> Sobreescribe la informacion del archivo .json

//? NodeJS
// Plataforma de desarrollo de JS en el lado de servidor (backend)

//? NVM (Node Version Manager) "Admin"
// -nvm install "version"
// -nvm use "version"
// -nvm list

//? Service Worker
// Permite almacenar en cahce un sitio web para las (progresive webs app)

//? Insomnia
// Permite realizar pruebas a API's y consumir datos del servidor expuestas por el mismo

//* > Cada que se empiece un proyecto con arquitectura APIRest se recomienda
//* utilizar un software de Peticiones para testear y probar las peticiones y datos correctos
//* a la API, ya que despues se hace complicado depurar el "codigo"

//? En peticiones de tipo REST, cuando se envia un DELETE o PUT se necesita el ID del elemento
//? almacenado en la API en la URL (http://localhost:3000/posts/4) para poder realizar las modificaciones, en el 
//? metodo GET es solo para solicitar el recurso de manera especifica.
//?     >> En la informacion enviada en el metodo PUT no es necesario poner el ID 
//?     en JSON-SERVER ya que este lo agrega automaticamente con el parametro de la URL