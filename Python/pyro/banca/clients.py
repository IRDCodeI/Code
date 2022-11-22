import random as rd
from bank import Bank

class Client:
    
    account = ''
    credit = 0
    
    def __init__(self, account, credit) -> None:
        self.account = account
        self.credit = credit

bank = Bank()

client1 = Client(int(rd.random()*100000), round((rd.random()*1000),2))
client2 = Client(int(rd.random()*100000), round((rd.random()*1000),2))
client3 = Client(int(rd.random()*100000), round((rd.random()*1000),2))

bank.add_clients(client1, client2,client3)

# bank.list_clients()
# bank.deposit(client1.account, 20.00)
# bank.transfer(client1.account, client2.account, 20.00)
# bank.list_clients()
