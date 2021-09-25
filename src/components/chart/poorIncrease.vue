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
          label: 'Малоимущие',
          data: [1000, 950, 900],
          backgroundColor: '#77CEFF',
          stack: 'Stack 0',
        },
        {
          label: 'Инвалиды',
          data: [1200, 1150, 1100],
          backgroundColor: '#0079AF',
          stack: 'Stack 1',
        },
        {
          label: 'Dataset 3',
          data: [900, 850, 800],
          backgroundColor: '#123E6B',
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