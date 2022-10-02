//Todo >> Libreria Axios
// Libreria basadas en promesas la cual nos ayuda a realizar peticiones AJAX
//      >> Regresa la informacion en tipo JSON
//      >> Regresa las cabeceras
//      >> Informacion de la peticion
//      >> Se debe llamar libreria externa

// https://github.com/axios/axios

( () => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    //* Llamada a la libreria axios
    axios.get("https://jsonplaceholder.typicode.com/user")  // --> Uso de la libreria
        .then( res => { //Peticion correcta
            console.log(res);

            res.data.forEach( e => {    // --> Atributo del objeto de informacion de la peticion (data)
                const $li = document.createElement("li");
                $li.innerHTML = `${e.name} -- ${e.email} --  ${e.phone}`;
    
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
        })
        .catch(err => { //Error en peticion
            console.log(err.response);

            let message = err.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`
        })
        .finally(   //Siempre se ejecuta
            console.log('Me ejecutare siempre')
        );
})();

//Todo Axios + Async-Await

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try{
            let res = await axios("https://jsonplaceholder.typicode.com/users");

            res.data.forEach( e => {    // --> Atributo del objeto de informacion de la peticion (data)
                const $li = document.createElement("li");
                $li.innerHTML = `${e.name} -- ${e.email} --  ${e.phone}`;
    
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);

        }catch(e){
            console.log(e.response); //En axios.response la libreria ya manipula el error

            let message = e.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${e.response.status}: ${message}`
        }finally{
            console.log("Siempre me ejecutare")
        }
    };

    getData();
})();

//* Diferentes mecanismos para realizar peticiones ASINCRONAS