// Inicio Aplicacion VueJS
import { createApp } from 'vue' // --> Modulo para crear aplicacion
import App from './App.vue' // --> Importacion de SFC desde otro archivo "Root Component"

import './assets/main.css'

createApp(App).mount('#app')    // --> Funcion para crear y montar aplicacion VueJS
