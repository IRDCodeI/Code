package sockets.server;

import java.io.IOException;
import sockets.server.Server;

public class mainServer {
    public static void main(String[] args) throws IOException{

        Server serverScoket = new Server();

        System.out.println("Iniciando Servidor \n");
        serverScoket.startServer();
    }    
}
