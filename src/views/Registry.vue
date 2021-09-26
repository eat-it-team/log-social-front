<template>
  <div>
    <table id="firstTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
          <td>{{row.phone}}</td>
          <td>{{row.profession}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from '../plugins/axios'

export default {
  name: "Registry",
   created() {
     this.loadData()
   },
   data() {
     return {
       rows: []
     }
   },
   methods: {
     loadData: function() {
       axios.get('api/registry/v1/subsidy/user-subsidy-map')
         .then(response => {
           console.log(response.data)
         });
     }
   }
}
</script>

<style scoped>

</style>