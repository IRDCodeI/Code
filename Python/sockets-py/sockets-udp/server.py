import socket  

HOST = '127.0.0.1'
PORT = 6060

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
    s.bind((HOST, PORT))

    print('Esperando Mensajes')

    while(True):
        data = s.recvfrom(1024)
        
        print(data[0])
        s.sendto(b'Servidor --> Hola desde el servidor', data[1]);

        