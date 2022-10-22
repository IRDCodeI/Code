package sockets.client;

import java.io.DataOutputStream;
import java.io.IOException;
import sockets.connection.Connection;

public class Client extends Connection{

    public Client() throws IOException{
        super("cliente");
    }

    public void startClient()
    {
        try {
            resServer = new DataOutputStream(cs.getOutputStream());

            for (int i = 1; i < 2; i++)
            {
                resServer.writeUTF("Este es el mensaje " + (i+1));
            }

            cs.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}