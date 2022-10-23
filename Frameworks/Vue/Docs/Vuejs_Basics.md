# Template Sintax

VueJS hace uso de plantillas basadas en HTML.

- Vue compila plantillas en codigo JS optimizado
- Vue con reactivdad calcula la cantidad minima de elementos a renderizar y
    lograr evitar ejecutar varias manipulaciones al DOM

## Interpolacion de Texto
___

Enlace de datos de codigo JS a HTML "Interpolacion de texto" es por mediode sintaxis Bigote `{{}}`

```
<span>Message: {{ msg }}</span>
```
- Se remplaza msg con el valor de la propiedad y actializa cada que exista cambio2
- Interpreta el texto como texto sin formato

### HTML Puro

Para enlazar una etiqueta html declara en JS se usa la `directiva v-html`, la cual lee el string HTML y lo inserta en el DOM como un elemento nuevo
- Directivas tiene el prefijo `v-`, el cual indica que es un atributo especial dado por Vue

```
<script setup>
  const rawHtml = '<span style="color: red">Esto debería ser rojo.</span>';
</script>

<template>
  <p>{{rawHtml}}</p>
  <p> v-html directive <span v-html="rawHtml"></span></p>
</template>
```
- Se reemplaza span con contenido `rawHtml`

#### Consideraciones

- No usar v-html para la reutilizacion de codigo, preferible los componentes ya que en eso se basa VueJS
- __Usar v-html puede llevar a probles de vulnerabilidad XSS, usarlo solo en contenido confible y no en proporcionado por el USUARIO.__

## Enlace de Atributos

Para enlazar atributos a etiqueta html se usa la directiva `v-bind` o abreviado `:`, lo cual indica que se mantega un atributo de html sincronizado con una propiedad del componente.
- Si el valor es null o undefined el atributos era eliminado

```
const b = "bindColor";

<p v-bind:id="b">Directiva v-bind con color azul</p>

#bindColor {
    color: blue;
}

```

## Atributos booleanos
Indica si es true o false

```
    const bool = true;
    <button :disabled="bool">Button</button>
```
- Button se le puede agregar cadena vacia para tener <... disable="">
- Para valor falso en la propiedad bool, el atributo se eliminara

## Vinculación dinámica de múltiples atributos

Si un objeto JS tiene multiple valores se los puede vincular a un elemento HTML con v-bind:

```
//JS
  const attribute = {
    id: 'button',
    class: 'button-primary'
  }

//HTML
  <button :=attribute>Button con multiples atributos "Object"</button>

//CSS

#button{
    border: solid 1px black;
  }

  .button-primary{
    background-color: blue;
  }
```
## Uso de Expresion Javascript
___

Se puede incluir todo tipo de expresion JS en Vue

```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```
- Se evaluan como JS en el componente
- Se puede usar como interpolaciones de texto
- Se puede usar como valor de atributo de directivas Vue

### Solo expresiones

Cada enlace solo puede tener una expresion (Fragmento de codigo que se puede evaluar como valor).

Lo siguente no tendra efecto:

```
<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}
```
### Funciones de llamadas ?

Se puede llamar una funcion de un componente en un expresion vinculante

```
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

- Funciones en expresiones vinculantes se llamaran cada vez que se actulize el componente. `No genera cambio de dato u operaciones asincronicas`

### Acceso global restringido ?

Las expresiones de plantilla están en un espacio aislado y solo tienen acceso a una lista [restringida de globales](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3). La lista expone globales integrados de uso común, como Mathy Date.

Los valores globales no incluidos explícitamente en la lista, por ejemplo, las propiedades adjuntas por el usuario en window, no estarán accesibles en las expresiones de plantilla. Sin embargo, puede definir explícitamente valores globales adicionales para todas las expresiones de Vue agregándolos a app.config.globalProperties.

## Directivas
___

Atributos especiales "v-" que proporciona directivas integradas, en donde estas esperan expresiones JS y actualizan de forma reactiva el DOM cuando el valor de expresion cambie

- v-if: Insertara/Elimnara `<p>` en funcion del valor `seen`

```
<p v-if="seen">Now you see me</p>
```
### Argumentos

Directiva pueden tomar argumentos por medio de `v-bin:"directiva-name/argumento"="valor"'`

```
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```
- href es el argumento vinculado con el atributo url

```
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```
- argumento evento click vinculado con doSomething

### Argumentos Dinamicos

Se puede enviar expresion JS en un argumento de directiva usando `[]`

```
<!--
Note that there are some constraints to the argument expression,
as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- shorthand -->
<a :[attributeName]="url"> ... </a>
```
- attributeName es evaluado con una expresion JS y el valor resultante sera el argumento

- Donde attributeName puede ser href --> v-bind:href
```
<a v-on:[eventName]="doSomething"> ... </a>

<!-- shorthand -->
<a @[eventName]="doSomething">
```
### Restriccion de valor de argumentos dinamicos

Argumentos dinamicos deben devolver una cadena, cuando es un valor `null` se elimina el enlace (usado para esto) y cualquier otro valor creara una advertencia

### Restricciones de sintaxis de argumentos dinamicos

Algunos caracteres como espacios, comillas no son validos dentro de HTML

```
<!-- This will trigger a compiler warning. -->
<a :['foo' + bar]="value"> ... </a>
```

__Se debe procuparar usar minusculas al nombrar claves ya que navegadores fuerzan a los atributos a estar en minus__

No funciona:
```
<a :[someAttr]="value"> ... </a>
```
- someAttr se convertira en someattr (funcion no existente)

## Modificadores 
___

Sufijos especiales indicados por `.` que indican una directiva se debe vincular de manera especial.

- .prevent invoca event.preventDefault()

```
<form @submit.prevent="onSubmit">...</form>
```
![image](https://vuejs.org/assets/directive.69c37117.png)