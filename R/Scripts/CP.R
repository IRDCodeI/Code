library(corrplot)
data(iris)

c = cor(iris[,1:4])
corrplot(c)

bartlett.test(iris[,1:4])

install.packages("REdaS")
library(REdaS)

kmo = KMOS(iris[,1:4]) # Permite aplicar A.F

l = log(iris[,1:4]) #Reduce cantidad - Cambiando de escala