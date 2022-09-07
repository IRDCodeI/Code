//* Funciones Anonimas Autoejecutables

//? Usadas en proyectos de vanila JS, y patron para desarrollo de dichos proyectos.

//? > Es una funcion que se engloba todo el codigo que se desea ejecutar, creando una
//? encapsulacion del codigo permitiendo que no exista conflictos con otras funciones.
//? Estas funciones al momento de definirlas, son ejecutadas y aparte no poseen nombre.

//? >> Permite tener seguridad los efectos que puedan tener la invocacion de otros archivos,
//? como el uso de nombres de variables similares en diferentes modulos

//? >> Permiten pasar parametros y usar alias dentro del cuerpo de la funcion
// https://cdnjs.com/

//* >> Cuerpo de una FAA
//? Debido a que es una funcion sin nombre se la encapsula con un parentesis para que exista
//? referencia en memoria, ademas en este caso se debe separar con ";"

(function () {
    //Codigo de la funcion
    console.log('Primer IIFE');
})(); //2do parentesis hace que la funcion se ejecute

(function(d, w, c){
    console.log('Segunda IIFE');
    console.log(d);
    console.log(w);
    c.log('Console log');
})(document, window, console);

//* Formas de escribir funciones

((function(){

})());

//* Version Unaria
+function(){
    
}();

//*Facebook

!function(){

}();