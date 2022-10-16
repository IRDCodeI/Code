#-------------------------------------
#               Funciones
#-------------------------------------

#Fragmentos de codigo que se pueden ejecutar varias veces, ademas reciben y devuelve 
# informacion para comunicarse con el proceso principal
#   > Agrupacion de codigo comun
#   > Nombre unico que las identifica
#*  "Hola" -> len() -> 4 "Valor de retorno"

#? --- Definicion y llamada ---

# Se define con palabra def, nombre de funcion y parentesis (tambien se usan para llamarlas)

#Definicion
from inspect import ArgSpec
from unittest import result


def saludar():
    print('Hola, desde una funcion');

#Llamada
saludar()

#   > Variables y sentencia de control en funcion

def tabla_5():
    for i in range(10):
        print(f"5 * {i} = {i * 5}")

tabla_5()

#   > Ambito de variables.- Es cuando una variable declarada en un funcion no existen
#                           en la funcion principal

#       > Variable declara fuera de la funcion si es accesible desde la funcion
#       > Se puede acceder a un variable antes de la ejecucion

# def test():
#     n = 10

# test()
# print(n)  --> Error n no definida

def test():
    print(m)

m = 10 

test()

# Se puede declarar de nuevo una variable en la funcion esta sera una copia 
#*  No se podra modificar la variable externa dentro de la funcion

def test2():
    o = 5
    print(o)    # Variable solo de la funcion

o = 10  # Variable externa no modificable
test2()
print(o)

#   > Instruccion global.- Permite modificar una variable externa en la funcion 
#                       solo si indicamos que es global

def test3():
    global o     # Variable que referencia a la externa
    o = 5
    print(o)

o = 10  
test3()
print(o)

#? --- Retorno de valores ---
#Comunicacion con el exterior, funciones devuelven valores al proceso principal con "return"
#   > Valores retornados se devuelven como valores literales directos del tipo de dato retornado
#   > Se puede devolver cualquier tipo de coleccion y manejarla
#   > Se puede asignar el valor retornado 

def test4():
    return "Cadena retornada"

test4() # Valor literar --> Cadena o String

#print(test() + 10) --> Error no se puede sumar cadena con numero

def test5():
    return [1, 2, 3, 4, 5]

print(test5())
print(test5()[-1])
print(test5()[1:4])

lista = test5()

# > Retorno Multiple
# Se puede devolver multiples valores separados por comas
#   > Son tratados en conjunto como tupla inmutable y pueden ser asignadas a distantas variables
  
def test6():
    return 'Cadena', 20, [1, 2, 3]

print(test6())

cadena, numero, lista = test6()

print(cadena, numero, lista)

#? --- Envio de valores ---
# Fuinciones pueden recibir informacion

def suma(a, b): #valores que recibe
    return a + b

resultado = suma(2 ,5)
print(resultado)

#? --- Argumentos y parametros ---
# En definicion de funcion valores recibidos son "parametros" y durante la llamada 
# de una funcion valores recibidos son "argumentos"

#   > Argumentos por posicion.- Cuando se reciben argumentos en orden definido 
#                               en los parametros

def resta(a, b):
    return a - b

resta(30, 10)  # argumento 30 => posición 0 => parámetro a
               # argumento 10 => posición 1 => parámetro b

#   > Argumentos por nombre.- Se puede evadir el orden cuando se indica el valor de 
#                           cada parametro apartir de su nombre

resta(b=30, a=10) # -20

#   > Llamada sin argumentos.- Cuando funcion tiene parametros y si no se envia
#                           causa un error

#? resta() -> Error

#   > Parametros por defecto.- Valores por defecto nulos a parametros permite realizar
#                           comprobacion antes de ejecutar el codigo 

def resta(a=None, b=None): 
    if a == None or b ==None:
        print('Error, funcion necesita dos parametros')
        return # --> Se indica que no devuelve nada
    return a -b

resta()

#? --- Paso por valor y referencia
# Se diferencia el comportamiento en base al tipo de dato enviado
#   > Paso por valor.- Crea una copia local de la variable en la funcion
#   > Paso por referencia.- Se maneja la variable directamente, y cambio realizado afectaran a fuera

#*  > Tipos simples se pasan por valor: Enteros, flotantes, cadenas, logicos, ...
#*  > Tipos compuestos se pasan por referencia: Lista, diccionarios, conjuntos, ...

