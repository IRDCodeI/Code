import Pyro4

almacen = Pyro4.Proxy("PYRONAME:pyro.almacen")

class Cliente:
    def __init__(self, name):
        self.name = name

    def visitar(self, almacen):
        print(f"{self.name} ")
        self.agregar(almacen)
        self.retirar(almacen)

    def agregar(self, almacen):
        print(f"Productos del almacen {almacen.listado()}")
        item = input("Producto agregar: ")
        if item:
            almacen.guardar(self.name,item)

    def retirar(self, almacen):
        print(f"Productos del almacen {almacen.listado()}")
        item = input("Producto retirar: ")
        if item:
            almacen.tomar(self.name,item)

cliente = Cliente("David")
cliente2 = Cliente("Danny")

cliente.visitar(almacen)
cliente2.visitar(almacen)