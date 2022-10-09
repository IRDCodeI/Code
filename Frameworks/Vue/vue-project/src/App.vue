<!-- https://bluuweb.github.io/vue-udemy/ -->

<script setup>
  import { ref, computed } from 'vue'

  const name = 'VueJS 3';
  // const countHigger = "color: green;",
  //       countLower = "color:red";
  const arrayColors = ['blue', 'red', 'green'];
  const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
  const logged = false;

  const arrayObjFrutas = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
            stock: 0
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
            stock: 10
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
            stock: 20 
        },
    ];

    const fruta = {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
    };

    //Metodo - methods
    const handleClick = (msg) => {
        console.log(msg);
    }

    const count = ref(0);

    const increment = () => {
      console.log(`Contador ${count.value++}`);
    }

    const decrement = () => {
      console.log(`Contador ${count.value--}`);
    }

    const classCounter = computed(() => {
      if( count.value == 0){
        return 'zero';
      }else if ( count.value >= 0){
        return 'positive'
      }else if(count.value <= 0){
        return 'negative'
      }
    });

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
  <template v-for="fruta in arrayObjFrutas" :key="fruta.name">
        <li v-if="fruta.stock > 0">
            {{ fruta }}
        </li>
  </template>
  <button v-on:click.right.prevent="handleClick('Texto Derecho')">Activar Derecho</button>
  <button @click="handleClick('Texto Izquierdo')">Activar Izquierdo</button>
  <button @click.middle="handleClick('Texto Centro')">Activar Centro</button>
  <!-- <template v-if="count > 0">
    <h2 :style="countHigger"> {{ count }}</h2>
  </template>
  <template v-else>
    <h2 :style="countLower"> {{ count }}</h2>
  </template> -->
  <!-- <h2 :class=" count >= 0 ? 'positive' : 'negative'">{{count}}</h2> -->

  <h2 :class="classCounter">{{count}}</h2>
  <button @click="increment()">Aumentar</button>
  <button @click="decrement()">Disminuir</button>
</template>

<style>
  h1{
    color: rgb(0, 119, 255);
  }

  .negative{
    color: red;
  }
  .positive{
    color:green;
  }

</style>