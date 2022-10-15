# Datos
# Representacion de informacion: Numeros, Textos, Fechas, Images, ....

#?--------------------------------------
#?------------- Numeros ----------------
#?--------------------------------------

from operator import le


numA = 1
numB = 2

#Suma 
1 + 2

#Resta
1 - 2

#Multiplicacion 
1-2

#Division
1/2

#Modulo
3%2

#Potencia
3 ** 2

#Entero: 1
#Flotante: 323239829389.2383

#* Variable
# Identificador que representa un espacio en memoria
#   > Se le puede asignar un valor
#   > Puede operar con otras variables 
#   > Puede ser reasignado el valor de la variable

n = 3
m = 10
print(n)

print(n + m)

n = m
print(n)

#Reutilizacion: Podemos adaptar valores para realizar comprobaciones

nota_1 = 2
nota_2 = 5
nota_media = (nota_1 + nota_2) / 2

print(nota_media)

#?--------------------------------------
#?-------------- Textos-----------------
#?--------------------------------------

#Definicion de letras o caracteres realizada en comillas simples o dobles

'Hola Mundo'
"Hola Mundo"

'Texto con comillas dobles ""'

#Caracter de escape \ para poner el mismo tipo de comillas

print("Esta \"palbra\" esta entre comillas dobles")

#print() permite mostrar el valor de una cadena u otras variables en pantalla

#Caracteres especiales
#   > \t --> Tabulacion
#   > \n --> Salto de linea 

#para evitar caracteres especiales, se debe indicar que es raw

print(r"C:\nombre\directorio")  # r(cadena) => raw (cruda)

# triple comillas para cadenas multilinea

print("""Una línea
otra línea
otra línea\tuna tabulación""")

#* ---- Operaciones con Texto ----

#Concatenacion
c = 'Hola'
print(c + c)

s = "Una cadena" " compuesta de dos cadenas"
print(s)

# Multiplicacion de cadenas
espaces = " " * 10
print("Aqui hay " + espaces + "espacios")

#* ----- Indices de cadenas --------
#Permiten posicionarse en un caracter especifico
#   > Indice ngativo -1 hace referencia al ultimo, -2 penultimo, ...

word = 'Python'
print(word[0])

#* ----- Slicing de cadenas ------
#Capacidad para que cadena devuelva un subconjuto usando dos indices [inicio: fin]
#   > 1er donde empieza (incluye)
#   > 2do donde acabe (excluye)

print(word[0:2])
print(word[-2:])
print(word[:2] + word[2:])

#* ----- Inmutabilidad ----
#No se puede modificar el contenido, no se puede reasignar un caracter

# palabra[0] = "N" --> Error
# Se puede aplicar slicing para cambiar caracteres
word = "N" + word[1:]
print(word)

# -- Longitud "Funcion"
print(len(word))

#?--------------------------------------
#?-------------- Listas ----------------
#?--------------------------------------

#Dato compuesto de dato el cual almacena distintos valores
#   > Ordenado entre [] y separado por comas

numeros = [1, 2, 3, 4, 5]
print(numeros)

#* --- Indices y Slicing ---

datos = [4, 'Cadena', -15, 3.14, 'Cadena 2']

print(datos[0])
print(datos[-1])
print(datos[2:])

#* --- Suma de listas ---
# Regresa una nueva lista con todos los items

numeros + [5, 6, 7, 8, 9]
print(numeros) # [1, 2 ,3 ,4 ,5, 6, 7, 8, 9]

#* --- Mutabilidad ---
#Se puede modificar los items de los indeices

pares = [0, 2, 4, 5, 8, 10]
pares[3] = 6

print(pares) # [0, 2, 4, 6, 8, 10]

#* --- Funciones ---

#append() --> agrega un item al final de la lista
pares.append(12) # [0, 2, 4, 6, 8, 10, 12]

#slicing en listas: Modifica varios items
letras = ['a','b','c','d','e','f']
letras[:3] = ['A', 'B', 'C']

print(letras) #['A', 'B', 'C', 'd', 'e', 'f']

#Tamanio de lista con funcion len()

print(len(letras))

#Borrado de itemes, asignando una lista vacia

letras = []

#* --- Listas Anidadas ---
#Multiples indices, basado en filas y columnas (matriz)

a = [1,2,3]
b = [4,5,6]
c = [7,8,9]
r = [a,b,c]

print(r) # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(r[0])       # Primera sublista
print(r[-1])      # Última sublista

print(r[0][0])    # Primera sublista, y de ella, primer ítem
print(r[1][1])    # Segunda sublista, y de ella, segundo ítem
print(r[2][2])    # Tercera sublista, y de ella, tercer ítem
print(r[-1][-1])  # Última sublista, y de ella, último ítem

#?--------------------------------------
#?------- Lectura por Teclado ----------
#?--------------------------------------

#Manera de trabajar con datos dinamicos con funcion input()
#   > Siempre se introuduce texto
#       >> Se debe transformar de texto a numero si se desea trabajar con numeros
#       >> Se edebe transformar texto a flotante con float()
valor = int(input('Numero: '))
print(valor) 

