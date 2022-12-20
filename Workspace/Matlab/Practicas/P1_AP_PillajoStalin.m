clc, clear, close all;
data = xlsread("alumnos.xlsx");

% DATASET ALUMNOS
disp("Dataset Alumnos");

% Calculo media estatura
%   >> Sin Funcion
var1 = data(:,4);
var2 = sum(var1)/28;
disp("Media A: "+var2);

%   >> Con funcion
disp("Media B: "+mean(var1));

% Varianza variable estatura
%   >> Sin Funcion
var3 = var1 - var2;
var4 = var3.^2;
var5 = sum(var4)/ (length(var3) - 1);
disp("Varianza A: " + var5);

%   >> Con Funcion
disp("Varianza B: " + var(var1));

% Desviacion estandar variable estatura
%   >> Sin Funcion
var6 = sqrt(var5);
disp("Desviacion A: " + var6);

%   >> Con funcion
disp("Desviacion B: " + std(var1));

% Estaturas Ordenadas
var7 = sort(var1,'ascend');
disp("Estaturas Ordenadas: ");
disp(var7);

% Frecuencia Acumulativa\
var8 = 0:1/(length(var1)-1):1;
var8 = var8';
disp("Frecuencia Acumulativa:")
disp(var8);

% Grafico Scatter F vs Est_Ordenadas
%scatter(var8,var7);

% Calculo cuartiles
var9 = quantile(var7, [0.25, 0.50, 0.75]);
disp("Cuartiles: ");
disp(var9);

% DATASET STATES
states = csvread("statesx77.csv",1,1);
disp("Dataset States");

% Correlacion Illeracy - Murderes
aux1 = states(:, 3);
aux2 = states(:, 5);

aux3 = sum(aux1 - mean(aux1));
aux4 = sum(aux2 - mean(aux2));

var10 = sum((aux1 - mean(aux1)).*(aux2 - mean(aux2)));
var11 = sqrt(sum((aux1 - mean(aux1)).^2)*sum((aux2 - mean(aux2)).^2));

var12 = var10/var11;
disp("Coeficiente de Correlacion:")

if(var12 <= 0 || var12 < 0.10)
    disp("Correlacion nula: " + var12);
elseif (var12 <= 0.10 || var12 < 0.30)
    disp("Correlacion debil: " + var12);
elseif (var12 <= 0.30 || var12 < 0.50)
    disp("Correlacion moderada: " + var12);
elseif (var12 <= 0.50 || var12 < 1)
    disp("Correlacion fuerte: " + var12);
else
    disp("   Error! Fuera del limite de correlacion");
end

% Grafico scatter Illiteracy vs Murder

%scatter(aux2, aux1);

% Normalizacion Income y Life Exp

Income = states(:, 2);
LifeExp = states(:, 4);

maxI = max(Income);
minI = min(Income);

maxLE = max(LifeExp);
minLE = min(LifeExp);

medI = mean(Income);
medLE = mean(LifeExp);

normI = (Income - medI)./(maxI - minI);
normLE = (LifeExp - medLE)./(maxLE - minLE);

disp("Income(norm)     LifeExp(norm)");
disp(normI+"|    |"+normLE);

% Estandarizacion Income y Life Exp

sigmaI = sqrt(sum((Income - medI).^2)/(length(Income)-1));
sigmaLE = sqrt(sum((LifeExp - medLE).^2)/(length(LifeExp)-1));

standI = (Income - medI)/sigmaI;
standLE = (LifeExp - medLE)/sigmaLE;

disp("Income(stand)     LifeExp(stand)");
disp(standI+"|    |"+standLE);
% Variables dummy "Grande, Pequenio, Media"

Area = states(:, 8);
Dummy = zeros(50,3);
p = 0;
m = 0;
g = 0;

for i = 1:length(Area)
    [p,m,g] = getDummy(Area(i));
    Dummy (i, :) = [p, m, g];    
end

Matriz = horzcat(states, Dummy);
display(Matriz);

% Media Pequenio y Grandes Estados
mLP = 0;
mLG = 0;
cont1 = 0;
cont2 = 0;

for i = 1 : length(Dummy)
    if(Dummy(i,1) == 1)
        mLP = mLP + LifeExp(i);
        cont1 = cont1 + 1;
    elseif(Dummy(i,3) == 1)
        mLG = mLG + LifeExp(i);
        cont2 = cont2 + 1;
    end
end

disp("Media de LifeExp de Pequenio: ")
disp(mLP/cont1)

disp("Media de LifeExp de Grande: ")
disp(mLG/cont2)
% ------------------------------------------------
%                 Funciones 
% ------------------------------------------------

function [p,m,g] = getDummy(area)
    if (area < 41900)
        p = 1;
        m = 0;
        g = 0;
    elseif (area >= 41900 && area < 69000)
        p = 0;
        m = 1;
        g = 0;
    elseif (area >= 69000)
        p = 0;
        m = 0;
        g = 1;
    end
end



