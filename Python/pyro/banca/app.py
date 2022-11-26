import random as rd
import Pyro4

from clients import Client

bank = Pyro4.Proxy("PYRONAME:pyro.bank")

# -------------------Clientes-------------------
cliente1 = Client(int(rd.random()*10000000), round((rd.random()*1000),2))
cliente2 = Client(int(rd.random()*10000000), round((rd.random()*1000),2))
client_app = Client(int(rd.random()*10000000), 0.0)

bank.add_user(cliente1.account, cliente1.credit)
bank.add_user(cliente2.account, cliente2.credit)
bank.add_user(client_app.account, client_app.credit)

# ----------------Acciones------------------------
print("Cliente - App")
print("Lista de Clientes: \n")
for c in bank.list_clients():
    print(c)

print("Deposito")
mount = float(input("Ingrese monto: "))
print(bank.deposit(client_app.account, mount))
print("Estado de Cuenta: " + bank.view_user(client_app.account))

print("Transferencia")
account = int(input("Ingrese cuenta: "))
mount = float(input("Ingrese monto: "))
print(bank.transfer(client_app.account, account, mount))

print("Lista de Clientes: \n")
for c in bank.list_clients():
    print(c)

print("Cliente - 2")
print("Estado de Cuenta: " + bank.view_user(cliente2.account))

print("Retiro: ")
mount = float(input("Ingrese monto: "))
print(bank.withdraw(cliente2.account, mount))
print("Estado de Cuenta: " + bank.view_user(cliente2.account))

print("Lista de Clientes: \n")
for c in bank.list_clients():
    print(c)


    





