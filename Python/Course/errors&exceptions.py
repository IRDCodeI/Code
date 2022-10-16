#------------------------------
#   Errores y Excepciones
#------------------------------

#Detectar errores de sintaxis o de logica para tratarlos y prevenirlos
#   > Capturar errores
#   > Crear excepciones

#? --- Errores ---
# Errores detienen la ejecucion del programa

#*   > Errores de sintaxis
#   "SyntaxError".- Cuando se escribe mal

#print("Hola" 

    # File "<ipython-input-1-8bc9f5174855>", line 1
    #     print("Hola"
    #                 ^
    # SyntaxError: unexpected EOF while parsing

#*  > Errores de nombre
#  "NameError".- Cuando se interpreta que se debe ejecutar algo pero no esta definido 

#pint("Hola")

    # <ipython-input-2-155163d628c2> in <module>()
    # ----> 1 pint("Hola")

    # NameError: name 'pint' is not defined

#*  > Errores semanticos
#   Van ligados con el sentido del funcionamiento y depende de la situacion aveces ocurren otras no
#       > A base de prueba y error o experiencia se solventa

#   -- pop() con lista vacia .- Fallo que se da cuando se intenta quitar elementos cuando ya esta vacio
#                           pero sucede en la ejecucion por lo que no se detecta en codificacion

# l = []
# l.pop()

    # <ipython-input-6-9e6f3717293a> in <module>()
    # ----> 1 l.pop()

    # IndexError: pop from empty list

#? Para evitar error se deberia comprobar que la lista tenga minimo de elementos antes de sacar

l = []

if len(l) > 0:
    l.pop()

#   -- lectura cadena y operacion sin conversion.- Cuando se trata de operar una cadena con
#                           otros numeros "TypeError"

# n = input("Introduce un número: ")

# print("{}/{} = {}".format(n,m,n/m))

# Introduce un número: 4

# ---------------------------------------------------------------------------
# TypeError                                 Traceback (most recent call last)
# <ipython-input-12-85bb893ab3e3> in <module>()
# ----> 1 print("{}/{} = {}".format(n,m,n/m))

# TypeError: unsupported operand type(s) for /: 'str' and 'int'

#? Para prevernir se usa una transformacion o parse de datos

# n = float(input("Introduce un número: "))
# m = 4
# print("{}/{} = {}".format(n,m,n/m))

#* Tambien se pueden ingresar cadenas, pero podemos usar excepciones

#? --- Excepciones ---
# Bloques de codigo que permiten continuar con la ejecucion del programa aun si ocurre un error

#   > Bloques try - except.- Debemos colocar el codigo propenso a errores en un bloque "try"
#       luego encadenar "except" para tratar la excepcion o fallo
#       >> Permite tratar errores y mostrar un msj o ejecutar codigo alternativo

#* Se puede aprovechar excepciones para forzar la introduccion correcta con while

#   > Bloque else .- Se encadena despues del except para comprobar si todo funciona bien
#                   no se ejecute la excepcon

#   > Bloque finally .- Se ejecuta al final del codigo, ocurra o no error

while(True):
    try:
        n = float(input("Introduce un número: "))
        m = 4
        print("{}/{} = {}".format(n,m,n/m))
    except:
        print("Ha ocurrido un error, introduce bien el número")
    else:
        print("Todo ha funcionado correctamente")
        break  # Importante romper la iteración si todo ha salido bien / buen momento para break
    finally:
        print('Fin de Iteracion') #Siempre se ejecuta

#?  Excepccion multiple
# Pueden ocurrir varios errores disintos, por lo que quizas queramos actuar de forma difentes
# para cada caso, para esto:
#   > Asignamos una excepcion a una variable
#   > Cada error tiene identificador unico que corresponde a tipo de dato

# try:
#     n = input('Introduce numero') # no transforma a numero
#     5 / n
# except Exception as e: #guardamos excepcion en variable
#     print('Error => ', type(e).__name__)

# Se puede conseguir el tipo (clase) de variable o valor literar y podemos motrarlo consultando
# la propedad especial name
print(type(1))  # <class 'int'>
print(type(3.14).__name__)
print(type([]))
print(type(()))
print(type({}))

#* Gracias a indentificador de errores podemos crear multiples comprobaciones, dejando siempre al 
#* ultimo la Excepcion por defecto que engloba cualquier error

try:
    n = float(input("Introduce un número divisor: "))
    5/n
except TypeError:
    print("No se puede dividir el número entre una cadena")
except ValueError:
    print("Debes introducir una cadena que sea un número")
except ZeroDivisionError:
    print("No se puede dividir por cero, prueba otro número")
except Exception as e:
    print("Ha ocurrido un error no previsto", type(e).__name__ )

#? Invocacion de excepciones
# Aveces no intera llamar a un error, debido a que print no es elegante

#   > Intruccion raise.- permite lanzar un error manual pasando el identificador, y luego 
#                   agregando un except para tratar la excepcion

def mi_funcion(algo = None):
    try:
        if algo is None:
            raise ValueError('Error! No se permite valor nulo')
    except ValueError:
        print('Error No se permite valor nulo (desade la excepcion)')

mi_funcion()