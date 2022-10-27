import socket
import sys
import selectors
import types

#*  -- Implementacion --
# Event-Loop para realizar monitoreo de varias conexiones en el servidor socket
#   Eventos de monitoreo: EVENT_READ (1), EVENT_WRITE (2)

sel = selectors.DefaultSelector() # --> Declaracion para la seleccion mas eficiente del monitor en S.O 

def accept_wrapper(sock):   # Funcion para aceptar conexiones
    conn, addr = sock.accept()  # Should be ready to read
    print(f"Accepted connection from {addr}")

    conn.setblocking(False) # --> Conexion o socket no bloquante
    data = types.SimpleNamespace(addr=addr, inb=b"", outb=b"")  # --> Definicion simplificada para clase data (direccion, informacion de entra, I.salida)
    events = selectors.EVENT_READ | selectors.EVENT_WRITE   # --> Establece el tipo de evento de monitoreo 3 (WRITE and READ)
    sel.register(conn, events, data=data)   # --> Registra la conexion para el monitoreo 

def service_connection(key, mask):  # Funcion para manejar la conexion
    sock = key.fileobj  # Objeto Monitoreado (socket)
    data = key.data     # Datos del objeto monitoreado  
    if mask & selectors.EVENT_READ: # --> Determina si es un evento de lectura de informacion "recepcion"
        recv_data = sock.recv(1024)  # Should be ready to read
        if recv_data:   # --> Si aun hay datos almacena
            data.outb += recv_data  
        else:   # --> Si ya no hay cierra conexion y deja de monitorear el socket
            print(f"Closing connection to {data.addr}")
            sel.unregister(sock)    # --> Deja de monitorear
            sock.close()
    if mask & selectors.EVENT_WRITE:    # --> Determina si es un evento de escritura de informacion "envio"
        if data.outb:   # Si el atributo data.outb tiene informacion enviala
            print(f"Echoing {data.outb!r} to {data.addr}")
            sent = sock.send(data.outb)  # Should be ready to write
            data.outb = data.outb[sent:]


#[(SelectorKey(
#               fileobj=<socket.socket fd=5
#                                       , family=AddressFamily.AF_INET
#                                       ,type=SocketKind.SOCK_STREAM
#                                       ,proto=0, laddr=('127.0.0.1', 6060)
#                                       , raddr=('127.0.0.1', 34338)>, 
# fd=5, events=3, 
# data=namespace(addr=('127.0.0.1', 34338), inb=b'', outb=b''))
# , 3)] 

host, port = sys.argv[1], int(sys.argv[2])  # --> Lectura de argumentos para ejecucion del archivo

#? Declaracion y vinculacion de interfaz de red al socket
lsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
lsock.bind((host, port))
lsock.listen()
print(f"Listen on '{host, port}'")

#? Implementacion de socket no bloqueante
lsock.setblocking(False)    # --> Socket no bloqueante "No se bloquea en la conexion con el usuario"

#? Asginacion del socket servidor para monitoreo
sel.register(lsock, selectors.EVENT_READ, data=None)    # --> Registro de socket para el monitoreo (objeto, eventos, datos)

try:
    while True: # --> Event Loop
        events = sel.select(timeout=None)   # Se espera hasta que uno de los objetos monitoreados este listo "Hay una conexion entrante al servidor"
        for key, mask in events:     
            if key.data is None:                
                accept_wrapper(key.fileobj)
            else:
                service_connection(key, mask)
except KeyboardInterrupt:
    print('Caught keyboard interrupt, exiting')
finally:
    sel.close()

#https://docs.python.org/3/library/types.html
#https://docs.python.org/3/library/selectors.html
#https://docs.python.org/3/library/socket.html
#https://docs.python.org/3/library/sys.html
#https://www.w3schools.com/python/python_operators.asp 
#https://stackoverflow.com/questions/37161275/what-is-the-difference-between-simplenamespace-and-empty-class-definition 