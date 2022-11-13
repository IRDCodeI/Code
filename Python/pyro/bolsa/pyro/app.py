import time
import Pyro4 # Modulo PYRO para RMC

#Proxy: Middleware que intercepta llamada a meotodos  y devuleve los metodos
# solicitados

#PYRONAME: Protocolo que realiza busqeda de objeto en el servidor de nombres
viewer = Pyro4.Proxy("PYRONAME:pyro.viewer") 

viewer.initialized() 
bolsa = viewer.start()

while(bolsa != ""):
    print(bolsa)
    bolsa = viewer.start()

    time.sleep(1)

