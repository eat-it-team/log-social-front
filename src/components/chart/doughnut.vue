<template>
  <DoughnutChart :chartData="data" :options="options" />
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
      labels: [
        'Подростковый (от 14 до 17 лет)',
        'Юношеский (18-21)',
        'Взрослый (22-39)',
        'Зрелый (40-56)',
        'Пожилой (56-63)',
        'Старческий (71-83)',
        'Позднестарческий (от 84)',
      ],
      datasets: [
        {
          data: [7, 11, 14, 19, 24, 20, 16],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#3D91B5', '#79C3E2'],
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: 'Количество людей за чертой бедности в зависимости от возраста',
        },
      },
    };

    return { data, options };
  },
});
</script>

<style scoped>

</style>