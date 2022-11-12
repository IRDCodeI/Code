import socket
import threading
import logging
import time

HOST = '127.0.0.1'
PORT = 6060

logging.basicConfig(level=logging.DEBUG, format='[%(levelname)s] (%(threadName)-s) %(message)s')

def get_data(conn, addr):
    data = conn.recv(1024)

    time.sleep(5)

    if not data:
        logging.critical('!Not data recived from client!')
        return 
    else:
        logging.info(f'Cliente {addr[1]}: {data}')

def create_thread(name, target, conn, addr):
        thread = threading.Thread(name = name, target=target, args=(conn, addr))
        thread.start()

try:
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((HOST, PORT))
    server_socket.listen()

    logging.debug("Listening an waiting on port: " + str(PORT))
except Exception as e:
    logging.error(str(e))


while True:
    logging.debug("Waiting a connection")
    conn, addr = server_socket.accept()

    try:
        create_thread('Thread', get_data, conn, addr)
    except Exception as e:
        logging.error(str(e))
    except KeyboardInterrupt as k:
        logging.info(str(k))
    finally:
        conn.close()