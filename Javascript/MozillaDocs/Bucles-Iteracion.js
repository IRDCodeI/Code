//* Bucles e iteracion
//Dan una manera rapida de hacer algo repetitivo

//? Declaracion For
//Se repite hasta que la condicion se evalue como false
/*for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción*/ 
  
  function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
//? Declaracion do...while
//Se repite hasta que la condicion sea falsa
/*do
  expresión --> Se ejecuta antes de verificar la condicion
while (condición); --> Al final de cada ejecucion se comprueba condicion*/

let i = 0;
 do {
     i += 1; console.log(i); 
} while (i < 5);

//?Declaracion while
//Se repite hasta que sea true
//La prueba de condicion pasa antes de que se ejecute la expresion
/* while (condición) --> si es false se deja de ejecutar
  expresión --> Si es true la condicon se ejecuta la instruccion*/

  let n = 0;
  let x = 0;
  while (n < 3) {
    n++;
    x += n;
  }
  
//?Declaracion labeled y break
//Nos da una instruccion con un identificador que permite hacer referencia a ella en otra parte del programa
//Break permite terminar un bucle
//Permite indicar con un break o continue si el programa se detiene o continua ejecutando
markLoop: while (theMark === true) { doSomething(); }

//let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Bucles externos: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Bucles internos: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops; //--> Termina la instruccion etiquetada "labelCancelLoops"
    } else if (z === 10) {
      break;
    }
  }
}

//?Declaracion continue
//Se usa para reiniciar un while, do, for o label
//--Si se usa sin etiqueta, finaliza la iteracion y continua la ejecucion del siguiente bucle
//---While vuelve a la condicion y en For salta a la expresion de incremento

//let i = 0;
//let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
      continue;
    }
    n += i;
    console.log(n);
  }
  //1,3,7,12
  
  
  //let i = 0;
  //let n = 0;
  while (i < 5) {
    i++;
    if (i === 3) {
       // continue;
    }
    n += i;
    console.log(n);
  }
  // 1,3,6,10,15
  
  //let i = 0; let j = 10; 
  checkiandj: while (i < 4) {
       console.log(i); i += 1; 
       checkj: while (j > 4) {
           console.log(j); 
           j -= 1; if ((j % 2) === 0) 
      { continue checkj; 
  } console.log(j + 'es impar.'); 
  } console.log('i = ' + i); 
  console.log('j = ' + j); 
  }
//?Declaracion for in
//Itera una variable especificada sobre todas las propiedades enumerables de un objeto
//for (variable in objeto) instrucción

function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
    }
    result += '<hr>';
    return result;
  }
  
//?Declacracion for of
//Bucle que se repite sobre objetos iterable (Array, Map, Set, Arguments)
//Se ejecuta sobre el valor de cada propiedad

const arr = [3, 5, 7];
arr.foo = 'hola';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}


//TODO Consiederaciones
//* Iterar con for sobre arrays ya que tienen un indice