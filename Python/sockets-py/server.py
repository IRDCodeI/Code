import socket 

HOST = '127.0.0.1'
PORT = 6001

#Alias para no pasar de nuevo los parametros en configuracion.
with socket.socket(socket.AF_INET,socket.SOCK_STREAM) as s: #Objeto socket
    s.bind((HOST, PORT)) #bind: prepara objeto para conexion
    s.listen()
    print('Esperando conexion con cliente')
    #Conexion y direccion del cliente
    conn, addr = s.accept() #Establece conexion
    print('Conexion: ', conn)
    print('Direccion: ', addr)
    
    with conn: # --> Gestiona conexion
        while True:
            data = conn.recv(1024) # Tamaño Buffer 'Paquetes a recibir'
            print('<-- Datos Recibidos: ', data)
        
            if not data:
                break
            
            conn.sendall(b'Hola desde el servidor')
        