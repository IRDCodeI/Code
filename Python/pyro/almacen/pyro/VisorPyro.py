import Pyro4

cliente = Pyro4.Proxy("PYRONAME:pyro.almacen")

#EJECUCION: python -m Pyro4.naming --> tool
#           python server.py
#           python client.py

#CLIENTE 1


print(" Cliente Erick")
print(cliente.listado())

item = input("Ingresar producto: ").strip()
cliente.guardar("Erick ", item)
print("\n",cliente.listado())

item = input("Ingresar producto que quiere retirar: ").strip()
cliente.tomar("Erick ", item)
print("\n",cliente.listado())


#CLIENTE 2
print("\n Cliente Jesus")
print(cliente.listado())

item = input("Ingresar producto: ").strip()
cliente.guardar("Jesus ", item)
print("\n",cliente.listado())

item = input("Ingresar producto que quiere retirar: ").strip()
cliente.tomar("Jesus ", item)
print("\n",cliente.listado())

class Cliente2():
    def __init__(self,nombre):
        self.nombre = nombre
        
    def guardar(self,name,cliente):
        item = input("Ingresar producto: ").strip()
        cliente.guardar(self,name,item)   
    
    def tomar(self,cliente):
        item = input("Ingresar producto que quiere retirar: ").strip()
        cliente.tomar("Jesus ", item)

