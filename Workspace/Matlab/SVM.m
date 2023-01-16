% Datos
x = [4,5; -0.5,3; 5,3; 2.5,1.5; 1,1];
y = [-1;1;-1;1;1];

%Funcion  fitcsvm
% Instalar Paquete 'Statistics and Machine Learning Toolbox' en Add-Ons
fit = fitcsvm(x,y);
support_vector = fit.SupportVectors;
disp(support_vector);

fit.Bias
fit.Beta