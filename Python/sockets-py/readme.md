# Sockets 

Son usados para enviar mensajes y proporcionar comunicion entre procesos (ICP), por medio de una red local o externa.

- API sockets para sockets de Internet (Sockets Berkeyley "BSD").
- Socket de dominio Unix, usados para la comunicacion en el __mismo host__

## API socket en Python
Funciones y metodos de la API:
-  socket() = Declara un socket
- .bind() = Asocia una IP y puerto a instancia de socket
    - Cadena vacia hace que se acepte conexion en todas las interfaces IPV4
- .listen() = Prepara un socket para aceptar conexiones
- .accept() = Acepta una solicitud de conexion entrante 
    - Bloque ejecucion y espera conexion
    - Devuelve un objeto socket con la tupla (host, port) del cliente
- .connect() = Conecta un socket cliente TCP a un servidor TCP
- .connect_ex() = 
- .send() = Usado para enviar datos de un socket a otro
- .recv() = Devuelve los datos recibidos como bytes
    - Se usa en TCP y UDP
- .close() = 

## Socket TCP
Para crear un socket se usa socket.socket("Tipo de socket"):

- SOCK_STREAM = Protocolo de control de transmicion (TCP)
    - Confible: Remitente detecta y envia informacion de la red
    - Datos en orden: Se lee datos en el orden que escribio el remitente
    - Lento

### Funcionamiento Sockets TCP

Servidor comienza asociando una red con `bind()`, posteriormente comienza a escuchar las conexion con `listen()` y acepta una conexion entrante de cliente `conect()` con el metodo `accept()`.

Establecida la conexion cliente - servidor comienzan a intercambiar datos con los metodos `send()` y `recv()`.

Una vez intercambiada la informacion se cierra la conexion con `close()`

## Socket UDP

Programa donde un cliente envia un mensaje a un servidor con UDP

- SOCK_DGRAM = Protocolo de datagramas de usuario (UDP)
    - No confible: Remitente solo envia informacion
        - No hay entrega garantizada
    - Datos en desorden: El receptor puede leer informacion de desorden o incompleta
    - No hay comunicacion basada en conexion
    - Rapido

### Funcionamiento Sockets UDP

Servidor comienza asociando una red con `bind()` ...

## Socket Multiconexion

Uso de `select()` para verificar la finalizaicon de I/O en mas de un socket.

El modulo de `selectors` permite una multiplexacion de I/O mas eficiente
- Permite crear un event-loop de manera sincronica

## Referencias

### Sockets
[www.pythontip.com](https://pythontic.com/modules/socket/introduction)

[www.realpython.com](https://realpython.com/python-sockets/#background)

### Sintaxis
[www.geekfotgeeks](https://www.geeksforgeeks.org/with-statement-in-python/)