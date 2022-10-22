package sockets.client;

import java.io.IOException;
import sockets.client.Client;

public class mainClient {
    public static void main(String[] args) throws IOException {
        Client clientSocket = new Client();

        System.out.println("Inciando Cliente \n");
        clientSocket.startClient();
    }
}
