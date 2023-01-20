function yhat = miNB(x,y,Xn)

etiquetas = unique(y);
    
x0 = x(y==etiquetas(1),:);
x1 = x(y==etiquetas(2),:);

y0 = size(x0,1)/size(x,1);
y1 = size(x1,1)/size(x,1);

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

disp("Posterior Probability")

yhat = zeros(9,1);
for i = 1: size(Ptc,1)
    yhat(i,1) = (Ptc(i)*y1)/((Ptc(i)*y1)+(Ptn(i)*y0));
    if yhat(i,1) > 0.5
        fprintf("Probabilidad (1): " + (yhat(i,1) * 100) + "\t = " + 1 +"\n");
    else
        fprintf("Probabilidad (1): " + (yhat(i,1) * 100) + "\t = " + 0 +"\n");
    end
end

end

