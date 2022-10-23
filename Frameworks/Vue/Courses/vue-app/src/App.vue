<script setup>
  const rawHtml = '<span style="color: red">Esto debería ser rojo.</span>';
  const b = "bindColor";
  const bool = true;
  const attribute = {
    id: 'button',
    class: 'button-primary'
  }

  function toTitleDate(date){
    return date;
  }

  function formatDate(){
    return 'date';
  }
</script>

<template>
  <h1> VueJS </h1>
  <h2>Directiva: v-html</h2>
  <p>{{rawHtml}}</p>
  <p> v-html directive <span v-html="rawHtml"></span></p>
  <hr>
  <h2>Directiva v-bind</h2>
  <p v-bind:id="b">Directiva v-bind con color azul</p>
  <p>Buton Deshabilitado: </p>
  <button :disabled="bool">Button</button>
  <button :=attribute>Button con multiples atributos "Object"</button>
  <hr>
  <h2>Expresiones JS</h2>
  <span :title="toTitleDate('date')">
  {{ formatDate() }}
</span>

</template>

<style scoped>
  #bindColor {
    color: blue;
  }

  #button{
    border: solid 1px black;
  }

  .button-primary{
    background-color: blue;
  }
</style>
