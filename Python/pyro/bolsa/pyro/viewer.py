import Pyro4

from stockmarket import Mercado

@Pyro4.expose

class Viewer:
    def __init___ (self):
        self.mercado = set()
        self.symbols = set()

    def start(self):
        print("Mostrar acciones:", self.symbols)
        acciones_fuentes = {
            mercado.name: mercado.acciones() for mercado in self.mercado
        }

        while True:
            for mercado, acciones_fuente in acciones_fuentes.items():
                accion = next(acciones_fuente)
                symbols, value = accion

                if symbols in self.symbols:
                    return("{0}, {1}, {2}".format(mercado, symbols, value))

    def create(self):
        nasdaq = Mercado("NASDAQ", ["APPL", "CSCO", "MSFT", "GOOG"])
        newyork = Mercado("NYSE", ["IBM", "HPQ", "BP"])

        self.mercado = {nasdaq, newyork}
        self.symbols = {"IBM","APPL","MSFT","CSCO","GOOG"}

deamon = Pyro4.Daemon()
ns = Pyro4.locateNS()
uri = deamon.register(Viewer)
ns.register("pyro.viewer", uri)
print("Esperando Solicitudes")

deamon.requestLoop()