//*Control de flujo
//Permite incorprar interactividad a una app
//TODO -- ";" se usa para separar bloques de codigo --

    //? Declarion de bloque
//Se usan para agrupar instrucciones, se delimita por llabes
/*
{    statement_1;   statement_2;    }*/

while(x < 10){
    x++; //Declaracion de bloque
}

//! Declaracion de bloque no definen un ambito
var x = 1;
{
  var x = 2;
}
console.log(x); // muestra 2 porque x esta en el mismo ambito

//* -----------Expresiones condicionales-----------
//Conjunto de instrucciones que se ehecutaran si una condicion es verdadera

//? IF ... ELSE

//if (condicion) { bloque de codigo }else { bloque 2 de codigo}
//if (c){}else if(c){}else{}

function checkData() {
    if (document.form1.threeChar.value.length == 3) {
      return true;
    } else {
      alert(
          'Introduce exactamente tres caracteres. ' +
          `${document.form1.threeChar.value} no es válido.`);
      return false;
    }
  }
  

//*Valores falsos

//falsem undefined, null, 0, NaN, "" --> Son considerados false

//* Declaracion Switch
//Permite evaluar una expresion e intenta coincidir el valor de la expre
//con una etiqueta case
/*
switch (expression) {
    case label_1: --> Busca coincidencia con al expresion
      statements_1
      [break;] --> Opcional y permite salir del switch termina las instrucciones
    case label_2:
      statements_2
      [break;]
      …
    default: --> En caso de no haber coincidencia con al expresion se ejecuta
      statements_def
      [break;]
  }*/

  switch (fruittype) {
    case 'Oranges':
      console.log('Las naranjas cuestan $0.59 la libra.');
      break;
    case 'Apples':
      console.log('Las manzanas cuestan $0.32 la libra.');
      break;
    case 'Bananas':
      console.log('Los plátanos cuestan $0.48 la libra.');
      break;
    case 'Cherries':
      console.log('Las cerezas cuestan $3.00 la libra.');
      break;
    case 'Mangoes':
      console.log('Los mangos cuestan $0.56 la libra.');
      break;
    case 'Papayas':
      console.log('Los mangos y las papayas cuestan $2.79 la libra.');
      break;
    default:
     console.log(`Lo sentimos, no tenemos ${fruittype}.`);
  }
  console.log("¿Hay algo más que quieras?");

  //*Manejo de excepciones
//Se usan excepciones para lanzar errores

//? Throw 
//Lanza una excepcion y se especifica el valor
// throw expresssion;

throw 'Error2';   // tipo String
throw 42;         // tipo Number
throw true;       // tipo Boolean
throw {toString: function() { return "¡Soy un objeto!"; } };

//TODO Objecto y Excepciones

// Crea un objeto tipo de UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  // Hacer que la excepción se convierta en una bonita cadena cuando se usa como cadena
  // (por ejemplo, por la consola de errores)
  UserException.prototype.toString = function() {
    return `${this.name}: "${this.message}"`;
  }
  
  // Crea una instancia del tipo de objeto y tírala
  throw new UserException('Valor muy alto');

  //* Declaracion try..catch
  //Bloque de expressiones para probar y dar respuesta en caso de una excepcion
  //try: contiene declaraciones
  //catch: declaraciones especificas que hacer si se de una excepcion en try

  function getMonthName(mo) {
    mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
    let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
                  'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; // aquí se usa la palabra clave throw
    }
  }
  
  try { // declaraciones para try
    monthName = getMonthName(myMonth); // la función podría lanzar una excepción
  }
  catch (e) {
    monthName = 'unknown';
    logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
  }
  

//? Bloque catch
//Aqui se manejan excepciones generadas por try
//Genera un identificador (catchID) que tiene el valor especifico de throw
    //Identeficador solo dura durante la ejecucion del bloque catch

//Se usa console.error() para registro de errores

//? Bloque finally
//Bloque que tiene instrucciones a ser ejecutadas despues de try y cathc
//Se ejecutara independiente de las excepciones 
//Se usa para para hacer fallar al script bien, con liberacion de recursos

openMyFile();
try {
  writeMyFile(theData); // Esto puede arrojar un error
} catch(e) {
  handleError(e); // Si ocurrió un error, manéjalo
} finally { //Se convierte en el valor de retorno 
  closeMyFile(); // Siempre cierra el recurso
}

//* Objetos Error
//name y message: Usaod para obtener un msj refinado
//Error: Da la clase general de Error
//Message: Da un msj mas conciso 