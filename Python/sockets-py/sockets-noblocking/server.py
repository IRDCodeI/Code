import socket
import sys
import selectors
import types

#*  -- Implementacion --
# Event-Loop para realizar monitoreo de varias conexiones
# al servidor socket
#   Eventos de monitoreo: EVENT_READ, EVENT_WRITE

sel = selectors.DefaultSelector() # --> Declaracion para la seleccion mas eficiente del S.O

host, port = sys.argv[1], int(sys.argv[2])  # --> Lectura de argumentos para ejecucion del archivo

#? Declaracion y vinculacion de interfaz de red al socket
lsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
lsock.bind((host, port))
lsock.listen()
print(f"Listen on '{host, port}'")

#? Implementacion de socket no bloqueante
lsock.setblocking(False)    # --> Socket no bloqueante "No se bloquea en la conexion con el usuario"
sel.register(lsock, selectors.EVENT_READ, data=None)    # --> Registro de socket para el monitoreo (objeto, evento)

def accept_wrapper(sock):   # Funcion para aceptar conexiones
    conn, addr = sock.accept()  # Should be ready to read
    print(f"Accepted connection from {addr}")

    conn.setblocking(False) # --> Conexion no bloquante
    data = types.SimpleNamespace(addr=addr, inb=b"", outb=b"")  # --> Definicion simplificada para clase data (direccion, informacion de entra, I.salida)
    events = selectors.EVENT_READ | selectors.EVENT_WRITE   # --> Establece el tipo de evento de monitoreo 3 (WRITE and READ)
    sel.register(conn, events, data=data)   # --> Registra la conexion para el monitoreo 

def service_connection(key, mask):
    sock = key.fileobj
    data = key.data
    if mask & selectors.EVENT_READ:
        recv_data = sock.recv(1024)  # Should be ready to read
        if recv_data:
            data.outb += recv_data
        else:
            print(f"Closing connection to {data.addr}")
            sel.unregister(sock)
            sock.close()
    if mask & selectors.EVENT_WRITE:
        if data.outb:
            print(f"Echoing {data.outb!r} to {data.addr}")
            sent = sock.send(data.outb)  # Should be ready to write
            data.outb = data.outb[sent:]

try:
    while True:
        events = sel.select(timeout=None)
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