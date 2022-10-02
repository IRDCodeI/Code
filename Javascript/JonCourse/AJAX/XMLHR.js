//* > Objeto XMLHttpRequest
// AJAX trabaja una parte con el cliente y otra parte con el servidor web, debido
// a esto es necesario trabajar con el protocolo "http".

//? JSONPlaceholder, permite aprender a consumir API
//?     >> API Rest falsa, para realizar pruebas y prototipos
// https://jsonplaceholder.typicode.com/ 

//? >> Objecto XHR
    //? Evento "onreadystatechange" es el mas importante ya que detecta todos los demas
    //? como onbort, onerror, ...
    //?     >> Se lanza cuando detecta cualquier cambio de estado

    //? readyState --> entrega el estado de la peticion
    //? response --> repuesta del servidor
    //? responseXML --> repuesta en xml
    //? status --> estado del servidor
    //? withCredential --> Estado de la API ya se publica o privada(necesita clave)

    //Encapsulacion 
( function(){
    const xhr = new XMLHttpRequest; // 1.- Instancia de XHR

    const $xhr = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();
    
    xhr.addEventListener("readystatechange", e => { // 2.- Asignacion del evento o eventos
        //* Logica de programacion
        
        //   >> Validacion de estado
        if(xhr.readyState !== 4) return;
        
        //   >> Validaciones de codigos
        if(xhr.status >= 200 && xhr.status <= 300){
            console.log("Peticion Exitosa");
            console.log(xhr.responseText)

            let json = JSON.parse(xhr.responseText); // Parsea cadena de texto en formato JSON
            console.log(json);

            json.forEach( e => {
                const $li = document.createElement("li");
                $li.innerHTML = `${e.name} -- ${e.email} --  ${e.phone}`;

                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            console.log("Error en la peticion");

            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        };

        console.log(xhr);
    });

    //3.- Instruccion que abre peticion
    //  >> xhr.open("metodo de comunicacion", "URL de peticion o end point")
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    //? Peticion interna  xhr.open("GET", "./users.json");


    // 4.- Envio de peticion
    xhr.send();

} )();

//* Siempre que se realiza peticiones con XHR se debe validar que se completen los 4
//* estados de peticion, se lo puede validar con un console.log(), en la callback del evento

//  Estado de la Peticion:  
//      >> READY_STATE_UNINITIALIZED = 0 (Se empieza a comunicar cliente)
//      >> READY_STATE_LOADING = 1 (Se empieza a enviar datos al servidor)
//      >> READY_STATE_LOADED = 2 (Responde el servidor pero el cliente no tiene la informacion lista)
//      >> READY_STATE_INTERACTIVE = 3 (JS ya tiene acceso a los datos)
//      >> READY_STATE_COMPLETE = 4 (AJAX termina la peticion y los datos son manipulables)

//  Codigos de Repuestas:
//      >> Repuesta informativas (100 - 199)
//      >> Repuestas satisfactorisas (200 - 299)
//      >> Redirecciones (300 - 399)
//      >> Errores de los clientes (400 - 499)
//      >> Errores del servidor (500 - 599)