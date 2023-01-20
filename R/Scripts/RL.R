y = c(0,0,0,0,0,1,0,0,1,0)
x1 = c(2.291,3.215,2.135,3.924,2.528,2.473,2.384,7.076,1.182,3.345)
x2 = c(1,1,1,0,1,0,0,0,1,0)

#Regresion Logistica
x = c(3.17,3.58,1.49,2.91,0.76,3.70,5.08,2.11,2.20,4.76,7.05,3.36,3.22,6.55,0.70,1.06,4.66,0.70,1.21)
y = c(1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0)

regL = glm(y~x, family = binomial())
summary(regL)

yest = (exp(regL$coefficients[1] + regL$coefficients[2] * x)/(1+(exp(regL$coefficients[1] + regL$coefficients[2] * x))))
treshold = mean(range(yest))
yest_r = round(yest)

#Z (Distribucion Normal)
#Divergencias ¨Cuando no es igual¨

error = (yest_r == y)
#Exactitud (Acquarice)
acc = sum(error*1)/length(error) # Bondad de ajuste

#Ciencas sociales no hay treshold >> Exactitud depende del contexto que se aplica
#Cardinalidad, deben existir misma cantidad de clases "Clases desvalanceadas"
