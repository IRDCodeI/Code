library("VIM")
library(readr)

# **********************
# *** Lectura de CSV ***
# **********************

# >> Hot-Deck, MICE, Readr

dat <- read.csv("C:/Users/Asus/Desktop/Workspace/R/Dataset.csv", header=TRUE, sep=",")

# -------------------------
y = dat[,9] # -> Frecuencia
# -------------------------

# ****************************
# *** Tratamiento de Datos ***
# ****************************

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

# ************************
# *** Escritura de CSV ***
# ************************
setwd("C:/Users/Asus/Desktop/Workspace/R/") 

write.csv(data, "Dataset_Cleaned.csv")
# **********************
# ***    Extras      ***
# **********************

#na.omit()
#is.na()
#which()
