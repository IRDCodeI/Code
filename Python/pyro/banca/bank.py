import random as rd
import Pyro4

from clients import Client

@Pyro4.expose
class Bank(object):

    def __init__(self):
        self.clients = set()

    def withdraw(self, account, mount):
        for e in self.clients:
            if e.account == account:
                e.credit = e.credit - mount

        return(f"Account: {account} remove {mount}$")

    def deposit(self, account, mount):
        for e in self.clients:
            if e.account == account:
                e.credit = e.credit + mount
        
        return(f"Account: {account} add {mount}$")

    def transfer(self, account, account_b, mount):
        for e in self.clients:
            if e.account == account:
                e.credit = e.credit - mount
            if e.account == account_b:
                e.credit = e.credit + mount

        return(f"Account: {account} transfer to {account_b} mount of {mount}")

    def list_clients(self):
        for e in self.clients:
            yield(f"Account: {e.account} - Credit: {e.credit}")

    def add_user(self, client, credit):
        c = Client(client, credit)
        self.clients.add(c)
        return(f"User {client} added!")
       
    def view_user(self, account):
        for e in self.clients:
            if(e.account == account):
                return (f"Account: {e.account} - Credits: {e.credit}")

daemon = Pyro4.Daemon()
ns = Pyro4.locateNS()

uri = daemon.register(Bank)
ns.register("pyro.bank", uri)

print("Wait for requests")
daemon.requestLoop()