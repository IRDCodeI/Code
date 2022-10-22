package sockets.server;

import java.io.*;   // Paquete para manejo de I/O
import java.net.*;  // Paquete para manejo de comunicaicon en red

public class Server{
    
    private static int PORT = 6060; // Puerto de servidor

    public static void main(String[] args) {
        BufferedReader input;   // Declaracion para lectura de bits recibidos
        PrintWriter output;    // Declaracion para envio o salida de informacion
        Socket socket;  // Declaracion de socket servidor local
        ServerSocket serverSocket;  // Declaracion para socket servidor "red"
        String msjClient;

        try {
            serverSocket = new ServerSocket(PORT);  // Inicializacion de servidor con puerto

            System.out.println("Esperando una conexion...");

            socket = serverSocket.accept(); // Aceptacion de conexion de cliente y asignacion de comunicacion

            System.out.println("Cliente conectado");

            // Entrada y salida de datos

            input = new BufferedReader(new InputStreamReader(socket.getInputStream())); // Incializacion para lectura o recibo de informacion del cliente
            output = new PrintWriter(socket.getOutputStream(), true);    // Inicializacion para envio o escritura de informacion hacia el cliente
            // Recibo de mensaje
            
            while((msjClient = input.readLine()) != null){
                if(msjClient != null){
                    System.out.println("Cliente <-- " + msjClient);
                    break;
                }
            };

            output.flush();
            output.println("Hola desde el servidor");    // Escritura y envio del servidor
            serverSocket.close();   // Cierre de comunicacion cliente-servidor
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

    }
}
