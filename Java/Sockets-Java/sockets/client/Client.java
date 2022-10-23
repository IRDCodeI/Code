package sockets.client;

import java.io.*; // Paquete para trabajar con I/O del S.O
import java.net.*; // Paquete para comunicacion de red

public class Client{

// https://unipython.com/sockets-en-java-cliente-y-servidor/ 

    private static String HOST = "127.0.0.1"; // Host
    private static int PORT = 6060; // Puerto
    public static void main(String[] args) {
        Socket socket;  // Declaracion de socket
        PrintWriter output;   // Declaracion de mensaje de salida
        BufferedReader input;
        String msjServer;

        try {
            socket = new Socket(HOST, PORT);    // Inicalizacion de socket al servidor

            input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            output = new PrintWriter(socket.getOutputStream(), true);   // Inicializacion para salida de msj

            output.flush();
            output.println("Hola desde el cliente");  // Escritura / Envio de mensaje al servidor
            
            msjServer = input.readLine();

            System.out.println("Servidor --> " + msjServer);

            socket.close(); // Cierre de conexion con servidor
        } catch (UnknownHostException e) {  // Error de host desconocido
            System.out.println(e.getMessage());
        } catch (Exception e) { // Error general
            System.out.println(e.getMessage());
        }
    }

}