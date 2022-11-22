import Pyro4
from clients import Client

bank = Pyro4.Proxy("PYRONAME:pyro.bank")

client_app = Client(216578945, 0.0)

bank.deposit(client_app.account, 100.00)
bank.transfer(client_app.account, )


