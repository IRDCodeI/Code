#Coleccion de Datos

#?Tuplas: Parecido a listas pero inmutables

tupla = (100, 'Hola', [1, 2, 3], -50)
print(tupla)

# --- Indexacion y slicing

print(tupla[-1])
print(tupla[2:])
print(tupla[2][-1])

#tupla[0] = 50 --> No es mutable "No se puede cambiar"

print(len(tupla))

#-- Metodos Integrados
#index(): busca un elemento y devuelve la posicion

tupla.index('Hola')
#count(): cuenta cuantas veces aparece un elemento
tupla.count(100)

#?Conjuntos.- Coleccion desordenadas de elementos unicos "Pertenencia a grupos o
#? eliminacion de elementos repetidos"
#?  > Se usa set()
#?  > Tambien se define con llaves

conjunto = set()

conjunto2 = {1, 2, 3}

#add().- Permite agregar elementos, pero si uno ya se encuentra no lo agregara
conjunto2.add(4)
print(conjunto2)

#Collecion desordenadas.- Se gestiona automaticamente la posicion de los elementos,
# en lugar de conservarlos en la posicion que nosotros agregamos

conjunto.add('H')
conjunto.add('A')
conjunto.add('Z')

print(conjunto)  # {'A', 'H', 'Z'}

#Peternencia a grupos.- se usa la sintaxis "in"

grupo = {'Hector', 'Juan', ' Mario'}

print('Hector' in grupo)

#Elementos unicos.- Conjunto no pueden tener el mismo elemento

test = {'Hector','Hector','Hector'}
print(test) # {Hector}

#Conversiones con listas.- Se puede transformar de listas a conjuntos

lista = [1, 2, 3, 3, 2, 1]

lista = list(set(lista))

print(lista)

#Conversion con cadenas.- Crea conjunto de caracteres pero sin duplicados

cadena = "Al pan pan y al vino vino"
print(set(cadena)) #{' ', 'A', 'a', 'i', 'l', 'n', 'o', 'p', 'v', 'y'}


#?Diccionarios.- Estructura mapeada donde cada elemento esta identificado con una clave unica
#?              por lo que no hay dos claves iguales (Arreglo Asociativo)
#?      > Se define con llaves
#?      > Cada elemento tiene clave:valor
#?      > Para consultar se usa clave a modo de indice
#?      > Se puede usar numeros como claves pero son confusas
#?      > Se puede trabajar directamente con los registros como variables

vacio = {}
type(vacio) #dict --> Clase para definir diccionarios

#Definicion
#           clave       valor
colores = { 'amarillo': "yellow", 'azul':'blue'}
print(colores['amarillo']) #Consulta de valor

#Mutabilidad.- Son mutable y permite agregar elementos sobre la marcha o sobreescribir el valor
colores['verde'] = 'green'
colores['amarillo'] = 'white'

print(colores)

#del().- Permite borrar un elemento\
del(colores['amarillo'])

numeros = {10:'diez',20:'veinte'}

#Trabajo a manera de variables
edades = {'Hector':27,'Juan':45,'Maria':34}
edades['Hector']+=1
print(edades) # Hector: 28, ...
print(edades['Juan'] + edades['Maria'])

#Lectura secuencial.- se puede usar for para recorrer elementos

for edad in edades:
    print(edad) #DEVUELVE CLAVES

for clave in edades:
    print(clave,edades[clave])

#items().- facilita la lectura en clave y valor de elementos, devuelve valores en cada iteracion

for clave, valor in edades.items():
    print(clave, valor)

#Lista de diccionarios.- Estructura avazada mezclando coleccion, donde diccionarios se encargan
# de manejar propiedades de registros, lista permite manejar todo en conjunto

personajes = []

gandalf = {'Nombre':'Gandalf','Clase':'Mago','Raza':'Humano'}
legolas = {'Nombre':'Legolas','Clase':'Arquero','Raza':'Elfo'}
gimli = {'Nombre':'Gimli','Clase':'Guerrero','Raza':'Enano'}

personajes.append(gandalf)
personajes.append(legolas)
personajes.append(gimli)

print(personajes)

#Se puede recorreer cada dict y mostrar sus registros con un form

for personaje in personajes:
    print(personaje['Nombre'], personaje['Clase'])

#?Pilas.- Elementos ordenados con dos acciones "Agregar" y "Quitar" elementos
#?      > Ultimo en entrar es el primero en salir (LIFO Last in First Out)

pila = [3, 4, 5]
pila.append(6)
pila.append(7)

print(pila)

#pop().- devuelve el ultimo elemento pero tambien lo borra
numero = pila.pop()
print(numero)

#* Si se saca todo los elmentos, pila estara vacia y dara error ya que no hay mas elementos que sacar

#?Colas.- Colecciones ordenadas con dos acciones "Agregar" y "Quitar"
#?  > Primero en entrar es el primero en salir (FIFO First In First Out)
#?  > Se debe importar manualmente para crear cola

from collections import deque
cola = deque()
print(cola)

#Agregar lista en cola

cola2 = deque(['Hector', 'Juan', 'Maria'])
print(cola2)

#append().- Agregar elementos

cola2.append('Miguel')

#popleft().- Extraer elementos desde la parte izquierda (principio)

print(cola2.popleft())
print(cola2)

#* Asegurarse de almacenar el elemento sacado o se perdera