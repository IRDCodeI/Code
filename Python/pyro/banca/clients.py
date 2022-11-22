import random as rd
import Pyro4

bank = Pyro4.Proxy("PYRONAME:pyro.bank")

class Client:
    
    account = ''
    credit = 0
    
    def __init__(self, account, credit) -> None:
        self.account = account
        self.credit = credit

client1 = Client(int(rd.random()*100000), round((rd.random()*1000),2))
client2 = Client(int(rd.random()*100000), round((rd.random()*1000),2))
client3 = Client(int(rd.random()*100000), round((rd.random()*1000),2))

# bank.deposit(client1.account, 20.00)
# bank.transfer(client1.account, client2.account, 20.00)
# bank.list_clients()
