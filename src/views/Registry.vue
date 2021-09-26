<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">Реестр</h3>

    <div class="mt-8">

      <div class="flex flex-col mt-6">
        <div
            class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
              class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
          >
            <table class="min-w-full">
              <thead>
              <tr>
                <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Гражданин
                </th>
                <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Субсидии
                </th>
              </tr>
              </thead>

              <tbody class="bg-white">
              <tr v-for="(u, index) in rows" :key="index">
                <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="profile pic"
                      />
                    </div>

                    <div class="ml-4">
                      <div
                          class="text-sm leading-5 font-medium text-gray-900"
                      >
                        {{ u.user.firstName }} {{ u.user.secondName }} {{ u.user.lastName }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ u.user.address }}
                      </div>
                    </div>
                  </div>
                </td>

                <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                >
                  <div v-for="(s, index) in u.subsidy" :key="index">
                    <div class="text-sm leading-5 text-gray-900">
                      {{ s.description }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ s.details.Выплата }}
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
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
           this.rows = userSubsidy
         })
     }
   },
}
</script>

<style scoped>

</style>