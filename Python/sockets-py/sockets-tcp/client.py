import socket

HOST = '127.0.0.1'
PORT = 6001

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:

    s.connect((HOST, PORT)) # Establece conexion TCP con el socket servidor
    s.sendall(b'Hola desde el cliente') #Envio de informacion en binario 'b'
    data = s.recv(1024) #Asignacion de informacion recibida
    
print(f'Recibido --> {data!r}') #Vuelta 'reverse' de bits para impresion
            