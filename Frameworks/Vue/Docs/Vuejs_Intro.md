# VueJs

Framework de JS para construccion de UI, provee modelo de programacion declarativo y basado en componentes.


 - ___Representacion declarativa___: Sintaxis de plantilla que permite describir salida HTML en funcion del estado JS
- ***Reactividad***: Rastrea cambios de JS y actualiza el DOM al momento de los cambios

## Progressive Framework

Vue es flexible y escalable permitiendo crecer con nuestras necesidades.

Casos de usos son:

 - Mejora HTML sin compilacion
 - Incrusta componetes en cualquier pagina
 - SPA (Single Page Application)
 - Fullstack / SSR (Server Side Rendering)
 - Jamstack / SSG (Static Generation)
 - Vue se encarga de la compilacion

## Single-File Components

Vue usa formato similar HTML (Single-File Components SFC "SFC" "*.vue"). Este encapsula toda la logica JS, HTML y CSS en un archivo

~~~
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
~~~

## API Style

### Api de Opciones

Se define la logica del componente usando un objeto de opciones como data, methods, mounted, las cuales es exponen en "this" funciones internas que apuntan a instancia del componente.

~~~
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

~~~

### API de composicion

Logica de componente usando funciones de API importadas.

Se usa `<script setup>` donde setup hace que Vue realice transformaciones en tiempo de compilacion

`Ejemplo:` Importaciones, variables, funciones en este elemento permite que sean usadas en la plantilla

~~~
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

~~~

## Consideraciones

- Ambas APIS son validas
  - API de opciones se usa con `this` y es similar a POO
  - API de composicion se centra en declarar variables de esto reactivas en el ambito de la funcion y usar varias funcion para la complejidad

- API de opciones para no usar compilacion o para baja complejidad 
- API composicion + SFC para aplicaciones completas

---

# Projecto VueJS

## Creacion de Projectos VueJS

```
  npm init vue
  cd <project-name>
  npm install
  npm run dev
```

### Compilar para produccion

```
npm run build
```

## Montaje de Aplicacion

Se usa el metodo mount() tiene como argumento "contendor" un string o elemento del DOM.
  - __E.Contenedor__ no es considerado un elemento del DOM
  - Llama a la instancia del componente raiz
    - No se llama a la instancia de la aplicacion2
```
<div id="app"></div>
app.mount("#app")
```
## Configuracion de Aplicaciones

Instancia de app permite usar un objeto `.config()` para configuracion opciones a nivel de aplicacion
  * Manejadores de errores en componentes descendientes

```
app.config.errorHandler = (err) => {
  /* handle error */
}
```

Permite registrar app-scoped assets
  - Hace que 'TodoDelete Button' este disponible en cualquier lugar de la   apilcacion

```
app.component('TodoDeleteButton', TodoDeleteButton)
```
__Todas las configuracion de registro o errores por ejemplo se debe realizar antes de montar la aplicacion__

### Montaje de Multiples aplicaciones
___

createApp API permite instanciar multiples aplcaciones y que estas coexistan en la misma pagina cada una con su configuracion y global-assests