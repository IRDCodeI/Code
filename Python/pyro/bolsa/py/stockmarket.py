import random #Modulo para implementar generador de numeros
import time #Modulo que provee varias funciones relaciones con el tiempo

class Mercado(object):
    def __init__(self, mercadonombre, symbols):
        self.name = mercadonombre
        self.symbols = symbols

    def acciones(self):
        while True:
            symbols = random.choice(self.symbols)
            yield symbols, round(random.uniform(5,150),2)
            time.sleep(random.random()/2.0)