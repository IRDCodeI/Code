//Todo >> this 
// Palabra que hace referencia al objeto en cuestion o en donde nos encontramos
// trabjando, permitiendonos invocar propiedades o metodos de ese objetos

// En navegadores this hace referencia a navegadores

console.log(this); // --> Window

console.log( this === window );

this.nombre = 'Contexto Global';
console.log(this.nombre);

function print() {
    console.log(this.nombre);
}

print(); // --> Imprime Contexto Global debido a que se encuentra en el ambito general
        //      del archivo

const obj = {
    nombre: 'Contexto Objeto',
    print: function (){ // Funcion es creada dentro del contexto del objeto
        //Scope o Ambito de la funcion
        console.log(this.nombre);
    }
}

obj.print(); // --> Imprime Contexto Objeto debido al scope de JS

const obj2 = {
    nombre: `Contexto Objeto 2`,
    print // --> Se agina como valor una funcion declara pero el "this" hace referencia
            // y toma el contexto del obj 2
}

const obj3 = {
    nombre: 'Contexto Objeto 3',
    print: () => { // Arrow Function - mantiene un enlace del contexto donde fue creado el objeto donde aparece
                    // La palabra "this" en A.F toma el contexto del objeto padre donde fue creado
                    //  "Contexto Global"
        console.log(this.nombre);
    }
}

obj3.print();

//* En objetos no se recomienda usar A.F ya que estas no crear un scope y toman el scope
//* padre.

function Persona(name) { // Funcion constructora crea su propio scope
    
    const that = this; // --> Hace referencia al this de la funcion contructora
    this.name = name; //that.name = name;
    //return console.log(this.name);
    
    /*
    return function(){ //? Clasure.- Envolver una funcion dentro de otra funcion
        // Esta funcion anonima crea otro scope pero como no tiene una propiedad name
        // regresa al contexto global.
        console.log(this.name); 
    }
    */

    return () => console.log(this.name); // --> Toma el contexto de la funcion contenedora

}

//? Cada funcion en JS crear un contexto excepto las A.F

let stalin = new Persona('Stalin');
stalin();