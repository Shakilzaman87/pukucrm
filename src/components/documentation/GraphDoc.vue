<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Sales graph of this month</h1>
                <p>Overview of sales in current month</p>
                <v-divider class="my-3"></v-divider>
                <p>
                  Well this is an excellent feature. You already know how to add sales of each day<br>
                  This chart will show the total sales of each day and a complete sales history of <br>
                  this current month.
                </p>
                <img width="100%" src="./../../assets/documentation/graph.png"><br>



              </v-flex>
            </v-layout>
          </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
export default {
  name:'GraphDoc',
  components: {
     Navbar
  },
}
</script>

<style>
.list{
  margin-left: 8px;
}

</style>
