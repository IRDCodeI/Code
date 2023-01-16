import { Component, OnInit } from '@angular/core'; //Importacion de Componente

@Component({ // @Decorador: Agrega opciones a la clase despues
  selector: 'app-header', // Nombre del componente
  templateUrl: './header.component.html', // Html del componente - alternativa "template: 'codigo html'" Plantilla
  styleUrls: ['./header.component.css'] // CSS del componente - alternativa "styles: 'codigo css'"; [] nos permite dar varias direcciones de archivo css Estilo
  // animations "animaciones"
  // changeDetection "forma de detectar cambios en variables del componente"
  // encapsulation "encapsulacion de css para el componente y que no se aplique en toda la app los estilos"
  // host "Agregar propiedades a la raiz del componente"
})
export class HeaderComponent { //Exportacion de clase o logica del componente
  
  nombre = "Alex"; // Variable
  contador = 0;
  arr = [1,2,3,4,5]

  constructor(){ // Codigo que se ejecuta para construir la clase
    console.log('Clase Header Creada');
  }

  ngOnInit(){ // Codigo que se ejecuta despues de que el componente se haya creado correctamente
    console.log('Componente Header Creado')
  }

  changeName() {
    this.nombre = 'Carlos'
  }

  sum(){
    this.contador ++
  }

  add(){
    this.arr.push(Math.random())
  }

}
