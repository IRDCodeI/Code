#*-----------------------------------
#* --- Operandores y Expresiones ---
#*-----------------------------------

#Operadores y Operandos forman una expresion ya sea aritmetica
#cuyos datos son literalres (2 * 2) o algebraicas donde se incorpora una variable
# dando un resultado variable (var + 1)

#? Operador logico
#Representa expresion racional true o false

1 + 1 == 2

#? Operadores relacionales
#Compara deos valores y dependiendo del resultado devuleve true o false
#   TRUE = 1
#   FALSE = 0 
3 == 2
3 != 2
3 > 2
3 < 2
3 <= 4
3 >= 4

a = 10
b = 5 

a > b # true
a != b #true
a == b*2 # true

"Hola" == "Hola" #true

c = "Hola"
c[0] == "H" #true

la = [0, 1, 2]
lb = [2, 3 ,4]

la == lb #false
la[-1] == lb[0] #true

True > False #true

#? Operadores Logicos
# Se usan para agrupar, excluir y negar expresiones
#   > Not
#   > And
#   > Or

#Not (Negacion Logica).- Niega valor o expresion

not True # --> False
not True == False #True

#And (Conjuncion logica).- Devuelve verdadero solo si se cumplen todas las condiciones

True and True #True
True and False #False
False and False #False

clA = 45
clA > 10 and clA < 20 #False

clB = 'Hola Mundo'
len(clB) >= 20 and clB[0] == "H" #False

#Or (Disyuncion logica).- Devuelve verdadero si se cumple como minimo una condicion

True or True #True
True or False #True
False or False #False

c = "OTRA COSA"
c == "EXIT" or c == "FIN" or c == "SALIR" #False

#? Expresiones Anidadas
#Se emplean reglas de precedencia
#   > Parentencis de prioridad
#   > Expresiones aritmeticas con reglas
#   > Expresiones relaciones
#   > Expresiones logicas

eaA = 10
eaB = 5

eaA * eaB - 2**eaB and not (eaA % eaB) != 0 #False

#? Operadores de asignacion
#Actua sobre la variable actual modificando el valor

#Suma en asignacion

a = 5
a += 5 # 10

#Resta en asignacion

a = 5
a -= 10 #-5

#Producto en asignacion

a = 5 
a /= 2 # 2.5

#Modulo en asignacion

a = 5
a %= 2 # 1

#Potencia en asignacion
a = 5
a **= 3 # 125

