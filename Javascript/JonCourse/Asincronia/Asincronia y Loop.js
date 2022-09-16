//* Asincronia y Event Loop
//* http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

//? Pilares fundamentales de JS ya que es un lenguaje de Single Thread

//? > Asincronia permite realizar largas solicitudes de red sin bloquear el hilo
//?   principal

//? > JS trabaja con un modelo asincrono y no bloqueante con un loop de eventos de
//?   un solo hilo para operaciones de I/O

//Todo >> Hilos son unidades basicas de ejecucion de cada proceso que hace la maquina

//Todo >> Operacion CPU y I/O: 
//Todo      >> O.CPU: Son las que pasan mas tiempo consumiendo procesos del CPU (escritura ficheros)
//Todo      >> O.I/O: Son las que pasan mas tiempo esperando la respuesta de una peticion o recursos como API o BD

//Todo >> Concurrentes y Paralelas
//Todo      >> Concurrencia: Cuando dos o mas tareas progresan simultaneamente
//Todo      >> Paralelismo: Cuando dos o mas tareas se ejecutan al mismo tiempo

//Todo >> Bloqueante y No bloqueante: Fase de espera cada que se ejeucta una operacion
//Todo      >> Bloqueante: No devuelve el control a la aplicacion hasta que termine todas la tareas
//Todo      >> No Bloqueante: las operaciones se ejecutan y devulven el control sin importar si termino o no la tarea

//Todo >> Sincronas y Asincronas: Referencia a cuando tendra lugar la repesta
//Todo      >> Sincrono: Espera el resultado en tiempo presenta (inmediato)
//Todo      >> Asincrono: Respuesta se da en el futuro, se ejecuta pero no espera el resultado

//* >>> "Codigo Sincrono Bloqueante"
//? Cada operacion se hace de una vez bloqueando el flujo del hilo principal, esperando la respuesta
//? cuando se procesa pasa a la siguiente operacion y asi hasta que termine todas las operaciones

(() => {
    console.log('Codigo Sincrono');
    console.log('Inicio');

    function dos(){
        console.log('Dos');
    }

    function uno(){
        console.log('Uno');
        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin');
})()

//* >>> "Codigo Asincrono no Bloqueante"
//? Cuando se envuelve una funcion con setTimeout hace que dicha funcion se pase a la pila de
//? tareas (console.logs puede tener mayor preferencia y setTimeout se almacene en la call stack)

(() => {
    console.log('Codigo Asrincrono');
    console.log('Inicio');

    function dos(){
        setTimeout(function () {
            console.log('Dos')
        }, 1000);
    }

    function uno(){
        setTimeout(function() {
            console.log('Uno')
        }, 0);

        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin')
})()