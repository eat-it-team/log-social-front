<template>
  <LineChart :chartData="data" :options="options" />
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
    const labels = [
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
    ];

    const datapoints = [];
    for (let i = 0; i < labels.length; i++) {
      datapoints.push(400 - Math.round(i * Math.random() * 2));
    }
    const datapoints2 = [];
    for (let i = 0; i < labels.length; i++) {
      datapoints2.push(300 - Math.round(i * Math.random() * 3));
    }
    const datapoints3 = [];
    for (let i = 0; i < labels.length; i++) {
      datapoints3.push(280 - Math.round(i * Math.random() * 3));
    }

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Общее число инвалидов',
          data: datapoints,
          borderColor: '#77CEFF',
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        },
        {
          label: 'Малоимущие инвалиды с признаком трудоспособности',
          data: datapoints2,
          borderColor: '#0079AF',
          fill: false,
          tension: 0.4
        },
        {
          label: 'Безработные инвалиды с признаком трудоспособности',
          data: datapoints3,
          borderColor: '#123E6B',
          fill: false
        }
      ]
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: 'Мониторинг трудоустройства инвалидов',
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'людей'
          }
        }
      },
    };

    return { data, options };
  },
});
</script>

<style scoped>

</style>