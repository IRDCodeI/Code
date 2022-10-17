# ---------------------------
#       Herencia POO
# ---------------------------

# Capacidad de una clase de heredar atributos y metodos de otra ademas de agregar
# nuevos o modifcar los heredados.
#   > Relacion de clases padres (superclase) e hijos (subclases)

#? -----------------
#?      Herencia
#? -----------------

# Capacidad que tiene un clase de heredar atributos y metodos de otra, lo cual permite
# reutilizar codigo y tener una codificacion mas optima

#* Ejemplo sin herencia
# Estrucutura de tienda con 3 tipos de productos: adornos, alimentos y libros
#   > Poseen atributos comunes como referencia, nombre, pvp, ...
#   > Poseen atributos especificos de cada tipo

class Producto:
    def __init__(self, referencia, tipo, nombre, pvp, descripcion,
                 productor = None, distribuidor = None, isbn = None, 
                 autor = None) -> None:
        self.referencia = referencia
        self.tipo = tipo
        self.nombre = nombre
        self.pvp = pvp
        self.descripcion = descripcion
        self.productor = productor
        self.distribuidor = distribuidor
        self.isbn = isbn
        self.autor = autor
        
adorno = Producto('000A','ADORNO','Vaso Adornado',15,
                  'Vaso de porcelana con dibujos') 
print(adorno)
print(adorno.tipo)

#* Superclases
# Herencia se trata de identificar una clase base (superclase) con los atributos comunes
# luego crear las demas clases heredando de ella (subclases) extendiendo sus campos
# especificos.

#?  class Producto --> Superclase

class Producto:
    def __init__(self,referencia,nombre,pvp,descripcion):
        self.referencia = referencia
        self.nombre = nombre
        self.pvp = pvp
        self.descripcion = descripcion

    def __str__(self):
        return f"REFERENCIA\t {self.referencia}\n" \
               f"NOMBRE\t\t {self.nombre}\n" \
               f"PVP\t\t {self.pvp}\n" \
               f"DESCRIPCIÓN\t {self.descripcion}\n"
               
#* Subclase
#Para heredar solo se debe pasar entre parentesis la clase durante la definicion
#   > Permite usar comportamiento de superclase sin definir nada
#   > Se puede definir mas atributos

class Adorno(Producto):
    pass

adorno = Adorno(2034, "Vaso adornado", 15, "Vaso de porcelana")
print(adorno)

#-------------------------------------------------------------------

class Alimento(Producto):
    productor = ""
    distribuidor = ""

    def __str__(self):
        return f"REFERENCIA\t {self.referencia}\n" \
               f"NOMBRE\t\t {self.nombre}\n" \
               f"PVP\t\t {self.pvp}\n" \
               f"DESCRIPCIÓN\t {self.descripcion}\n" \
               f"PRODUCTOR\t\t {self.productor}\n" \
               f"DISTRIBUIDOR\t\t {self.distribuidor}\n"


class Libro(Producto):
    isbn = ""
    autor = ""

    def __str__(self):
        return f"REFERENCIA\t {self.referencia}\n" \
               f"NOMBRE\t\t {self.nombre}\n" \
               f"PVP\t\t {self.pvp}\n" \
               f"DESCRIPCIÓN\t {self.descripcion}\n" \
               f"ISBN\t\t {self.isbn}\n" \
               f"AUTOR\t\t {self.autor}\n"
               
#? Se establece atributos despues de crear objetos

alimento = Alimento(2035, "Botella de Aceite de Oliva", 5, "250 ML")
alimento.productor = "La Aceitera"
alimento.distribuidor = "Distribuciones SA"
print(alimento)

libro = Libro(2036, "Cocina Mediterránea",9, "Recetas sanas y buenas")
libro.isbn = "0-123456-78-9"
libro.autor = "Doña Juana"
print(libro)

#* Trabajando en conjunto
#Se pueden manejar objetos de distintas clases masivamente

productos = [adorno, alimento]
productos.append(libro)

print(productos)

# Se pueden recorrer los objetos en un bucle for

for producto in productos:
    print(producto, "\n")
    
# Se pueden acceder a los atributos siempre que sean compartidos o esten en todos los
# objetos

for producto in productos:
    print(producto.referencia, producto.nombre)
    
#?  Si un objeto no tiene un atributo al que se quiere acceder dara error
#?  Pero podemos comprobar dicho atributo con isinstance() para determinar si una instancia
#?  es de una determinada clase 

for producto in productos:
    if( isinstance(producto, Adorno) ):
        print(producto.referencia, producto.nombre)
    elif( isinstance(producto, Alimento) ):
        print(producto.referencia, producto.nombre, producto.productor)
    elif( isinstance(producto, Libro) ):
        print(producto.referencia, producto.nombre, producto.isbn)   

#* Polimorfismo
# Propiedad de la herencia para que objetos de distintas subclases pueden responder a
# una misma accion.
#   > Implicita en python, porque todas las clases son subclases de una comun "Object

def rebajar_producto(producto, rebaja):
    producto.pvp = producto.pvp - (producto.pvp/100 * rebaja)

# No se comprueba si un objeto tiene atributo pvp, solo se intenta acceder 
# Se modifica atributo de objeto dentro de una funcion cambia en la instancia (paso por valor y referencia)

print(alimento, "\n")
rebajar_producto(alimento, 10)
print(alimento)

#? ------------------
#?  Copia de objetos
#? ------------------

# Objetos se pasan a las funciones por referencia, si se modifca dentro tambien se modifca
# fuera
#   > Se crean un acceso al objeto en lugar de uno nuevo con valores diferentes
#       >> Afecta al hacer copias

class Test:
    pass

test1 = Test()
test2 = test1

test1.algo = "Prueba"

print(test2 == test1)  # ¿Son el mismo objeto?

try:
    print(test2.algo)
except Exception as e:
    print(e)
    
#? Para realizar copia a partir de valores se usa la funcion "copy" del modulo

from copy import copy

class Test:
    pass

test1 = Test()
test2 = copy(test1)

test1.algo = 'Prueba'

print(test2 == test1)

try:
    print(test2.algo)
except Exception as e:
    print(e)
    
#? Copy se puede usar en colecciones

lista1 = [1,2,3]
lista2 = copy(lista1)
lista1 = None

print(lista1)
print(lista2)

#? ------------------
#?  Herencia Multiple
#? ------------------

# Capacodad de una subclase para heredar multiples superclases
#   Problema:
#       > Varias superclases tienen los mismos atributos y metodos, y subclase solo podra
#           heredar una de ellas
#           -- Python dara prioridad a la clase mas a la izquierda en la declaracion --

class A:
    def __init__(self):
        print("Soy de clase A")
    def a(self):
        print("Este método lo heredo de A")

class B:
    def __init__(self):
        print("Soy de clase B")
    def b(self):
        print("Este método lo heredo de B")

class C(B,A):
    def c(self):
        print("Este método es de C")


c = C()
c.a()
c.b()
c.c()