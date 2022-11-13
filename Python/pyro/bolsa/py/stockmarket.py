import random #Modulo para implementar generador de numeros
import time #Modulo que provee varias funciones relaciones con el tiempo

class Mercado:
    def __init__(self, mercadonombre, symbols): #Constructor de clase
        self.name = mercadonombre # Atributo 1
        self.symbols = symbols # Atributo 2

    def acciones(self): # Metodo de clase
        while True:
            symbols = random.choice(self.symbols) #Retorna elemento aleatorio de una secuencia
            yield symbols, round(random.uniform(5,150),2) #Implementacion de generador para 
                                                        # retornar un elemento de la lista 
                                                        # con un valor aletatorio
            time.sleep(random.random()/2.0)     # Tiempo de espera aleatorio en la ejecucion