# Paso por Valor.- Crea una copia dentro de la funcion sin afectar afuera
#               Se aplica a numeros, cadena, ...

def doblar_valor(numero):
    return numero * 2

n = 10
doblar_valor(n)
print(n)    # 10 --> No modifico el valor de fuera de la funcion

#* Se puede modificar devolviendo el valor modificado y reasignandolo

n = doblar_valor(n)
print(n)

# Paso por Referencia.- Si se modifica dentro de la funcion tambien se modifica afuera
#                       Se aplica a datos compuestos, colecciones, listas, etc
def doblar_valores(numeros):
    for i, n in enumerate(numeros):
        numeros[i] *= 2

ns = [10, 50, 100]
doblar_valores(ns)
print(ns) # [20, 100, 200]

#* Se puede evitar la modificacion enviando una copia

doblar_valores(ns[:])    #Copia de la lista
print(ns)

#? --- Argumentos indeterminados ---
# Se aplica cuando no se sabe cuantos elementos se van a enviar a la funcion, por lo que
# aplica argumentos indeterminados por posicion o nombre

#   > Por posicion.-  Para recibir parametros por posicion se debe crear una lista dinamica
#                   de argumentos (tupla) definido con asterisco

def indeterminados_posicion(*args):
    for arg in args:
        print(arg)

indeterminados_posicion(5, 'Hola', [1, 2, 3])

#   > Por nombre.- Para recibir parametros por nombre (keyword args), se crea un diccionario
#                   dinamico con asteriscos

def indeterminados_nombre(**kwargs):
    for kwarg in kwargs:
        print(kwarg, '=>', kwargs[kwarg])

indeterminados_nombre(n = 5, c = "Hola", l = [1, 2, 3, 4])

#   > Por posicion y nombre.- Para ambos tipo de parametros se debe crear colecciones dinamicas
#                           primero por valor y luego por clave-valor

def super_funcion(*args, **kwargs):
    total = 0
    for arg in args:
        total += arg
    print('Sumatorio =>', total)

    for kwarg in kwargs:
        print(kwarg, '=>', kwargs[kwarg])

super_funcion(10, 50, -1, 1.56, 10, 20, 300, nombre="Hector", edad=27)

#* Se puede usar diferentes nombre de args y kwargs, pero es buena practica

#?  --- Funciones recursivas ---
# Funciones que se llaman a si misma durante ejecucion
#   > Similar a iteraciones, pero planificamos el moemento cuando dejar de llamarse a si misma
#   > Se usan para dividir una tarea en subtareas mas simple 

#   > Ejemplo sin retorno.- Cuenta regresiva hasta 0

def cuenta_atras(num):
    num -= 1
    if num > 0:
        print(num)
        cuenta_atras(num)
    else:
        print('Boooom!')
    print('Fin de funcion', num)

cuenta_atras(5)

#   > Ejemplo con retorno.- Factorial de numero "producto de todos los numero desde 1 hasta n"

def factorial(num):
    print('Valor inicial ->', num) # -----
    if num > 1:
        num = num * factorial(num-1)
    print('Valor final ->', num)
    return num

print(factorial(5))

#? --- Funciones Integradas ---
# Libreria estandar de python, posee funciones que permite hacer converiones entre tipos, matematicas
# , utilidades, ...

#int() .- Transforma cadena a entero

n = int('10')
print(n)

#float() .- Transforma de cadena a flotante

f = float('10.5')
print(f)

#str() .- Tranforma cualquier valor a cadena

c = 'Un texto y dos numeros' + str(10) + 'y' + str(3.14)
print(c)

#bin() .- Conversion de entero a binario

print(bin(10))

#hex() .- Conversion de enero a hexadecimal

print(hex(10))

#int(numero, base) .- reconversion de entero (base 10)

print(int('0b1010', 2))

#abs() .- Valor absoluto de nuemero (distancia)

print(abs(-10))

#round() .- Redondea flotante a entero, menor dee .5 baja y mayor sube
print(round(5.5))

#eval() .-  Evalua cadena como una expresion, acepta variable si se definio anteriormente
print(eval(' 2 + 5'))

n = 10
print(eval('n * 10 - 5'))

#len() .- Devuelve longitud de coleccion o cadena

print(len('Una cadena'))

#help() .- Invoca menu de ayuda de interprete

help()
