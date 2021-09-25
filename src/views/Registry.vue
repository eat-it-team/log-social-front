<template>
  <h3 class="text-gray-700 text-3xl font-medium">Реестр</h3>
</template>

<script>
import axios from '../plugins/axios'

export default {
  name: "Registry",
  setup() {
    const state = reactive({
      items: {
        limit: 10,
        offset: 0,
      },
    });
    onMounted(async () => {
      // const { data } = await axios.get(`item`, {
      //   params: {
      //     limit: state.items.limit,
      //     offset: state.items.offset,
      //   },
      // });
      // state.items = data.data;
    });

    return { state };
  },
  methods: {
    async prev() {
      // const { data } = await axios.get(`item`, {
      //   params: {
      //     limit: this.state.items.limit,
      //     offset: this.state.items.offset - this.state.items.limit,
      //   },
      // });
      // this.state.items = data.data;
    },

    async next() {
      // const { data } = await axios.get(`item`, {
      //   params: {
      //     limit: this.state.items.limit,
      //     offset: this.state.items.offset + this.state.items.limit,
      //   },
      // });
      // this.state.items = data.data;
    },

    async destroy(id) {
      // const { data } = await axios.delete(`item/${id}`);
      // console.log(data);
      // this.update();
    },

    async update() {
      // const { data } = await axios.get(`item`, {
      //   params: {
      //     limit: this.state.items.limit,
      //     offset: this.state.items.offset,
      //   },
      // });
      // this.state.items = data.data;
    },
  },
}
</script>

<style scoped>

</style>