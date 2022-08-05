//* -------------Clases en JS------------
//Azucar sintactica: Permite escribir clases, pero dichas clases son compiladas a prototipos
//? Clases no reciben parametros, estos lo hacen las funciones constructores (constructor)
//?     - Constructor es un metodo especial que se ejecuta en el momento de instanciar una clase
//?     - Metodos pueden recibir parametros

//Todo >> En formato de clases JS ya optimiza los metodos, enviandolos al prototitpo
//Todo >> Clases simplifican la escritura

class Animal{

//Constructor
    constructor(nombre, genero){
        //Atributos
        this.nombre = nombre;
        this.genero = genero;
    }

//Metodos
    sonar (){
        console.log('Hago sonidos');
    }

    saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

const minie = new Animal('Minie', 'Hembra');

console.log(minie);

minie.saludar();
minie.sonar();


//? Herencia de clases

class Perro extends Animal{

    constructor(nombre, genero, tamanio){
        //super(), llama el constructor de la clase padre
        super(nombre, genero); // --> Llamada a constructor padre
        this.tamanio = tamanio;
        this.raza = null; // --> Atributo null, para uso get y set
    }

    sonar(){
       console.log("Soy un perro"); 
    }

    ladrar (){  // Funcion local de la clase
        console.log("Gau");
    }

    static msj(){   //Funcion o metodo estatica de la clase
        console.log('Mensaje estatico de la clase perro, sin instanciar');
    }

//? Modifican el valor interno de raza de la clase
    get getRaza(){  // --> Getter
        return this.raza;
    }

    set setRaza(raza){ // --> Setter
        this.raza = raza;
    }
};

const scooby = new Perro('Scooby', 'Macho', 'Danes');

console.log(scooby);

scooby.sonar();
scooby.ladrar();
scooby.saludar();

//* ------------------ Metodos estaticos, getters y setters----------------
//? No existen metodos y atributos en las clases de JS
//? Existen los metodos estaticos: Estos son aquello que se pueden ejecutar sin necesidad de instanciar la clase
//?     - Se usa la palabra reservada "static"

    Perro.msj();

//? Setter y Getter permiten establecer y obtener el valor de atributos que estan en la clase
//?     - Se antepone la palabra get o set
//?     - Se usan como si fueran atributos o propiedad de la clase

    scooby.setRaza = 'Danes'; //--> Set como atributos
    let raza = scooby.getRaza; //--> Tratado como atributo
    console.log(raza);

    console.log(scooby);