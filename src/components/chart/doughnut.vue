<template>
  <DoughnutChart :chartData="data" />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);


export default defineComponent({
  name: 'doughnut',
  components: { DoughnutChart },
  setup() {
    const data = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { data };
  },
});
</script>

<style scoped>

</style>