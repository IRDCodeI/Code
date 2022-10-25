import socket

HOST = "127.0.0.1"
PORT = 6060

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
    s.sendto(b"Cliente <-- Hola desde el Cliente", (HOST, PORT))

    data = s.recvfrom(1024)
    print(data[0])