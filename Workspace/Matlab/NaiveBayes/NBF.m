clc, clear, close all

data = readmatrix("Dataset_IA.csv");
x = data;

rV = randperm(60,51); 

X = x(rV,1:60); 
y = x(rV,61); 

xnAux = ones(1,9); 
aux = 0; 
for i = 1: 60
    if(i ~= sort(rV))
        aux = aux + 1;
        xnAux(aux) = i;
    end
end

Xn = x(xnAux,1:60);

% ------- Funcion Naive Bayes ----
disp("Clasificacion Naive Bayes (Predicho vs Reales)")

for i=1: size(Xn,1)
    yhat = miNaiveBayes(X,y,Xn(i,:));
    fprintf(xnAux(i) + " - " + "Predicho: " + yhat +"\t" + "Real:"+ x(xnAux(i),61) +"\n") 
end


