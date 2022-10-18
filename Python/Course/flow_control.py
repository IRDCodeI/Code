#Control de flujo
# Fortma de entender la sucecion de las instrucciones
#   > Objetivo de manipular informacion
#   > Sentencias de control: Condicionales (Elegir), Iterativas(Repetir)

#? Condiciones
# Permite dividir el flujo del programa en diferentes caminos


# Sentencia if.- Se ejecuta cuendo la expresion devuelva True

if True: # if not False
    print('Condicion cumplida')
    print('Tambien se muestra este texto')

#Encadenado

a = 5

if a == 2:
    print("a vale 2")
if a == 5:
    print("a vale 5")

#if dentro de if

a = 5
b = 10
if a == 5:
    print("a vale",a)
    if b == 10:
        print("y b vale",b)

#if con expresiones

if a==5 and b == 10:
    print("a vale 5 y b vale 10")

#else.- encadena a un if para comprobar el caso contrario (condicion no cumplida)

n = 11

if n % 2 == 0:
    print(n,"es un número par")
else:
    print(n,"es un número impar")

#elif.- encadena un elif para comprobar multiples condiciones (siempre que anteriores
# node se ejecuten)

comando = "OTRA COSA"

if comando == "ENTRAR":
    print("Bienvenido al sistema")
elif comando == "SALUDAR":
    print("Hola, espero que te lo estés pasando bien aprendiendo Python")
elif comando == "SALIR":
    print("Saliendo del sistema...")
else:
    print("Este comando no se reconoce")

nota = float(input("Introduce una nota: "))

if nota >= 9:
    print("Sobresaliente")
elif nota >= 7:
    print("Notable")
elif nota >= 6:
    print("Bien")
elif nota >= 5:
    print("Suficiente")
else:
    print("Insuficiente")

#Simulacion de elif con solo if

nota = float(input("Introduce una nota: "))

if nota >= 9:
    print("Sobresaliente")
if nota >= 7 and nota < 9:
    print("Notable")
if nota >= 6 and nota < 7:
    print("Bien")
if nota >= 5 and nota < 6:
    print("Suficiente")
if nota < 5:
    print("Insuficiente")

#Instruccion pass.- Como instruccion de paso para usar un bloque
# vacio, no finaliza el codigo (Usada para crear estructuras pendientes
# a programar)

if True:
    pass

#? Iteraciones
# Realizar acciones varias veces

#Sentencia while.- repeti un bloque a partir de evaluar una codicion logica
# siempre que sea True "Programador decide cuando sea False la condicion"

c = 0 
while c <= 5:
    c += 1
    print('c vale', c)

#else en while.- Ejecuta un bloque una vez condicion no sea True

c = 0

while c <= 5:
    c+=1
    print("c vale", c)
else:
    print("Se ha completado toda la iteración y c vale", c)

#Instruccion break.- Rompe la ejecucion en cualquier momento

c = 0

while c <= 5:
    c+=1
    if (c==4):
        print("Rompemos el bucle cuando c vale", c)
        break
    print("c vale",c)
else:
    print("Se ha completado toda la iteración y c vale", c)

#Instruccion continue.- Se usa para saltarse la itreacion actual sin romper bucle

c = 0

while c <= 5:
    c+=1
    if c==3 or c==4:
        # print("Continuamos con la siguiente iteración", c)
        continue
    print("c vale",c)
else:
    print("Se ha completado toda la iteración y c vale", c)

#Sentencia for
#   > for con listas

#While
numeros = [1, 2, 3, 4, 5]
i = 0

while i < len(numeros):
    print(numeros[i])
    i += 1

for num in numeros: # for [index] in [list]
    print(num)

#Asignacion en recorrido

i = 0

for num in numeros:
    numeros[i] *= 10    #[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    i += 1

#enumerate().- devuleve el indece y valor en cada iteracion

for i, num in enumerate(numeros):
    numeros[i] *= 10    # [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

#for en cadenas

cadena = "Hola amigos"

for caracter in cadena:
    print(caracter)

# generaicon de nueva cadena con for

cadena = "Hola amigos"
cadena2 = ""

for caracter in cadena:
    cadena2 += caracter * 2 

#funcion range().- genera lista de numeros que se puede recorrer facilmente, pero 
# sin ocupar memoria "interpreta en ejecucion"
#   > Devuelve generador.- estructura manejada en tiempo de ejecucion

for i in range(10):
    print(i)

range(10) # range(0, 10)

#lista literal con range 
list(range(10));