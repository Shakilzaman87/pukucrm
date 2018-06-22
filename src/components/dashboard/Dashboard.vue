<template>
  <v-app>
    <Navbar/>


    <v-content>

        <div class="chart-box">
            {{sales_today}}
            <canvas ref="chart"></canvas>
        </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Chart from 'chart.js';
import db from '@/firebase/init'
import moment from 'moment'

  export default {
    name:'Dashboard',
    components:{
      Navbar
    },
    data(){
      return{
            sales_today:'',
            number:1000,
            labels: [],
        }
    },
    mounted() {
            var chart = this.$refs.chart;
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {

                    labels:this.labels,

                    datasets: [{
                        label: 'Sales of June',
                        data: [this.sales_today,30,60,10],
                        backgroundColor: [
                            '#ffffff'
                        ],
                        borderColor: [
                            '#1976d2'
                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
            });



      },
      created(){
        if(6>4){
          this.labels = ["01", "02", "03", "04", "05", "06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
        }else{
          this.labels = ["01", "02", "03", "04", "05", "06","07","08","09","10","11"]
        }

        let ref = db.collection('sales').where("sales_date", "==", moment().format('DD-MM-YYYY'))
        .get()
        .then(snapshot => {
          var total = 0;
          snapshot.forEach(doc => {
            total += Number(doc.data().price)
          })
            this.sales_today = total
        })


      },
      methods:{

      }


  }
</script>

<style>

</style>
