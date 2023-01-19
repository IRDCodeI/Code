# //----PAQUETES----//

install.packages("ggplot2");
library(ggplot2);

library("VIM")
library(readr)

# ********
# * Lectura de CSV *
# ********

# >> Hot-Deck, MICE, Readr

dat <- read.csv("C:/Users/Asus/Desktop/Workspace/R/Dataset.csv", header=TRUE, sep=",")

# -------------------------
y = dat[,9] # -> Frecuencia
# -------------------------

# **********
# * Tratamiento de Datos *
# **********

# --> Consideraciones -->
# Metodo de Deteccion: Datos Completamente Aleatorios MCAR
# Metodo de Tratamiento: Descarte o Imputacion:
#   >> Descarte: Listwise Deletopn (Filas), Pairwise Deletion(Casillas)
#       --> Se considera el descarte solo con el "10%" o menos de datos faltantes
#   >> Imputacion: Se estima los valores aproximados "Se debe mantener distribucion"
#       >>> Imputacion simple: Una sola estimacion "Media - Mediana, Regresion (Necesita Correlacion), Hot-deck (K-NN)"
#       >>> Imputacion multiple: Multiples estimaciones y se combinan en un solo valor MICE

# --------- Tratamiento T.Procesador (Descarte) -------------

x1 = dat[,5] # --> Tamanio del procesador
missing_values = which(is.na(x1))

# R: ||Posee 0.18% datos faltantes||

# --------- Tratamiento TDP (Imputacion-KNN) -------------

knn = hotdeck(dat, variable = c("TDP..W.","Die.Size..mm.2.","Transistors..million."))

#R: Se emplea knn para evitar alterar la distribucion de los datos 

# ---- DataSet Limpio ----
x2 = knn$TDP..W.
x3 = knn$Die.Size..mm.2.
x4 = knn$Transistors..million.

data = data.frame(cbind(y,x1,x2,x3,x4))
data = na.omit(data)

# ********
# * Escritura de CSV *
# ********
setwd("C:/Users/Asus/Desktop/Workspace/R/") 

write.csv(data, "Dataset_Cleaned.csv")
# ********
# *    Extras      *
# ********

#na.omit()
#is.na()
#which()

# //----PRUEBA DE RESIDUALES----//

# Datos.
file.choose();
data = "C:\\Users\\Michael\\Documents\\PROYECTO_ESTOCASTICOS\\Dataset_Cleaned(1).csv";
data = read.csv(data);

#ABRIR CSV

choose.files()

#data = read.csv("C:\\Users\\showb\\OneDrive\\Desktop\\PROYECTO ANALISIS\\chip_dataset.csv")

data = read.csv("C:\\Users\\showb\\OneDrive\\Desktop\\PROYECTO ANALISIS\\Dataset_Cleaned.csv")

#ECUACON DE REGRESION LINEAL

freq = data[,2] #Variable dependiente

prcsz = data[,3]  #Variable independiente
tdp = data[,4]    #Variable independiente
diesz = data[,5]  #Variable independiente
transs = data[,6] #Variable independiente

#------------------------------------------------------------------------------#  
#freq ~ prcsz
plot(prcsz, freq)
reg1 = lm(freq ~ prcsz)
summary(reg1)

yest1 = reg1$coefficients[1] + reg1$coefficients[2] * prcsz

#Bondad de Ajuste
Multiple R-squared:  0.07872
#Coeficiente de correlacion
rxy1 = cor(prcsz, freq)
#R: -0.2805777

#Valores influyentes
#Obtener el treshold
#6/n -> 6/4845 = 0.0012 < 0.99

hi1 = influence(reg1)$hat
#Encontrar los valores mayores a 0.0012
inf = hi1[hi1>0.0012]
length(inf)

#R: Existen 119 valores influyentes

#Outliers
rs1 = rstandard(reg1)
rs1[rs1 > 2]
rs1[rs1 <(-2)]

#------------------------------------------------------------------------------#        
#freq ~ tdp
plot(tdp, freq)
reg2 = lm(freq ~ tdp)
summary(reg2)

yest2 = reg2$coefficients[1] + reg2$coefficients[2] * tdp

#Bondad de Ajuste
Multiple R-squared:  0.007705
#Coeficiente de correlacion
rxy2 = cor(tdp, freq)
#R: 0.08777666

#Valores influyentes
hi2 = influence(reg2)$hat
#Encontrar los valores mayores a 0.0012
inf2 = hi2[hi2>0.0012]
length(inf2)

#R: Existen 229 valores influyentes

#Outliers
rs2 = rstandard(reg2)
rs2[rs2 > 2]
rs2[rs2 <(-2)]

#------------------------------------------------------------------------------#  
#freq ~ diesz
plot(diesz, freq)
reg3 = lm(freq ~ diesz)
summary(reg3)

