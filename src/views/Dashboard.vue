<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">Обзор статистики</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3 mb-20">
          <div>
            <poor-increase></poor-increase>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0 mb-20">
          <div>
            <doughnut></doughnut>
          </div>
        </div>

        <div class="w-full mt-6 px-6 xl:w-1/3 xl:mt-0 mb-20">
          <div>
            <line-chart></line-chart>
          </div>
        </div>
      </div>
    </div>


    <div>
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 xl:w-1/2 mb-20">
          <div class="h-96">
            <heat-map></heat-map>
          </div>
        </div>
        <div class="w-full px-6 xl:w-1/2 mb-20">
          <div class="h-96">
            <poor-district-line></poor-district-line>
          </div>
        </div>
      </div>
    </div>


    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div>
          </div>
        </div>

      </div>
    </div>


    <div class="mt-8"></div>

    <div class="flex flex-col mt-8">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PoorIncrease from "../components/chart/poorIncrease.vue";
import doughnut from "../components/chart/doughnut.vue";
import LineChart from "../components/chart/line.vue";
import poorDistrictLine from "../components/chart/poorDistrictLine.vue";
import HeatMap from "../components/HeatMap.vue";

interface User {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
}

export default defineComponent({
  components: {
    PoorIncrease,
    doughnut,
    LineChart,
    poorDistrictLine,
    HeatMap,
  },
  setup() {
    const testUser: User = {
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      title2: "Web dev",
      status: "Active",
      role: "Owner",
    };

    const users = ref<User[]>([...Array(10).keys()].map(() => testUser));

    return {
      users,
    };
  },
});
</script>
