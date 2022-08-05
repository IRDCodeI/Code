//* ----------Break - Continue-----------
//Permite cambiar el flujo de un loop o estructura de control
//? Se usan solo en estructuras de control

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < nums.length; i++) {
    if(i === 5){
        break; //Termina o sale la estructura de control
    }
    console.log(nums[i]);
}

for (let i = 0; i < nums.length; i++) {
    if(i === 5){
        continue; //Omite la ejecucion del codigo en la iteracion que se dio, 
                    //pero continua con los demas y continua la iteracion
    }
    console.log(nums[i]);
}