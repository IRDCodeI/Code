import socket 

HOST = '127.0.0.1'
PORT = 6060

# Manejador de excepcion con with
with socket.socket(socket.AF_INET,socket.SOCK_STREAM) as s: #Objeto socket ('Familia de Direccion (IPV4)', 'Tipo de Socket' (TCP))
    s.bind((HOST, PORT)) # Asocia una interfaz de res y puerto al socket
    s.listen()  # Escucha las conexiones
    print('Esperando conexion con cliente')
    #Conexion y direccion del cliente
    conn, addr = s.accept() # Acepta la conexion cliente
    print('Conexion: ', conn)
    print('Direccion: ', addr)
    
    with conn: # --> Gestiona conexion con excepcion
        while True:
            data = conn.recv(1024) # Tamaño Buffer 'Paquetes a recibir'
            print('<-- Datos Recibidos: ', data)
        
            if not data:
                break
            
            conn.sendall(b'Hola desde el servidor')
        