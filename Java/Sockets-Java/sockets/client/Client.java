package sockets.client;

import java.io.*;
import java.net.*;

public class Client{

// https://unipython.com/sockets-en-java-cliente-y-servidor/ 

    private static String HOST = "127.0.0.1";
    private static int PORT = 6060;
    public static void main(String[] args) {
        Socket socket;
        DataOutputStream msj;

        try {
            socket = new Socket(HOST, PORT);

            msj = new DataOutputStream(socket.getOutputStream());

            msj.writeUTF("Hola desde el cliente");

            socket.close();
        } catch (UnknownHostException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

}