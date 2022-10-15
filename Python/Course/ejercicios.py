
#*-----------------------------------
#* ------ Ejercicios Seccion 1 ------
#*-----------------------------------

# Tipos de datos

# "Hola Mundo"     --> String
# [1, 10, 100]      --> Lista
# -25              --> Entero
# 1.167             --> Flotante
# ["Hola", "Mundo"]     --> Lista
# ' '    --> String

print(type("Hola Mundo") is str)
print(type([1, 10, 100]) is list)
print(type(-25) is int)

# Media

numero_1 = 9
numero_2 = 3
numero_3 = 6

media = (numero_1 + numero_2 + numero_3) / 3
print("La nota media es", media)

# Matriz

matriz = [ 
    [1, 1, 1, 3],
    [2, 2, 2, 7],
    [3, 3, 3, 9],
    [4, 4, 4, 13]
]

#sum(): devuelve suma de todos los elemento de la lista
matriz[1][3] = sum(matriz[1][:3])
#matriz[3][3] = matriz[3][0] + matriz[3][1] + matriz[3][2]
matriz[3][3] = sum(matriz[3][:3])
print(matriz)

#Registro corrupto

cadena = "zeréP nauJ,01"
#Voltear cadena con un 3 indice en slicing [::-1]

print(cadena[-4::-1], "ha sacado un", cadena[-1:-3:-1], "de nota")
