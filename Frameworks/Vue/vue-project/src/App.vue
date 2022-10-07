<!-- https://bluuweb.github.io/vue-udemy/ -->

<script setup>
  const name = 'Vue3';
  const styleColor = "color: blue";
  const arrayColors = ['blue', 'red', 'green'];
  const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
  const logged = false;

  const arrayObjFrutas = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
        },
    ];

    const fruta = {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
    };

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

  <ul>
    <li v-for="(element, index) of arrayFrutas" :key="index">
      {{ index }} - {{ element }}
    </li>
  </ul>

  <ul>
    <li v-for="element of arrayObjFrutas" :key="element.name">
      {{element.name}} 
      {{element.price}}
      {{element.description}}
    </li>
  </ul>

  <ul>
    <li v-for="(value, prop, index) in fruta" :key="index">
      {{index}} - {{prop}}: {{value}}
    </li>
  </ul>
</template>

<style>
  h1{
    color: rgb(0, 119, 255);
  }
</style>