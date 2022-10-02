//* ----------Destructuring---------
//Destructuracion, permite asignar valores de arreglos y objetos a variables

const nums = [1, 2, 3];

//? Normal
let uno = nums[0], dos = nums[1];

//? Destructuracion

const [one, two, three] = nums; // -> Guarda posiciones del arreglos en la variables

console.log(one, two)

let persona = {
    name: 'Stalin',
    lasname: 'Pillajo',
    age: 20
}

//Para que destructuracion funcione en objetos las variable a usar
//debe ser igual a la propiedad
//  - No importa el order

let {name, age, lasname} = persona;

console.log(name, lasname, age);
