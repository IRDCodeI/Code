//* Ejercicios (1) JS

//? 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
//? pe. miFuncion("Hola Mundo") devolverá 10.

const contar = (cadena) => {
    if(typeof cadena !== 'string'){
        throw new Error('No es una cadena');        
    }else{

        console.log(cadena.length);
    };
}

/*
    const contar = (cadena = "") => 
        (!cadena) 
            ? console.warm('No cadena') 
            : console.info(`cadena es ${cadena} tiene ${cadena.length} caracteres`)
*/

contar('Hola Mundo');

//? 2) Programa una función que te devuelva el texto recortado según el número de caracteres
//? indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const cortar = (cadena, num) => {
    if(typeof cadena !== 'string'){
        throw new Error('No es una cadena');
    }else{
        console.log(cadena.slice(0, num));    
    }
}

cortar('Hola Mundo', 4);

//? 3) Programa una función que dada una String te devuelva un Array de textos separados 
//? por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const separar = (cadena, separador) => {
    if(typeof cadena !== 'string'){
        throw new Error('No es cadena');
    }else{
        console.log(cadena.split(separador));
    }
}

separar('hola que tal', ' ');

//? 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
//?devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetir = (cadena, num) => {
    if(typeof cadena !== 'string'){
        throw new Error('No es cadena');
    }else{
       console.log(`${cadena.repeat(num)}`)
    }
}

repetir('Hola Mundo ', 3);


//? 5) Programa una función que invierta las palabras de una cadena de texto, 
//? pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertir = (cadena) => {
    if(typeof cadena !== 'string'){
        throw new Error('No es cadena');
    }else{
       const array = cadena.split('');
       array.reverse();
       console.log(array.join(''));
    }
}

invertir('Hola Mundo');

//? 6) Programa una función para contar el número de veces que se repite una palabra en un texto 
//? largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const repetido = (cadena, palabra) => {
    if(typeof cadena !== 'string'){
        throw new Error('No es cadena');
    }else{
       let expReg = new RegExp(palabra, 'g')
       console.log(cadena.match(expReg).length);
    }
}

repetido('hola mundo adios mundo Mundo', 'mundo')

//? 7) Programa una función que valide si una palabra o frase dada, es un
//? palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra) => {
    if(typeof palabra !== 'string'){
        throw new Error('No es cadena');
    }else{

        let aux = palabra.toLowerCase().split('');

        for(let i = 0 ; i < aux.length; i ++){
            if (palabra.charAt(i).localeCompare(aux[aux.length - (i+1)])){
                throw new Error('No es Palindromo');
            }
        }
        console.log('Palindromo');
    }
}

palindromo('oso');

//? 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
//? miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminar = (cadena, regExp) => {

    let aux = new RegExp(regExp, 'g');

    (typeof cadena != 'string') ?
        console.warn('No es cadena')
        : console.log(cadena.replace(aux, '').split(','))
}

eliminar('xyz1, xyz2, xyz3, xyz4, xyz5', 'xyz');

//? 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

//? 10) Programa una función que reciba un número y evalúe si es capicúa o 
//? no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

//? 11) Programa una función que calcule el factorial de un número (El factorial de un 
//? entero positivo n, se define como el producto de todos los números enteros positivos desde 1
//?  hasta n), pe. miFuncion(5) devolverá 120.