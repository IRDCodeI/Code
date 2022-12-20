import Pyro4

@Pyro4.expose

class Almacen(object):
    def __init__(self):
        self.contents = ["silla", "auto", "mesa", "laptop", "tv"]
        
    def listado(self):
        print(self.contents)
        return self.contents
    
    def tomar(self,name,item):
        self.contents.remove(item)
        print("{0} Tomó el elemento {1}".format(name,item))
        
    def guardar(self,name,item):
        self.contents.append(item)
        print("{0} Guardó el elemento {1}".format(name,item))
        
    
daemon = Pyro4.Daemon()
ns = Pyro4.locateNS()
uri = daemon.register(Almacen)
ns.register("pyro.almacen", uri)
print("Listo")

#print("Listo, uri = ", uri)

daemon.requestLoop()