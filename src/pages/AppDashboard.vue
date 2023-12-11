<template>
  <h1>Dashboards</h1>

  <div class="container">
    <div class="d-flex flex-md-row gap-3">
      <DashboardWidget titulo="Usuarios Conectados"></DashboardWidget>
      <DashboardWidget titulo="Nuevos usuarios"></DashboardWidget>
      <DashboardWidget titulo="Juegos jugados"></DashboardWidget>
    </div>

    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Colors } from 'chart.js'
import DashboardWidget from '../components/dashboard/DashboardWidget.vue'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Colors)

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['January', 'February', 'March'],
  datasets: [{ data: [40, 20, 12] }]
}

const chartOptions = {
  responsive: true
}
</script>
