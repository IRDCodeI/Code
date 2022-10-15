#---------------------------------
#   Entradas y salidas de datos
#---------------------------------

# Formas de capturar informacion desde el exterior (entrada) y visualizacion de datos (salida)
#   > Entrada: Froma de capturar datos
#   > Salida: Forma de presentar datos

#? Entrada por teclado
# Input().- Forma de leer una cadena por teclado.
#   > Se debe transformar valor a numerico

decimal = float( input("Introduce un número decimal con punto: ") )

#* Leer varios valores por mediode almacenar datos en una lista para manipularlos en grupo

valores = []
print('Introduce 3 valores')

for x in range(3):
    valores.append(input('Valor: '))

print (valores)

#? Entradas por script
# Programas se basan en escribir instruccion en ficheros (script) y luego se envia
# dicho script al interprete para ejecutar el bloque de instrucciones definidos
#   > Scripts pueden recibir datos desde terminal 
#   > Crear y ejecutar scripts se puede hacer con anaconda/spyder

print('Hola, este es un script')

# -- Scripts con argumentos --
# Para envio de informacion y manejo por scripts se usa libreria "sys"
#   > Incluye lista argv que almacena argumentos enviados al script
#       >> Devuelve lista con el nombre del script(sys.argv[0]) y los valores que se ingrese al ejecutar
#           >>> Cada valor es un argumento y es una forma alternativa a input()

import sys
print(sys.argv)

# Comprobación de seguridad, ejecutar sólo si se reciben 2 argumentos reales
if len(sys.argv) == 3:
    texto = sys.argv[1]
    repeticiones = int(sys.argv[2])
    for r in range(repeticiones):
        print(texto)
else:
    print("Error - Introduce los argumentos correctamente")
    print('Ejemplo: escribir_lineas.py "Texto" 5')

#*  --> python fichero.py "Hola Mundo!!!" 5 

#? Salida por pantalla
#print() es la forma general de mostrar informadcion, donde se muestra texto y variables separadas por comas

v = "otro texto"
n = 10

print("Un texto",v,"y un número",n)

#format().- Funcion de cadenas que permite formatear informacion usando identificadores referenciados
#       > Se usa con variables o valores literales (2)

c = "Un texto '{}' y un numero '{}'".format(v,n)
print(c) #Un texto 'otro texto' y un número '10'

#   -- Referencia desde posicion de valores

print( "Un texto '{1}' y un numero '{0}'".format(v,n))

#   -- Usando identificador con clave

print( "un texto '{a}' y un numero '{b}'".format(b=n, a=v))

# Formateo avanzado
#   - Alineacion a la drecha

print( "{:>30}".format("palabra"))

#   - Alineacion a la izquierda (espacios en blanco derecha)

print( "{:30}".format("palabra"))

#   - Alineacion al centro

print( "{:^30}".format("palabra"))

#   - Truncamiento a 3 caracteres

print("{:.3}".format("palabra"))

#   - Alinamiento derecha con truncamiento

print( "{:>30.3}".format("palabra") )  

#   - Formateo numero enteros, con espacios

print("{:4d}".format(10))
print("{:4d}".format(100))
print("{:4d}".format(1000))

#   - Enteros rellado con ceros

print("{:04d}".format(10))
print("{:04d}".format(100))
print("{:04d}".format(1000))

#   - Numeros flotantes con espacios

print("{:7.3f}".format(3.1415926))
print("{:7.3f}".format(153.21))

#   - Numeros flotantes con ceros

print("{:07.3f}".format(3.1415926))
print("{:07.3f}".format(153.21))

#Format simplificado
# Permite concatenar variables y cadenas sin uar format()
#   > Se indica f antes de la cadena y sustituir variables por nombre

nombre = "Héctor"
texto = f"Hola {nombre}"
print(texto) # Hola Héctor