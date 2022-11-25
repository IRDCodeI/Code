import random as rd
import Pyro4

from clients import Client

bank = Pyro4.Proxy("PYRONAME:pyro.bank")

client_app = Client(216578945, 0.0)
client1 = Client(int(rd.random()*100000), round((rd.random()*1000),2))
client2 = Client(int(rd.random()*100000), round((rd.random()*1000),2))

bank.add_user(client1.account, client1.credit)
bank.add_user(client2.account, client2.credit)
bank.list_clients()


