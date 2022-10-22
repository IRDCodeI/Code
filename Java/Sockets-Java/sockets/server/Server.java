package sockets.server;

import java.io.*;
import java.net.*;

public class Server{
    
    private static int PORT = 6060;

    public static void main(String[] args) {
        BufferedReader input;
        DataOutputStream output;
        Socket socket;
        ServerSocket serverSocket;

        try {
            serverSocket = new ServerSocket(PORT);

            System.out.println("Esperando una conexion...");

            socket = serverSocket.accept();

            System.out.println("Cliente conectado");

            // Entrada y salida de datos

            input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            output = new DataOutputStream(socket.getOutputStream());

            System.out.println("Conexion con el cliente exitosa");

            output.writeUTF("Conexion exitosa");

            // Recibo de mensaje

            String msj = input.readLine();

            System.out.println(msj);

            output.writeUTF("Mensaje recibido");

            output.writeUTF("Cerrando conexion");

            serverSocket.close();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

    }
}
