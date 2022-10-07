<!-- https://bluuweb.github.io/vue-udemy/ -->

<script setup>
  const name = 'Vue3';
  const styleColor = "color: blue";
  const arrayColors = ['blue', 'red', 'green']
  const logged = false;
</script>

<template>
  <h1>{{ name.toUpperCase() }}</h1> 
  <h2 :style="`color: ${arrayColors[2]}`"> VueJS Color </h2>
  <h2>{{ arrayColors }}</h2>
  <!-- <h2>{{logged ? 'Logeado' : 'Deslogeado'}}</h2> -->
  <p v-if="logged">
    <span>Icon</span>
    Activo
  </p>
  <p v-else-if="logged === false">Inactivo</p>
  <p v-else>Unknow</p>

  <h2 v-show="logged">Activo VS v-show</h2>
</template>

<style>
  h1{
    color: rgb(0, 119, 255);
  }
</style>