# >> Ejercicio 6

y = c(1.66, 1.12, 0.83, 0.62, 0.51, 0.47) # Distancia Promedio
x = c(9, 11, 16, 21, 27, 30) # Numero de Instalaciones

# a) Diagrama de dispercion, distancia promedio variable
#   dependiente.

plot(x,y)

# b) Un modelo lineal es apropiado?

reg = lm(y~x)
summary(reg)

plot(reg)

#   > No es apropiado debido a que graficamente se aprecia una curvatura
#     en la relacion de los datos
#   > Ademas en la comprobacion de supociones del modelo tenemos una curva
#     por lo que se entiende que el modelo es el mejor para los datos.

# c) Obtener ecuacion estimada de regresion que mejor
# explique la relacion entre las dos variables

x2 = x^2
reg2 = lm(y~x+x2)
summary(reg2)

plot(reg2)

yEstimada = reg2$coefficients[1] + reg2$coefficients[2] * x + reg2$coefficients[3] * x^2

# >> Ejercicio 7

x = c(167,159,126,108,153,123,118,123,119) # Angulo de Vision
y = c(86,82,81,81,81,81,80,80,80) # Evaluacion

# a) Diagrama de dispersion variable independiente vision

plot(x,y)

# b) Un modelo lineal es apropiado?

reg = lm(y~x)
summary(reg)

plot(reg)

#   > No es apropiado debido a que graficamente se aprecia una curvaturas
#     en la relacion de los datos
#   > Ademas en la comprobacion de supociones del modelo tenemos una curva
#     por lo que se entiende que el modelo es el mejor para los datos.

# c) Obtener ecuacion estimada de regresion que mejor
# explique la relacion entre las dos variables

x2 = x^2
x3 = x^3
reg2 = lm(y~x+x2+x3)
summary(reg2)

plot(reg2)

yEstimada = reg2$coefficients[1] + reg2$coefficients[2] * x + reg2$coefficients[3] * x^2 + reg2$coefficients[4] * x^3

