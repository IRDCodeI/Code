clear; clear; close all

% Vector de Datos
load("matricesPr2.mat");
% Transpuesta del vector de datos (horizontal a vertical)
x1 = Xnum(1, :);
x1T = x1';

x2 = Xnum(2, :);
x2T = x2';

x3 = Xnum(3, :);
x3T = x3';

x4 = Xnum(4, :);
x4T = x4';

% Matrices formadas de 5x4
imA = reshape(x1T,5,4);
imshow(imA);

imB = reshape(x2T,5,4);
imshow(imB);

imC = reshape(x3T,5,4);
imshow(imC);

imD = reshape(x4T,5,4);
imshow(imD);

%Vector de caracteristicas Y
y = [3;1;4;2];

xA = im1(:);
xAT = xA';

xB = im2(:);
xBT = xB';

xC = im3(:);
xCT = xC';

xletter = [xAT; xBT; xCT]; %Vector de datos "X-2"
sumas = sum(xletter, 2);

