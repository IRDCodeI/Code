//Todo >> API Fecth
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API

// Mecanismo mas optimo para realizar peticiones XMLHttpRequest
//      >> No necesita instancia
//      >> Mecanismo que trabaja con "Promesas"
//      >> Repuesta de Fetch es en formato de un objeto (ReadableStream)
( () => {
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();   
    
    //Metodo fetch("recurso de referencia URL", Objecto con opciones (metodo, cabeceras, etc));
    fetch("https://jsonplaceholder.typicode.com/users") // Peticion Local: "./users.json"
        .then((res) => {          //Peticion correcta
            console.log(res);
            //Validacion de errores
            return res.ok ? res.json() : Promise.reject(res);// --> Transformar el objeto ReadableStream a JSON y devolver al siguiente then()
                                        //Rechazar la repuesta de la promesa
            // Alternativa:  .then( (res) => {res.ok? res.json() : Promise.reject(res)})
        })
        .then( json => {
            console.log(json);
            
            json.forEach( e => {
                const $li = document.createElement("li");
                $li.innerHTML = `${e.name} -- ${e.email} --  ${e.phone}`;

                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        })
        .catch( (err) => {        //Esrror en la peticion
            console.log(err);

            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })  
        .finally( () => {       //Se ejecuta siempre sin importar si esta bien o no la peticion
            console.log("Siempre se ejecuta")
        })
})();

//? Segundo then() no se ejecuta hasta obtener una respuesta del primer then()

//Todo >> APIFetch + Async-Await

( () => {
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    //* Funcion Asincrona
    async function getData(){
       try{
        //* Postiva
        let res = await fetch("https://jsonplaceholder.typicode.com/user"),
            json = await res.json();

        console.log(res, json);

        /*
        if(res.ok){
            throw new Error('MSJ); // Solo recibe msj textuales y por lo que no se puede enviar objetos
              thorw envia el flujo de la programacion al catch
        }
        */

        if(!res.ok){ throw {status: res.status, statusText: res.statusText}}

        json.forEach( e => {
            const $li = document.createElement("li");
            $li.innerHTML = `${e.name} -- ${e.email} --  ${e.phone}`;

            $fragment.appendChild($li);
        });

        $fetchAsync.appendChild($fragment);
       }catch(err){
        //* Error
            console.log(err);

            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
       }finally{
            console.log('Siempre me ejecuto ')
       }
    }

    getData();
})();

