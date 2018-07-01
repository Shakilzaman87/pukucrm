<template>
  <v-app>
    <Navbar/>

    <v-content>

        <div class="chart-box">

        <div class="progress_bar" v-show="ProgressBar">
          <v-progress-circular
            :size="150"
            :width="15"
            :rotate="180"
            :value="value"
            color="primary"
          >
            {{ value }}
          </v-progress-circular>
        </div>

            <canvas ref="chart" v-show="!ProgressBar"></canvas>
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
    name:'Graph',
    components:{
      Navbar
    },
    data(){
      return{
            month:'',
            sales_today:'',
            sales_day_1:'',
            sales_day_2:'',
            sales_day_3:'',
            sales_day_4:'',
            sales_day_5:'',
            sales_day_6:'',
            sales_day_7:'',
            sales_day_8:'',
            sales_day_9:'',
            sales_day_10:'',
            sales_day_11:'',
            sales_day_12:'',
            sales_day_13:'',
            sales_day_14:'',
            sales_day_15:'',
            sales_day_16:'',
            sales_day_17:'',
            sales_day_18:'',
            sales_day_19:'',
            sales_day_20:'',
            sales_day_21:'',
            sales_day_22:'',
            sales_day_23:'',
            sales_day_24:'',
            sales_day_25:'',
            sales_day_26:'',
            sales_day_27:'',
            sales_day_28:'',
            sales_day_29:'',
            sales_day_30:'',
            sales_day_31:'',
            number:1000,
            labels: [],
            interval: {}, // progress bar
            value: 0, // progress bar
            ProgressBar:true
        }
    },
    beforeDestroy () {
     clearInterval(this.interval)
    },
    mounted() {

      // Progress Bar
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return this.ProgressBar = false
        }
        this.value += 10
      }, 1000)

      // 1 Start
      let date1 = moment().format('01-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date1)
     .get()
     .then(snapshot => {
           var total1 = 0;
           snapshot.forEach(doc => {
              total1 += Number(doc.data().total)
           })
           this.sales_day_1 = total1;

      // 2 Start
      let date2 = moment().format('02-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date2)
     .get()
     .then(snapshot => {
           var total2 = 0;
           snapshot.forEach(doc => {
              total2 += Number(doc.data().total)
           })
           this.sales_day_2 = total2;

      // 3 Start
      let date3 = moment().format('03-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date3)
     .get()
     .then(snapshot => {
           var total3 = 0;
           snapshot.forEach(doc => {
              total3 += Number(doc.data().total)
           })
           this.sales_day_3 = total3;

      // 4 Start
      let date4 = moment().format('04-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date4)
     .get()
     .then(snapshot => {
           var total4 = 0;
           snapshot.forEach(doc => {
              total4 += Number(doc.data().total)
           })
           this.sales_day_4 = total4;

      // 5 Start
      let date5 = moment().format('05-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date5)
     .get()
     .then(snapshot => {
           var total5 = 0;
           snapshot.forEach(doc => {
              total5 += Number(doc.data().total)
           })
           this.sales_day_5 = total5;

      // 6 Start
      let date6 = moment().format('06-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date6)
     .get()
     .then(snapshot => {
           var total6 = 0;
           snapshot.forEach(doc => {
              total6 += Number(doc.data().total)
           })
           this.sales_day_6 = total6;

      // 7 Start
      let date7 = moment().format('07-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date7)
     .get()
     .then(snapshot => {
           var total7 = 0;
           snapshot.forEach(doc => {
              total7 += Number(doc.data().total)
           })
           this.sales_day_7 = total7;

      // 8 Start
      let date8 = moment().format('08-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date8)
     .get()
     .then(snapshot => {
           var total8 = 0;
           snapshot.forEach(doc => {
              total8 += Number(doc.data().total)
           })
           this.sales_day_8 = total8;

      // 9 Start
      let date9 = moment().format('09-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date9)
     .get()
     .then(snapshot => {
           var total9 = 0;
           snapshot.forEach(doc => {
              total9 += Number(doc.data().total)
           })
           this.sales_day_9 = total9;

      // 10 Start
      let date10 = moment().format('10-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date10)
     .get()
     .then(snapshot => {
           var total10 = 0;
           snapshot.forEach(doc => {
              total10 += Number(doc.data().total)
           })
           this.sales_day_10 = total10;

      // 11 Start
      let date11 = moment().format('11-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date11)
     .get()
     .then(snapshot => {
           var total11 = 0;
           snapshot.forEach(doc => {
              total11 += Number(doc.data().total)
           })
           this.sales_day_11 = total11;

      // 12 Start
      let date12 = moment().format('12-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date12)
     .get()
     .then(snapshot => {
           var total12 = 0;
           snapshot.forEach(doc => {
              total12 += Number(doc.data().total)
           })
           this.sales_day_12 = total12;

      // 13 Start
      let date13 = moment().format('13-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date13)
     .get()
     .then(snapshot => {
           var total13 = 0;
           snapshot.forEach(doc => {
              total13 += Number(doc.data().total)
           })
           this.sales_day_13 = total13;

      // 14 Start
      let date14 = moment().format('14-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date14)
     .get()
     .then(snapshot => {
           var total14 = 0;
           snapshot.forEach(doc => {
              total14 += Number(doc.data().total)
           })
           this.sales_day_14 = total14;

      // 15 Start
      let date15 = moment().format('15-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date15)
     .get()
     .then(snapshot => {
           var total15 = 0;
           snapshot.forEach(doc => {
              total15 += Number(doc.data().total)
           })
           this.sales_day_15 = total15;

      // 16 Start
      let date16 = moment().format('16-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date16)
     .get()
     .then(snapshot => {
           var total16 = 0;
           snapshot.forEach(doc => {
              total16 += Number(doc.data().total)
           })
           this.sales_day_16 = total16;

      // 17 Start
      let date17 = moment().format('17-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date17)
     .get()
     .then(snapshot => {
           var total17 = 0;
           snapshot.forEach(doc => {
              total17 += Number(doc.data().total)
           })
           this.sales_day_17 = total17;

      // 18 Start
      let date18 = moment().format('18-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date18)
     .get()
     .then(snapshot => {
           var total18 = 0;
           snapshot.forEach(doc => {
              total18 += Number(doc.data().total)
           })
           this.sales_day_18 = total18;

      // 19 Start
      let date19 = moment().format('19-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date19)
     .get()
     .then(snapshot => {
           var total19 = 0;
           snapshot.forEach(doc => {
              total19 += Number(doc.data().total)
           })
           this.sales_day_19 = total19;

      // 20 Start
      let date20 = moment().format('20-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date20)
     .get()
     .then(snapshot => {
           var total20 = 0;
           snapshot.forEach(doc => {
              total20 += Number(doc.data().total)
           })
           this.sales_day_20 = total20;

      //21 Start
      let date21 = moment().format('21-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date21)
     .get()
     .then(snapshot => {
           var total21 = 0;
           snapshot.forEach(doc => {
              total21 += Number(doc.data().total)
           })
           this.sales_day_21 = total21;

      //22 Start
      let date22 = moment().format('22-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date22)
     .get()
     .then(snapshot => {
            var total22 = 0;
            snapshot.forEach(doc => {
               total22 += Number(doc.data().total)
            })
            this.sales_day_22 = total22;

      //23 Start
      let date23 = moment().format('23-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date23)
     .get()
     .then(snapshot => {
            var total23 = 0;
            snapshot.forEach(doc => {
               total23 += Number(doc.data().total)
            })
            this.sales_day_23 = total23;

      //24 Start
      let date24 = moment().format('24-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date24)
     .get()
     .then(snapshot => {
            var total24 = 0;
            snapshot.forEach(doc => {
               total24 += Number(doc.data().total)
            })
            this.sales_day_24 = total24;

      //25 Start
      let date25 = moment().format('25-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date25)
     .get()
     .then(snapshot => {
            var total25 = 0;
            snapshot.forEach(doc => {
               total25 += Number(doc.data().total)
            })
            this.sales_day_25 = total25;

      //26 Start
      let date26 = moment().format('26-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date26)
     .get()
     .then(snapshot => {
            var total26 = 0;
            snapshot.forEach(doc => {
               total26 += Number(doc.data().total)
            })
            this.sales_day_26 = total26;

      //27 Start
      let date27 = moment().format('27-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date27)
     .get()
     .then(snapshot => {
            var total27 = 0;
            snapshot.forEach(doc => {
               total27 += Number(doc.data().total)
            })
            this.sales_day_27 = total27;

      //28 Start
      let date28 = moment().format('28-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date28)
     .get()
     .then(snapshot => {
            var total28 = 0;
            snapshot.forEach(doc => {
               total28 += Number(doc.data().total)
            })
            this.sales_day_28 = total28;

      //29 Start
      let date29 = moment().format('29-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date29)
     .get()
     .then(snapshot => {
            var total29 = 0;
            snapshot.forEach(doc => {
               total29 += Number(doc.data().total)
            })
            this.sales_day_29 = total29;

      //30 Start
      let date30 = moment().format('30-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date30)
     .get()
     .then(snapshot => {
            var total30 = 0;
            snapshot.forEach(doc => {
               total30 += Number(doc.data().total)
            })
            this.sales_day_30 = total30;

      //31 Start
      let date31 = moment().format('31-MM-YYYY');
      db.collection('sales').where("sales_date", "==", date31)
     .get()
     .then(snapshot => {
            var total31 = 0;
            snapshot.forEach(doc => {
               total31 += Number(doc.data().total)
            })
            this.sales_day_31 = total31;


      // Chart Code Start
      var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
      var d = new Date();
      var chart = this.$refs.chart;
      var ctx = chart.getContext("2d");
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels:this.labels,
              datasets: [{
                  label: 'Sales of '+ monthNames[d.getMonth()],
                  data: [this.sales_day_1,this.sales_day_2,this.sales_day_3,this.sales_day_4,this.sales_day_5,
                         this.sales_day_6,this.sales_day_7,this.sales_day_8,this.sales_day_9,this.sales_day_10,
                         this.sales_day_11,this.sales_day_12,this.sales_day_13,this.sales_day_14,this.sales_day_15,
                         this.sales_day_16,this.sales_day_17,this.sales_day_18,this.sales_day_19,this.sales_day_20,
                         this.sales_day_21,this.sales_day_22,this.sales_day_23,this.sales_day_24,this.sales_day_25,
                         this.sales_day_26,this.sales_day_27,this.sales_day_28,this.sales_day_29,this.sales_day_30,this.sales_day_31],
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
                      },
                      legend: {
                          display: false
                      },
                      tooltips: {
                          callbacks: {
                             label: function(tooltipItem) {
                                    return tooltipItem.label;
                             }
                          }
                      }
                  }]
              }
          },
        });
        // Chart Code End

        }) // 31 End
        }) // 30 End
        }) // 29 End
        }) // 28 End
        }) // 27 End
        }) // 26 End
        }) // 25 End
        }) // 24 End
        }) // 23 End
        }) // 22 End
        }) // 21 End
        }) // 20 End
        }) // 19 End
        }) // 18 End
        }) // 17 End
        }) // 16 End
        }) // 15 End
        }) // 14 End
        }) // 13 End
        }) // 12 End
        }) // 11 End
        }) // 10 End
        }) // 9 End
        }) // 8 End
        }) // 7 End
        }) // 6 End
        }) // 5 End
        }) // 4 End
        }) // 3 End
        }) // 2 End
        }) // 1 End

      },
      created(){
        var d = new Date();
        this.month = d.getMonth();

        if(this.month == 0 || this.month == 2 || this.month == 4 || this.month == 6 || this.month == 7 || this.month == 9 || this.month == 11 ){
          this.labels = ["01", "02", "03", "04", "05", "06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
        }else{
          this.labels = ["01", "02", "03", "04", "05", "06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
        }

      },
      methods:{

      }


  }
</script>

<style>
.progress_bar{
  text-align: center
}

.progress-circular{
  margin: 15rem
}

</style>
