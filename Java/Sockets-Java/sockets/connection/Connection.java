package sockets.connection;

import java.net.*;
import java.io.*;

public class Connection {
    private final static int PUERTO = 6060;
    private final static String HOST = "127.0.0.1";
    protected String msjServer;
    protected ServerSocket ss;
    protected Socket cs;
    protected DataOutputStream resServer, resClient; // Datos primitivos de JAVA para envio ligero "Bits"

    public Connection(String tipo) throws IOException
    {
        if(tipo.equalsIgnoreCase("servidor"))
        {
            ss = new ServerSocket(PUERTO);
            cs = new Socket();
        }else
        {
            cs = new Socket(HOST, PUERTO);
        }
    }
}