yest3 = reg3$coefficients[1] + reg3$coefficients[2] * diesz

#Bondad de Ajuste
Multiple R-squared:  3.205e-05
#Coeficiente de correlacion
rxy3 = cor(diesz, freq)
#R: 0.005661474

#Valores influyentes
hi3 = influence(reg3)$hat
#Encontrar los valores mayores a 0.0012
inf3 = hi3[hi3>0.0012]
length(inf3)

#R: Existen 250 valores influyentes

#Outliers
rs3 = rstandard(reg3)
rs3[rs3 > 2]
rs3[rs3 <(-2)]

#------------------------------------------------------------------------------#
#freq ~ transs
plot(transs, freq)
reg4 = lm(freq ~ transs)
summary(reg4)     

yest4 = reg4$coefficients[1] + reg4$coefficients[2] * transs

#Bondad de Ajuste
Multiple R-squared:  0.0001577
#Coeficiente de correlacion
rxy4 = cor(transs, freq)
#R: 0.01255644

#Valores influyentes
hi4 = influence(reg4)$hat
#Encontrar los valores mayores a 0.0012
inf4 = hi4[hi4>0.0012]
length(inf4)

#R: Existen 149 valores influyentes

#Outliers
rs4 = rstandard(reg4)
rs4[rs4 > 2]
rs4[rs4 <(-2)]

#------------------------------------------------------------------------------#
regmult = lm(freq ~ prcsz + tdp + diesz + transs)
summary(regmult)

#Bondad de Ajuste
Adjusted R-squared:  0.09666

# ECUACION DE REGRESION LINEAL

freq = data[,2] #Variable dependiente (Frecuencia)

prcsz = data[,3]  #Variable independiente (Tamaño del Procesador)
tdp = data[,4]    #Variable independiente (Temperatura)
diesz = data[,5]  #Variable independiente (Tamaño de la Matriz)
transs = data[,6] #Variable independiente (Transistores)


#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL SIMPLE (FRECUENCIA PARA TAMAÑO DEL PROCESADOR)----// 

reg1 = lm(freq~prcsz);
summary(reg1);

# //----CORRELACION DE DATOS----//

rxy1 = cor(prcsz,freq);
# No existe una buena correlacion entre los datos (-0.2805777).

# //----BONDAD DE AJUSTE----//

# Multiple R-squared:  0.07872
# Existe una buena bondad de ajuste

# //----DIAGRAMA DE DISPERSION----// 

plot(prcsz,freq);
abline(reg1);
# Tiene una relacion inversamente proporcional

# //----HOMOCEDASTICIDAD----// 
plot(reg1,1);
# No existe la propiedad de homocedasticidad ya que los valores se encuentran alejados del 0,
# pero cumple con la propiedad de heterocedasticidad

# //----PERTURBACION----//
plot(reg1,2);
# No existe la propiedad de distribucion normal ya que los datos se encuentran dispersos de la
# linea

# //----INDEPENDENCIA DE DATOS----//
plot(reg1,3);
# Existe una dependencia entre los datos.


#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL SIMPLE (FRECUENCIA PARA TEMPERATURA)----// 

reg2 = lm(freq~tdp);
summary(reg2);

# //----CORRELACION DE DATOS----//

rxy2 = cor(tdp,freq);
# Existe una buena correlacion de datos (0.08777666).

# //----BONDAD DE AJUSTE----//

# Multiple R-squared:  0.007705
# Existe una buena bondad de ajuste

# //----DIAGRAMA DE DISPERSION----// 

plot(tdp,freq);
abline(reg2);
# Existe una relacion directamente proporcional 

# //----HOMOCEDASTICIDAD----// 

plot(reg2,1);
# No existe homocedasticidad ya que los puntos no se enceuntra cerca del 0

# //----PERTURBACION----//

plot(reg2,2);
# No existe la propiedad de distribucion normal ya que los datos se encuentran dispersos de la
# linea

# //----INDEPENDENCIA DE DATOS----//

plot(reg2,3);
# Existe una dependencia entre los datos.

#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL SIMPLE (FRECUENCIA PARA TAMAÑO MATRIZ)----// 

reg3 = lm(freq~diesz);
summary(reg3);

# //----CORRELACION DE DATOS----//

rxy3 = cor(diesz,freq);
# No existe una buena correlacion de datos (0.005661474)

# //----BONDAD DE AJUSTE----//

# Multiple R-squared:  3.205e-05
# No existe una buena bondad de ajuste 

# //----DIAGRAMA DE DISPERSION----// 

plot(diesz,freq);
abline(reg3);
# Existe una relacion directamente proporcional

# //----HOMOCEDASTICIDAD----// 

