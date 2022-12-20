clc, clear, close all

%------------------------
% Lectura del archivo csv
%------------------------
data = readmatrix("Dataset_IA.csv");
rV = randperm(60,51);

x = data(rV,:);
y = data(rV,61); % --> Vector de etiquetas

x0 = x(y==0,:); % --> Vector de datos anticorreistas
x1 = x(y==1,:); % --> Vector de datos correistas

%------------------------
% Calculo Naive Bayes
%------------------------

% ---- Seleccion Aleatoria de Vectores ---

xnAux = ones(1,9); % --> Quemado de matriz para reemplazar posteiormente
aux = 0; % --> Acumulador
for i=1: 60
    if(i ~= sort(rV)) % --> Si el valor no esta lo asigna a la matriz
        aux = aux + 1;
        xnAux(aux) = i; % --> Agrega a la matriz
    end
end

Xn = data(xnAux,1:60);

% >> y (0,1): 0 "No correista"; 1 "Correista"

y0 = size(x0,1)/size(x,1); % @Probabilidad de que no sea correista
y1 = size(x1,1)/size(x,1); % @Pronabildiad de que sea correista

% >> Xni "Proabilidad dado que es correista"
Pic = zeros(1,60);
Ptc = [];
for i = 1:1:size(Xn,1)
    for j = 1:1:(size(x1,2)-1)
        aux3 = 0;
        for k = 1: size(x1,1)
            if Xn(i,j) == x1(k,j)
                %disp("k: "+k+" - Xn: " + Xn(i,j) + "   " + " x1: " + x1(k,j))
                aux3 = aux3 + 1;
            end
        end
       %disp("j: "+j+" - Total:" + aux3)
       Pic(i,j) = (aux3/size(x1,1));
    end
    %disp("i: " + i + " - " + Pic(i, :));
    Ptc = vertcat(prod(Pic,2));
end
disp("Likehood")
disp(Ptc)

% >> Xni "Proabilidad dado que es no correista"
Pin = zeros(1,60);
Ptn = [];
for i = 1:1:size(Xn,1)
    for j = 1:1:(size(x0,2)-1)
        aux3 = 0;
        for k = 1: size(x0,1)
            if Xn(i,j) == x0(k,j)
                %disp("k: "+k+" - Xn: " + Xn(i,j) + "   " + " x1: " + x1(k,j))
                aux3 = aux3 + 1;
            end
        end
       %disp("j: "+j+" - Total:" + aux3)
       Pin(i,j) = (aux3/size(x0,1));
    end
    %disp("i: " + i + " - " + Pic(i, :));
    Ptn = vertcat(prod(Pin,2));
end
disp("Evidence")
disp(Ptn)

% Probabilidad de que sea correista dado el vector
P1 = zeros(9,1);
for i = 1: size(Ptc,1)
    P1(i,1) = ((Ptc(i)*y1)/((Ptc(i)*y1)+(Ptn(i)*y0)))*100;
end

disp("Posterior Probability (1)")
disp(P1 + "%");

% Probabilidad de que no sea correista dado el vector
P2 = zeros(9,1);
for i = 1: size(Ptn,1)
    P2(i,1) = ((Ptn(i)*y0)/((Ptc(i)*y1)+(Ptn(i)*y0)))*100;
end

disp("Posterior Probability (0)")
disp(P2 + "%");