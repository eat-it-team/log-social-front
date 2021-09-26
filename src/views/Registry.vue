<template>
  <div>
    <table id="firstTable">
      <thead>
        <tr>
          <th>Гражданин</th>
          <th>Субсидии</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
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
       axios('api/registry/v1/subsidy/user-subsidy-map')
         .then(response => {
           var userSubsidy = response.data
           var size = userSubsidy.length
           var result = new Array(size)
           for (var i = 0; i < size; i++) {
             var user = userSubsidy[i].user
             var citizen = user.firstName + ' ' + user.secondName + ' ' + user.lastName
             var subsidies = userSubsidy[i].subsidy
             var subList = ''
             for (var j = 0; j < subsidies.length; j++) {
               subList += (subsidies[j].description + '\n')
             }
             this.rows.push(citizen, subList)
           }
         })
     }
   }
}
</script>

<style scoped>

</style>