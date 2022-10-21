<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="container m-auto w-auto h-auto border-solid rounded-md">
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1366.5 388.5"
      class="absolute hidden lg:block"
      >
      <defs>
        <linearGradient id="Degradado_sin_nombre_4" x1="0.25" y1="255.25" x2="1365.75" y2="255.25"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#cce0f4" />
          <stop offset="0.04" stop-color="#c3dcf2" />
          <stop offset="0.1" stop-color="#a9d2ee" />
          <stop offset="0.18" stop-color="#80c2e7" />
          <stop offset="0.28" stop-color="#47acde" />
          <stop offset="0.34" stop-color="#1e9cd7" />
          <stop offset="0.87" stop-color="#0075be" />
          <stop offset="0.99" stop-color="#005b97" />
        </linearGradient>
        <linearGradient id="Cielo" x1="-0.25" y1="255.25" x2="1366.25" y2="255.25" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#cce0f4" />
          <stop offset="0.06" stop-color="#c3dcf2" />
          <stop offset="0.17" stop-color="#a9d2ee" />
          <stop offset="0.31" stop-color="#80c2e7" />
          <stop offset="0.46" stop-color="#47acde" />
          <stop offset="0.57" stop-color="#1e9cd7" />
          <stop offset="0.87" stop-color="#0075be" />
          <stop offset="0.99" stop-color="#005b97" />
        </linearGradient>
      </defs>
      <path
        d="M1365.75,371.46C795.13,85.72,633.53,65.08,609,116.06c-20.78,43.24,65.91,119.62,48,196.65C626.25,444.86,315.2,460.32.25,443.41L.75,61.5h1365Z"
        transform="translate(0.25 -61)"
        style="stroke-miterlimit:10;fill:url(#Degradado_sin_nombre_4);stroke:url(#Cielo)" />
    </svg>
    <div class="m-2 p-10 w-auto flex flex-row justify-around items-center">
      <div class="flex flex-col justify-center">
        <h2 class="m-2 text-center text-7xl font-mono font-semibold"> Andrew </h2>
        <p class="m-2 text-lg text-center font-sans"> Bot de discord desarrollado con Javascript</p>
        <button type="button" class="m-2 uppercase text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2">Invitarme</button>
      </div>
      <div class="">
        <img src="../components/icons/robot.svg" class="h-72" alt="">
      </div>
    </div>
  </div>
  <!-- <div class="w-screen bg-slate-500 m-0 ">
    <h2>Bot Andrew</h2>
  </div> -->
  <Footer/>
</template>