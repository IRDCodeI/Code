from stockmarket import Mercado

class Viewer:
    def __init___ (self):
        self.mercado = set()
        self.symbols = set()

    def start(self):
        print("Mostrar acciones:", self.symbols)
        acciones_fuentes = {
            mercado.name: mercado.acciones() for mercado in self.mercado
        }

        while True:
            for mercado, acciones_fuente in acciones_fuentes.items():
                accion = next(acciones_fuente)
                symbols, value = accion

                if symbols in self.symbols:
                    print("{0}, {1}, {2}".format(mercado, symbols, value))

def main():
    nasdaq = Mercado("NASDAQ", ["APPL", "CSCO", "MSFT", "GOOG"])
    newyork = Mercado("NYSE", ["IBM", "HPQ", "BP"])

    visor = Viewer()
    visor.mercado = {nasdaq, newyork}
    visor.symbols = {"IBM","APPL","MSFT","CSCO","GOOG"}

    visor.start()

if __name__ == "__main__":
    main()