library(readr)

#1.- Del dataset, escoja las primeras 100 observaciones, elimine la categoría infante 
#de la variable sexo e indique: 1) cuál es la longitud del nuevo dataset y 
#2) de qué posiciones del dataset original eliminó dicha categoría.

abalone <- read_csv("abalone.data", col_names = FALSE)
abalone <- abalone[1:100,]

data_exclude = which("I" == abalone$X1)
data_select = which("M" == abalone) 
data_select = sort(append(data_select, which("F" == abalone)))

data <- abalone[data_select, 1:9]
data$X1 <- ("M" == data$X1)*1 

# Respuesta: 
# 1) > La longitud del dataset despues de la eliminacion de Infante es de 88 observaciones
# 2) > Las posiciones de donde se removieron son [5,6,17,22,43,44,45,46,49,51,59,70]

#2.- Indique la esperanza de cada variable independiente.

reg = glm(data$X1~data$X2+data$X3+data$X4+data$X5+data$X6+data$X7+data$X8+data$X9)

Ex1 = exp(reg$coefficients[1])
Ex2 = exp(reg$coefficients[2])
Ex3 = exp(reg$coefficients[3])
Ex4 = exp(reg$coefficients[4])
Ex5 = exp(reg$coefficients[5])
Ex6 = exp(reg$coefficients[6])
Ex7 = exp(reg$coefficients[7])
Ex8 = exp(reg$coefficients[8])
Ex9 = exp(reg$coefficients[9])

#3.- Indique si existen valores faltantes en alguna variable. Si es así, estos 
#deberán ser completados con la esperanza de dicha variable. De haber valores 
#faltantes, indique la posición en el nuevo dataset de dichos valores.

missing_values = sum(is.na(abalone)*1)

#Repuesta: No existen valores faltantes en las diferentes vairables

#4.- Genere un modelo de regresión que le permita predecir el sexo del animal en 
#función de todas las otras variables. Indique los coeficientes de regresión del 
#modelo (use todos los datos del literal anterior).

y = data$X1
x1 = data$X2
x2 = data$X3
x3 = data$X4
x4 = data$X5
x5 = data$X6
x6 = data$X7
x7 = data$X8
x8 = data$X9

regLogi = glm(y~x1+x2+x3+x4+x5+x6+x7+x8)
summary(regLogi)

b0 = regLogi$coefficients[1]
b1 = regLogi$coefficients[2]
b2 = regLogi$coefficients[3]
b3 = regLogi$coefficients[4]
b4 = regLogi$coefficients[5]
b5 = regLogi$coefficients[6]
b6 = regLogi$coefficients[7]
b7 = regLogi$coefficients[8]
b8 = regLogi$coefficients[9]

# Respuesta:
#b0 = 4.85788
#b1 = -3.51658
#b2 = 0.66666
#b3 = -28.64053
#b4 = -11.88028
#b5 = 11.05599
#b6 = 9.75390
#b7 = 23.87452
#b8 = -0.09799

#5.- Qué par de variables son las que están más correlacionadas y cuál par son 
#las que están menos correlacionadas. Justifique numéricamente su respuesta.

var_matrix = cbind(y,x1,x2,x3,x4,x5,x6,x7,x8)
cor(var_matrix)

#Respuesta: 
# > x1,x2 = 0.9765
# > x1,x4 = 0.9301
# > x1,x5 = 0.9127
# > x2,x4 = 0.9577
# > x2,x5 = 0.9308
# > x2,x7 = 0.9015
# > x4,x5 = 0.9578
# > x4,x6 = 0.9129
# > x4,x7 = 0.9479
# > x5,x6 = 0.9338

#6.- Divida el nuevo dataset en training y test e indique los coeficientes de 
#regresión del modelo para el training.

set.seed(1)

random_values = sample(c(TRUE, FALSE), nrow(data), replace=TRUE, prob=c(0.7,0.3))
training_data = data[random_values,]
test_data = data[!random_values,]

y1 = training_data$X1
x11 = training_data$X2
x22 = training_data$X3
x33 = training_data$X4
x44 = training_data$X5
x55 = training_data$X6
x66 = training_data$X7
x77 = training_data$X8
x88 = training_data$X9


regLog = glm(y1~x11+x22+x33+x44+x55+x66+x77+x88)
summary(regLog)

b00 = regLog$coefficients[1]
b11 = regLog$coefficients[2]
b22 = regLog$coefficients[3]
b33 = regLog$coefficients[4]
b44 = regLog$coefficients[5]
b55 = regLog$coefficients[6]
b66 = regLog$coefficients[7]
b77 = regLog$coefficients[8]
b88 = regLog$coefficients[9]

# Respuesta:
#b0 = 1.8412
#b1 = 0.8523
#b2 = -3.6514
#b3 = -42.9387
#b4 = -16.2411
#b5 = 16.2446
#b6 = 19.9883
#b7 = 29.5919
#b8 = -0.2239

#7.- Cuántas observaciones ha usado para training y cuántas para test en el dataset.

#Respuesta: Se tomaron 60 muestras oara training y 28 para test

#8.- Escriba la ecuación de regresión logística con el modelo “logit”, para el 
#dataset de test.

y11 = test_data$X1
x111 = test_data$X2
x222 = test_data$X3
x333 = test_data$X4
x444 = test_data$X5
x555 = test_data$X6
x666 = test_data$X7
x777 = test_data$X8
x888 = test_data$X9


regLogic = glm(y11~x111+x222+x333+x444+x555+x666+x777+x888, family = binomial())
summary(regLogic)

b000 = regLogic$coefficients[1]
b111 = regLogic$coefficients[2]
b222 = regLogic$coefficients[3]
b333 = regLogic$coefficients[4]
b444 = regLogic$coefficients[5]
b555 = regLogic$coefficients[6]
b666 = regLogic$coefficients[7]
b777 = regLogic$coefficients[8]
b888 = regLogic$coefficients[9]

yEst = exp(b000+b111*x111+b222*x222+b333*x333+b444*x444+b555*x555+b666*x666+b777*x777+b888*x888)/(1 + exp(b000+b111*x111+b222*x222+b333*x333+b444*x444+b555*x555+b666*x666+b777*x777+b888*x888))

#9. Indique el valor máximo y mínimo de las predicciones, en el dataset de test, 
#como probabilidades. Cuál sería el umbral de decisión para cada clase?

treshold = mean(range(yEst))

#Respuesta = 0.531 o 0.5

#10. Determine la tasa de error de su modelo para el dataset de test.

yEst = round(yEst)

err = sum((yEst != y11)*1)/length(y11)
