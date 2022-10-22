package sockets.server;

import java.io.*;
import sockets.connection.Connection;

public class Server extends Connection{

   public Server() throws IOException{
    super("servidor");
   }

   public void startServer()
   {
        try{
            System.out.println("Esperando conexion ...");

            cs = ss.accept();

            System.out.println("Cliente en linea");

            resClient = new DataOutputStream(cs.getOutputStream());
            
            resServer.writeUTF("Peticion recibida y aceptada");

            BufferedReader input = new BufferedReader(new InputStreamReader(cs.getInputStream()));

            while((msjServer = input.readLine()) != null)
            {
                System.out.println(msjServer);
            }

            System.out.println("Fin de Conexino");

            ss.close();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
   }
}
