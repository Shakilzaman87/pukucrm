<template>
  <v-app>
    <Navbar/>
    <v-content>
      <h1>Dashboard</h1>
      <line-example></line-example>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import {Line} from 'vue-chartjs'


export default {
    extends: Line,
    components:{
      Navbar
    },
    data(){
      return{
          dialog:null
      }
    },
    mounted () {
        this.renderChart({
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#FC2525',
              data: [40, 39, 10, 40, 39, 80, 40]
            },{
              label: 'Data Two',
              backgroundColor: '#05CBE1',
              data: [60, 55, 32, 10, 2, 12, 53]
            }
          ]
        }, {responsive: true, maintainAspectRatio: false})

    }
  }
</script>

<style>
</style>
