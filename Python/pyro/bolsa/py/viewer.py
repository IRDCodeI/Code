from stockmarket import Mercado #Importacion de clase

class Viewer:   #Clase
    def __init___ (self): #Constructor
        self.mercado = set() # Atributo con aspecto iterable "set()"
        self.symbols = set() # Atributo con aspecto iterable "set()"

    def start(self): # Metodo
        print("Mostrar acciones:", self.symbols)
        acciones_fuentes = { # Diccionario de mercados
            # Clave y valor de un lista obtenida por yield en mercado
            mercado.name: mercado.acciones() for mercado in self.mercado 
        }

        while True:
            # Retorno de clave y valor del direccionario con items()
            for mercado, acciones_fuente in acciones_fuentes.items():
                # iterador en el diccionario "next()"
                accion = next(acciones_fuente)
                symbols, value = accion

                # Determina si elemento esta tanto en el objeto como en el visor
                if symbols in self.symbols:
                    print("{0}, {1}, {2}".format(mercado, symbols, value))

def main():
    # Creacion de objeto Mercadp con constructor
    nasdaq = Mercado("NASDAQ", ["APPL", "CSCO", "MSFT", "GOOG"])
    newyork = Mercado("NYSE", ["IBM", "HPQ", "BP"])

    # Creacion de objeto viewer y asignacion de iterables
    visor = Viewer()
    visor.mercado = {nasdaq, newyork}
    visor.symbols = {"IBM","APPL","MSFT","CSCO","GOOG"}

    visor.start()

if __name__ == "__main__":
    main()