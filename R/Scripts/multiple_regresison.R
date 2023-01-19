# >> Comprobacion de Resultados
#Integrantes: Pillajo Stalin, Mendoza Michale, Angulo Erick, Yaranga Jesus

# Datos
y = c(9.3,4.8,8.9,6.5,4.2,6.2,7.4,6.0,7.6,6.1) # Tiempo recorrido
x1 = c(100,50,100,100,50,80,75,65,90,90) # Millas recorridas
x2 = c(4,3,4,2,2,2,3,4,3,2) # Cantidad de entregas

#--------------------------------
# Ecuacion: b = (xT*X)^-1 * xT*Y
#--------------------------------

# Creacion de matriz X "Variables Independiente e Intercepto"
# X = (1,100,4)
#     (1,50,3)
#     (...)
X = cbind(matrix(1,10,1),x1,x2) # --> Matriz X (matrix de unos con 10 columnas y una fila)
X

Xt = t(X) # --> Transpuesta de la Matriz X (Cambio de Filas por Columnas)
Xt

X = Xt %*% X # --> Producto Matricial x-transpueta * x
Y = Xt %*% y # --> Producto Matricial x-transpuesta * y
X
Y

X = solve(X) # --> Inversa de matriz X (Determinante de X)
X

b = X %*% Y # --> Coeficientes de Regresion (Producto Matricial)
b

#R: Se concluye que los coeficientes de regresion obtenidos por medio de 
# la formula matricial son exactamente los mismos propuestos en el ejercicio 
# de la diapositiva realizado en "R"