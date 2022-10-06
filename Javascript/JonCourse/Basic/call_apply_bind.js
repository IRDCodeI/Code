//Todo >> Call, Apply, Bind
// Metodos que permiten conservar la referencia de un scope en particular para 
// usarlo en un invocacion posterior

console.log(this);
this.lugar = 'Contexto Global';

function saludar(saludo, quien) {
    console.log(` ${saludo} ${quien} desde ${this.lugar}`);
};

saludar('Hola', 'David'); // --> Contexto global;

const obj = {
    lugar: 'Contexto Objeto',
};

//? Call, Apply.- Llama un nuevo this o un contexto
// > Permite pasarle mas parametros

saludar.call(obj, 'Hola', 'Stalin'); //--> Contexto a recibir "Contexto Objeto"
                                    // Parametros ingresados por comas
//saludar.call(null, 'Hola', 'Stalin'); // --> null hace que se regrese al contexto global
///saludar.call(this, 'Hola', 'Stalin');

saludar.apply(obj, ['Adios', 'Stalin']); // Parametros ingresados como array
//saludar.apply(null, 'Hola', 'Stalin');

//? Bind.- Crea un enlace (Similar A.F) y permite enlazar contextos diferentes

const persona = {
    name: 'Stalin',
    saludar: function() {
        console.log(`Hola ${this.name}`);
    }
}

persona.saludar(); 

const otherPerson = {
    saludar: persona.saludar.bind(persona) // Enlaza el contexto de otra funcion u objeto
    //saludar: persona.saludar.bind(this)
}

otherPerson.saludar(); 

