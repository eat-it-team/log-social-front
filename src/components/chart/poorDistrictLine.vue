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
    const labelsX = [
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
    ];
    const labels = [
        'Алнашский',
        'Балезинский',
        'Вавожский',
        'Воткинский',
        'Глазовский',
        'Граховский',
        'Дебёсский',
        'Завьяловский',
        'Игринский',
        'Камбарский',
        'Каракулинский',
        'Кезский',
        'Кизнерский',
        'Киясовский',
        'Красногорский',
        'Малопургинский',
        'Можгинский',
        'Сарапульский',
        'Селтинский',
        'Сюмсинский',
        'Увинский',
        'Шарканский',
        'Юкаменский',
        'Якшур-Бодьинский',
        'Ярский',
    ];
    const colors = ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#3D91B5', '#79C3E2', '#3D91B5', '#79C3E2', '#1F3F4C', '#B1C7D0', '#9397EB', '#D7B8FF'];

    const data = {
      labels: labelsX,
      datasets: [],
    };

    for (const labelsKey in labels) {
      let values = [];
      let initVal = Math.random() * 120 + 20; //30..140
      for (let j = 0; j < labelsX.length; j++) {
        values.push(initVal + Math.random() * 20 - 10);//+-10
      }
      data.datasets.push({
        label: labels[labelsKey],
        data: values,
        fill: false,
        borderColor: colors[Math.floor(Math.random()*colors.length)],
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      });
    }

    return { data };
  },
});
</script>

<style scoped>

</style>