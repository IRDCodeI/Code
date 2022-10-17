# ---------------------------------------
#    Progrmacion Orientada a Objetos
# ---------------------------------------

# Solucina problemas que identifica entenidades de la realidad 
# y traslada a clases y objetos

#   > Modelo de solucion de problemas
#   > Mas agil, intuitiva, organizable, escalable
#   > Mucho mas organizado y estructurado 
#   > Replicacion en clases y objetos ordenados (atributos y funcion = metodos)

# https://docs.hektorprofe.net/python/programacion-orientada-a-objetos/primer-contacto/

#? -------------------------
#? --- Clases y Objetos ----
#? -------------------------

# Bases de POO son los objetos (nuevo tipo de dato) cuya definicion esta dada por
# una "clase".

#   Clases = Moldes de galletas; Objetos = Galletas.
#       > Cada galleta adquiere atributos individuales despues de horneado (color, textura, ...)
#           llegan a ser distintas

#   Clase es un guion sobre como deben ser los objetos "Modelo a seguir"
#   En python todo son clases y objetos

#* Funcion type() .- Permite saber el tipo de dato

numero = 10 
print(type(numero)) # --> Instancia del tipo "int".- Clase basica de dato para almacenar numeros enteros

def hola():
    pass

print(type(hola)) # --> Instancia del tipo "function"

#? -----------------------------
#? --- Definicion de Clases ----
#? -----------------------------

class Galleta:  # --> Definicion con palabra "class" nombre
    pass    # --> Deja vacio para una posterior programacion

#? -----------------------------
#? --- Instancias de Clases ----
#? -----------------------------

#* Cuando y donde existen objetos:
#   > Objetos existen solo durante ejecucion del programa y se almacenan en memoria
#       >> Objetos no existen en codigo hasta que se ejecuta
#           >>> Crear objetos en memoria es la "instanciacion" y se debe llamar a la clase
#   > Cada instancia tiene su referencia unica en memoria (distinto lugares)
#       >> Clases no tienen referencia ya que solo es un guion de instrucciones
#   > Se puede consultar la clase de un objeto con type() o con atributo class
#   > Clases tienen atributo name que devuelve el nombre en forma de cadena

una_galleta = Galleta() # --> Delcaracion y asginacion de clase a objeto para posterior instancia

print(una_galleta)
print(Galleta)

print(type(una_galleta))
print(una_galleta.__class__)

print(Galleta.__name__)
print(type(una_galleta).__name__)
print(una_galleta.__class__.__name__)

#? -----------------------------
#? --- Atributos y metodos -----
#? -----------------------------

# Podemos definir atributos(variables) y metodos (funciones) en las clases

#* Atributos 
# Son variables que solo existen dentro del objeto

#   - Atributos dinamicos.- Se pueden crear dinamicamente en los objetos

galleta = Galleta()
galleta.sabor = 'salado'
galleta.color = 'marron'

print(f"El sabor de esta galleta es {galleta.sabor}")

#   - Atributos de clase .- Atributos basicos en la calse, de manera que todos los 
#                       objetos puedan tener atributos por defecto
#       > Se puede cambiar el valor en cualquier momento
#       > Se puede consultar el valor por defecto haciendo referencia al atributo en la definicion de la clase
#       > Se puede cambiar el atributo de la clase y haceer que se cree un objeto con dicho valor

class Galleta:
    chocolate = False
    
galleta = Galleta()

if galleta.chocolate:
    print('Galleta con chocolate')
else:
    print('Galleta sin chocolate')
    
# ----------------------------------------

galleta.chocolate = True

if galleta.chocolate:
    print('Galleta con chocolate')
else:
    print('Galleta sin chocolate')
    
print(Galleta.chocolate)

# ----------------------------------------

Galleta.chocolate = True

galleta = Galleta()

if galleta.chocolate:
    print('Galleta con chocolate')
else:
    print('Galleta sin chocolate')

#* Metodos
# Metodos (funciones) permiten definir funcionalidades para llamarlas desde las instancias
#   > Se agrega en la clase y luego se llama desde el objeto con parentesis
#   > Igual que las funciones y permiten definir valores nulos, por posicion, nombre o argumentos indetermiandos

# Metodos de clases y Metodos de instancia ( Se envia con un argumento en el objeto al llamarlo)

class Galleta:
    chocolate = False
    
    def saludar():
        print('Hola, soy una galleta')
        
galleta = Galleta()
#galleta.saludar()   --> No ejecuta ya que se envia un argumento del objeto (M. Instancia)
Galleta.saludar() # --> M.Clase

#* >> Arguemento self.- Cuando se ejecuta un metodo desde un objeto se envia un argumento
#*                  implicito que hace referencia al propio objeto.
#*      > Argumento hace referencia al objeto mismo se llama a "self"
#*          >> self permite acceder atributos
#*      > Instancias deben saber quienes son si no no pueden acceder atributos internos y deben enviarse 
#*          a si mismas en los metodos con "self"