plot(reg3,1);
# No existe homocedasticidad ya que los puntos no se enceuntra cerca del 0

# //----PERTURBACION----//

plot(reg3,2);
# No existe la propiedad de distribucion normal ya que los datos se encuentran dispersos de la
# linea

# //----INDEPENDENCIA DE DATOS----//

plot(reg3,3);
# Existe una dependencia entre los datos.

#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL SIMPLE (FRECUENCIA PARA TRANSISTORES)----// 

reg4 = lm(freq~transs);
summary(reg4);

# //----CORRELACION DE DATOS----//

rxy4 = cor(transs,freq);
# No existe una buena correlacion de datos (0.01255644)

# //----BONDAD DE AJUSTE----//

# Multiple R-squared:  0.0001577
# No existe una buena bondad de ajuste

# //----DIAGRAMA DE DISPERSION----// 

plot(transs,freq);
abline(reg4);
# Existe una relacion directamente proporcional

# //----HOMOCEDASTICIDAD----// 

plot(reg4,1);
# No existe homocedasticidad ya que los puntos no se enceuntra cerca del 0

# //----PERTURBACION----//

plot(reg4,2);
# No existe la propiedad de distribucion normal ya que los datos se encuentran dispersos de la
# linea

# //----INDEPENDENCIA DE DATOS----//

plot(reg4,3);
# Existe una dependencia entre los datos.

#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL MULTIPLE (FRECUENCIA PARA LAS DEMAS VARIABLES)----// 

reg5 = lm(freq~prcsz+tdp+diesz+transs)
summary(reg5)

# //----CORRELACION DE DATOS----//

mlt1 = cbind(freq,prcsz,tdp,diesz,transs);
rxy5 = cor(mlt1);

# //----BONDAD DE AJUSTE----//

# Adjusted R-squared:  0.09666 
# Existe una buena bondad de ajuste entre todas las variables

#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL MULTIPLE (FRECUENCIA PARA TAMAÑO DEL PROCESADOR Y TEMPERATURA)----// 

reg6 = lm(freq~prcsz+tdp);
summary(reg6);


# //----CORRELACION DE DATOS----//

mlt2 = cbind(freq,prcsz,tdp)
rxy6 = cor(mlt2);

# //----BONDAD DE AJUSTE----//

# Adjusted R-squared:  0.08094 
# Existe una buena bondad de ajuste

#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL MULTIPLE (FRECUENCIA PARA TAMAÑO DE LA MATRIZ Y TRANSISTORES)----//

reg7 = lm(freq~diesz+transs);
summary(reg7);


# //----CORRELACION DE DATOS----//

mlt3 = cbind(freq,diesz,transs)
rxy7 = cor(mlt3);

# //----BONDAD DE AJUSTE----//

# Adjusted R-squared:  -0.0002498 
# Existe una mala bondad de ajuste


#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL MULTIPLE (FRECUENCIA PARA PROCESADOR Y TAMAÑO DE MATRIZ)----//

reg8 = lm(freq~prcsz+diesz);
summary(reg8);

# //----CORRELACION DE DATOS----//

mlt4 = cbind(freq,prcsz,diesz);
rxy7 = cor(mlt4);

# //----BONDAD DE AJUSTE----//

# Adjusted R-squared:  0.08092 
# Existe una buena bondad de ajuste

#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL MULTIPLE (FRECUENCIA PARA TEMPERATURA Y TRANSISTORES)----//

reg9 = lm(freq~tdp+transs);
summary(reg9);

# //----CORRELACION DE DATOS----//

mlt5 = cbind(freq,tdp,transs);
rxy8 = cor(mlt5);


# //----BONDAD DE AJUSTE----//

# Adjusted R-squared:  0.007898 
# Existe una mala bondad de ajuste

#------------------------------------------------------------------------------#  
# //----REGRESION LINEAL MULTIPLE (FRECUENCIA PARA PROCESADOR Y TRANSISTORES)----//

reg10 = lm(freq~prcsz+transs);
summary(reg10);

# //----CORRELACION DE DATOS----//

mlt6 = cbind(freq,prcsz,transs);
rxy9 = cor(mlt6);


# //----BONDAD DE AJUSTE----//

# Adjusted R-squared:  0.0869 
# Tiene una buena bondad de ajuste


#------------------------------------------------------------------------------#
# //----REGRESION LINEAL MULTIPLE (FRECUENCIA PARA TAMAÑO DE MATRIZ Y TEMPERATURA)----//

reg11 = lm(freq~prcsz+tdp);
summary(reg11);

# //----CORRELACION DE DATOS----//

mlt7 = cbind(freq,diesz,tdp);
rxy10 = cor(mlt7);

# //----BONDAD DE AJUSTE----//

# Adjusted R-squared:  0.08094
# Tiene una buena bondad de ajuste









