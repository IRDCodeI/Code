import time
import Pyro4

viewer = Pyro4.Proxy("PYRONAME:pyro.viewer")

viewer.create()

bolsa = viewer.start()

while(bolsa != ""):
    bolsa = viewer.start()
    print(bolsa)

    time.sleep(1)

