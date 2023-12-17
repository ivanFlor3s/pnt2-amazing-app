<template>
    <h1>Resultado</h1>
  
    <div class="container">
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
       
      
    </div>
  </template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Colors } from 'chart.js'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { gameStore } from '../stores/game-state';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
ChartJS.register(Colors)
const game = gameStore()
const usuarios = game.users
let nombres = []
let puntos = []

usuarios.forEach(element =>{
  nombres.push(element.userName)
 
})
puntos.push({
    data: usuarios.map(e =>e.puntaje),
    label: 'puntos'
  })


     const chartData = {
        labels: nombres,
        datasets: puntos
      }
      const chartOptions = {
        responsive: true
      }




</script>