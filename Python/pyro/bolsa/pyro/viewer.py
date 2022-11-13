import Pyro4    # Modulo para RMC

from stockmarket import Mercado 

#Expone clases para que esten disponibles en
#el acceso remoto
@Pyro4.expose
class Viewer:
    def __init___ (self):
        self.mercado = set()
        self.symbols = set()

    def start(self):
        acciones_fuentes = {
            mercado.name: mercado.acciones() for mercado in self.mercado
        }

        while True:
            for mercado, acciones_fuente in acciones_fuentes.items():
                accion = next(acciones_fuente)
                symbols, value = accion

                if symbols in self.symbols:
                    print("Enviando: " + symbols)
                    return("{0}, {1}, {2}".format(mercado, symbols, value))

    def initialized(self):  #Metodo para inicializar los mercados
        nasdaq = Mercado("NASDAQ", ["APPL", "CSCO", "MSFT", "GOOG"])
        newyork = Mercado("NYSE", ["IBM", "HPQ", "BP"])

        self.mercado = {nasdaq, newyork}
        self.symbols = {"IBM","APPL","MSFT","CSCO","GOOG"}

deamon = Pyro4.Daemon() # Metodo para atender solicitudes entrantes
ns = Pyro4.locateNS()   # Proxy para segumiento de objetos en la red
uri = deamon.register(Viewer) #Registra un objeto bajo un ID (uri) 
ns.register("pyro.viewer", uri) #Asocia un nombre logico con una URI
print("Esperando Solicitudes")

deamon.requestLoop() #Loop para servir peticiones entrantes