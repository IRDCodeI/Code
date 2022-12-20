function yhat = miNaiveBayes(X, y, xnew)

etiquetas = unique(y);

X1 = X(y==etiquetas(1),:);
X2 = X(y==etiquetas(2),:);

P_y1 = sum(X1)/size(X1,1);
P_y2 = sum(X2)/size(X2,1);

likeli1 = 1; 
for i=1:length(xnew)
    if xnew(i)==1
        likeli1 = likeli1*P_y1(i);
    else
        likeli1 = likeli1*(1-P_y1(i));
    end
end

likeli2 = 1;
for i=1:length(xnew)
    if xnew(i)==1
        likeli2 = likeli2*P_y2(i);
    else
        likeli2 = likeli2*(1-P_y2(i));
    end
end

prior1 = size(X1,1)/size(X,1);
prior2 = size(X2,1)/size(X,1);

numerador = likeli1*prior1;
evidence = numerador + likeli2*prior2;
prob1 = numerador/evidence;

if prob1 > 0.5
    yhat = etiquetas(1);
else
    yhat = etiquetas(2);

end