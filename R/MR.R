library("MASS")

data <- Boston

x = data[,6]
y = data[,14]

plot(x,y, col="blue", main = "Diagrama de Dispersion")

reg <- lm(y~x)
yEst = reg$coefficients[1] + reg$coefficients[2] * x

# --> Suma de Cuadrados

SCE = anova(reg)$Sum[2]
SCR = anova(reg)$Sum[1]
STC = SCE + SCR

# --> Bondad de Ajuste

cXY = cor(x,y) # --> Correlacion
dXY = cXY^2 # --> Determinacion

summary(reg)

# --> Pruebas de significancia

# Valor Critico

ta = qt(0.01/2,504,lower.tail = FALSE) # Area t de alpha
fa = qf(0.01,1,504,lower.tail = FALSE) # Area f de alpha

# P-value

te = 2*pt(q = 21.72,504,lower.tail = FALSE)
fe = pf(q = 471.8,1,504,lower.tail = FALSE)

# --> Analisis de Residuales

# Linealidad
plot(x,y)

# Homocedasticidad
plot(reg,1)

# Normalidad
plot(reg,2)

# Independencia
r = yEst-y
plot(r)

# --> Valor Atipicos 
rStd = rstandard(reg)
for (i in rStd)
  if(i < -2 || i > 2)
      print(i)

# --> Valor Influyentes
vI = influence(reg)$hat
th = 6/length(x)

for (i in vI)
  if (i >= th)
      print(i)

# -------- Regresion Lineal Multiple ---------
x2 = data[,8]
regM = lm(y~x+x2)
summary(regM)

# --> Coeficientes 
dXsY = 0.4935 # Determinacion

# --> Multicolinealidad "Correlacion entre variables independientes"
m = cbind(y,x,x2)
cor(m)
