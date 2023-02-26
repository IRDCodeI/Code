# ----------- Escalamiento Multidimensional -------------

library(readr)

iris <- read_csv("C:/Users/Asus/Desktop/Coding/R/Datasets/iris.data", 
                 col_names = FALSE)

View(iris)
data(iris) # Dataset por defecto cargado en R

pairs(iris[,1:4])

# Reduccion de Dimensionalidad

d = dist(iris[,1:4])
esc = cmdscale(d, eig = TRUE, k = 2)

plot(esc$points[,1], esc$points[,2], col=c("red","green","blue")[iris$Species])
text(esc$points[,1], esc$points[,2], labels = row.names(iris))

