import socket

HOST = '127.0.0.1'
PORT = 6060

var = input("Mensaje A: ")

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST,PORT))

    s.sendall(str.encode("Cliente A: "+var))