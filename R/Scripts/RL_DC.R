# //----------------------------------------//
# //-----EJERCICIO 3 REGRESION LOGISTICA-----//
# //----------------------------------------//

library(readr)
breast <- read_csv("Desktop/AMV/breast-cancer-wisconsin.data",
                   col_names = FALSE)
View(breast)

# TRAINING TEST
# ACCURRACY TEST

# ELIMINAR TODA LA COLUMNA

View(breast);

# TRANING
breast1 = breast[1:490,]

x1 = breast1$X1;
x2 = breast1$X2;
x3 = breast1$X3;
x4 = breast1$X4;
x5 = breast1$X5;
x6 = breast1$X6;
x7 = breast1$X8;
x8 = breast1$X9;
x9 = breast1$X10;

y = breast1$X11;

# Y TRASNFORMADA A 0 O 1
(breast$X11 == 4)*1
y = (breast1$X11 == 4)*1;

# TABULACION PARA SABER, SI ES MALIGNO O BENIGNO
#saber = tableSí;

# CONSTRUCCION DEL MODELO

reglog = glm(y~x1+x2+x3+x4+x5+x6+x7+x8+x9,family = binomial()); # ("logic")
summary(reglog);

# OBTENCION DEL MODELO OBTENER COEFICIENTES DE REGRESION

b0 = reglog$coefficients[1];
b1 = reglog$coefficients[2];
b2 = reglog$coefficients[3];
b3 = reglog$coefficients[4];
b4 = reglog$coefficients[5];
b5 = reglog$coefficients[6];
b6 = reglog$coefficients[7];
b7 = reglog$coefficients[8];
b8 = reglog$coefficients[9];
b9 = reglog$coefficients[10];

# PARTICION DE TEST
breast2 = breast[491:699,]
x11 = breast2$X1;
x22 = breast2$X2;
x33 = breast2$X3;
x44 = breast2$X4;
x55 = breast2$X5;
x66 = breast2$X6;
x77 = breast2$X8;
x88 = breast2$X9;
x99 = breast2$X10;

y1 = (breast2$X11 == 4)*1;

# REALIZAR ECUACION

yest = exp(b0+b1*x11+b2*x22+b3*x33+b4*x44+b5*x55+b6*x66+b7*x77+b8*x88+b9*x99)/(1+exp(b0+b1*x11+b2*x22+b3*x33+b4*x44+b5*x55+b6*x66+b7*x77+b8*x88+b9*x99));

# UMBRAL

treshold = range(yest);
treshold1 = mean(range(yest));

# ESTIMACIONES

yest1 = round(yest)

# COMPARACION yest1 para y1 de test

# COMPARACION DE PREDICCION CON LA REALIDAD
acc = (yest1==y1)*1

acc1 = sum((yest1==y1)*1)/length(y1);

#Random
#set.seed(1)
#sample(699,490)

#Treshold: Calcular

#Accuracy (Exactitud del modelo)
