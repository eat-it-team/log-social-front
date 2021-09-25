<template>
  <LineChart :chartData="data" />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { LineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);


export default defineComponent({
  name: 'lineChart',
  components: { LineChart },
  setup() {
    const DATA_COUNT = 12;
    const labels = [];

    for (let i = 0; i < DATA_COUNT; ++i) {
      labels.push(i.toString());
    }
    const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
    const datapoints2 = [0, 30, 25, 65, 65, 125, NaN, 185, 125, 120, 100, 115, 175];
    const datapoints3 = [0, 40, 35, 75, 75, 135, NaN, 195, 135, 130, 110, 125, 185];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Cubic interpolation (monotone)',
          data: datapoints,
          borderColor: '#77CEFF',
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        },
        {
          label: 'Cubic interpolation',
          data: datapoints2,
          borderColor: '#0079AF',
          fill: false,
          tension: 0.4
        },
        {
          label: 'Linear interpolation (default)',
          data: datapoints3,
          borderColor: '#123E6B',
          fill: false
        }
      ]
    };

    return { data };
  },
});
</script>

<style scoped>

</style>