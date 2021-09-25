<template>
  <BarChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { BarChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);


export default defineComponent({
  name: 'poorIncrease',
  components: { BarChart },
  setup() {
    const testData = {
      labels: ['Август', 'Сентябрь', 'Октябрь'],
      datasets: [
        {
          label: 'С 3 детьми',
          data: [1000, 980, 950],
          backgroundColor: '#77CEFF',
          stack: 'Stack 0',
        },
        {
          label: 'С 2 детьми',
          data: [1200, 1180, 1160],
          backgroundColor: '#0079AF',
          stack: 'Stack 1',
        },
        {
          label: 'С 1 ребёнком',
          data: [500, 495, 490],
          backgroundColor: '#123E6B',
          stack: 'Stack 2',
        },
        {
          label: 'Без детей',
          data: [500, 495, 490],
          backgroundColor: '#97B0C4',
          stack: 'Stack 2',
        },
      ],
    };

    return { testData };
  },
});
</script>

<style scoped>

</style>