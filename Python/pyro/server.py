import Pyro4

@Pyro4.expose

class Almacen(object):
    def __init__(self):
        self.contents=["silla","auto","mesa","laptop","tv"]

    def listado(self):
        print(self.contents)
        return self.contents

    def tomar(self, name, item):
        self.contents.remove(item)
        print("{0} tomó el elemento {1}".format(name, item))

    def guardar(self,name, item):
        self.contents.append(item)
        print(f"{name} guardo el elemento {item}")

daemon = Pyro4.Daemon()
ns = Pyro4.locateNS()

uri = daemon.register(Almacen)
ns.register("pyro.almacen", uri)
print("Esperando Solicitudes")

daemon.requestLoop()