class Galleta:
    chocolate = False
    
    def saludar(soy_el_objeto): # Argumento que representa o referencia al objeto
        print('Hola, soy una galleta')
        print(soy_el_objeto)
        
galleta = Galleta()
galleta.saludar()
print(galleta)

#? Se puede acceder al objeto desde el interior de los metodos con "self"

class Galleta:
    chocolate = False

    def chocolatear(self):  # self hace referencia al objeto
        self.chocolate = True

galleta = Galleta()
galleta.chocolatear()
print(galleta.chocolate)

#? -----------------------------
#? --- Metodos Espciales -------
#? -----------------------------

# Metodos que existen de forma oculta y sirven para teras especificas

#* Constructor
# Metodo que llama automaticamente al crear un objeto, se define con "init"
#   > Construye objetos
#       >> Permite sobreescribir el metodo que crear los objetos, permitiendo 
#           enviar datos desde el principio

class Galleta:
    def __init__(self): # Constructor
        print('Soy una galleta acabade de hornear')
        
galleta = Galleta()

class Galleta:
    def __init__(self, sabor, color) -> None:
        self.sabor = sabor
        self.color = color
        print(f'Galleta con {self.color} y {self.sabor}')
        
galleta_1 = Galleta('marron', 'amarga')

#* Destructor
# Llama a eliminar un objeto y se encarga de la limpieza (vaciar referencia en memoria)
#   este es el metodo del
#   > Permite eliminar objetos de memoria
#   > Metodo espcial.- que permite ser ejecutado como funcion normal

class Galleta:
    def __del__(self):
        print('Galleta borrandose de memoria')
        
galleta = Galleta()
galleta.__del__() # --> Ejecutado con accesores

#del(Galleta) --> Ejecutado como funcion normal

#* String
#Metodo que devuelve la represntacion de un objeto en cadena, puede ser reescrita la funcion
#   > Es llamda automaticamente cuando se imprime variable por pantalla
#   > Devuelve una cadena 

class Galleta:
    def __init__(self, color) -> None:
        self.color = color
    
    def __str__(self) -> str:
        return (f'Soy una galleta {self.color}')
    
galleta = Galleta('Blanca')

print(galleta) # --> Se llama a str automaticamente
print(str(galleta))
print(galleta.__str__())

#* Length
# Metodo que devuelve la longitud ligado a coleccion
#   > Se puede definir en una clase

class Cancion:

    def __init__(self, autor, titulo, duracion):  # en segundos
        self.duracion = duracion

    def __len__(self):
       return self.duracion

cancion = Cancion("Queen", "Don't Stop Me Now", 210)

print(len(cancion))
print(cancion.__len__())
    
#? -----------------------------------
#? --- Objetos dentro de Objetos -----
#? -----------------------------------

# Clases nuevo tipo de dato, se pueden poner en coleeciones o dentro de otras clases

class Pelicula:

    # Constructor de clase
    def __init__(self, titulo, duracion, lanzamiento):
        self.titulo = titulo
        self.duracion = duracion
        self.lanzamiento = lanzamiento
        print('Se ha creado la película:', self.titulo)

    def __str__(self):
        return '{} ({})'.format(self.titulo, self.lanzamiento)


class Catalogo:

    peliculas = []  # Esta lista contendrá objetos de la clase Pelicula

    def __init__(self, peliculas=[]):
        self.peliculas = peliculas

    def agregar(self, p):  # p será un objeto Pelicula
        self.peliculas.append(p)

    def mostrar(self):
        for p in self.peliculas:
            print(p)  # Print toma por defecto str(p)


p = Pelicula("El Padrino", 175, 1972)
c = Catalogo([p])  # Añado una lista con una película desde el principio
c.mostrar()
c.agregar(Pelicula("El Padrino: Parte 2", 202, 1974))  # Añadimos otra
c.mostrar()

#? -----------------------
#? --- Encapsulaicon -----
#? -----------------------

# Consiste en denegar el acceso a los atributos y metodos internos de la clase
# desde el exterior. 
#   > Se simula precediento en atributos y metodos con dos barras bajas __ "Espciales"

class Ejemplo:
    
    __atributo_privado = "Soy inalcanzable desde fuera"
    
    def __metodo_privado(self):
        print("Soy un método inalcanzable desde fuera.")
    
e = Ejemplo()
#print(e.__atributo_privado) --> Error has no attribute ...
#e.__metodo_privado() --> Error has no ...

#? Para acceder a datos privados se deben crear metodos publicos que hagan de interfaz (getters y setters)
#?  Propiedades > Atributos protegidos con interfaces de acceso:

class Ejemplo:
    __atributo_privado = "Soy un atributo inalcanzable desde fuera."

    def __metodo_privado(self):
        print("Soy un método inalcanzable desde fuera.")

    def atributo_publico(self):
        return self.__atributo_privado

    def metodo_publico(self):
        return self.__metodo_privado()

e = Ejemplo()
print(e.atributo_publico())
e.metodo_publico()