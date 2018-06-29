<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Dashboard</h1>
                <p>Dashboard is a summary of the Puku CRM.</p>
                <v-divider class="my-3"></v-divider>
                <img width="100%" src="./../../assets/documentation/dashboard.png"><br>

                <b>Customers</b>
                <p>Number of new customers joins of current month and Total customers record are displaying here. <br>
                  Click on details for see all customers records</p>

                <b>Sales</b>
                <p>Total sales amount in current month and Total sales record are displaying here. <br>
                  Click on details for see all sales records</p>

                <b>Expenses</b>
                <p>Total sales amount in current month and Total sales record are displaying here. <br>
                  Click on details for see all expense records</p>

                <b>Leads</b>
                <p>Total leads of current month and Total leads record are displaying here. <br>
                  Click on details for see all leads records</p>

                <img src="./../../assets/documentation/dashboard-customer-updates.png"><br>
                <b>Customer Updates</b>
                <p>
                  Here you can store data of your latest deal with customers and next task have to do with them<br>
                </p>

                <img src="./../../assets/documentation/dashboard-leads-updates.png"><br>
                <b>Leads Updates</b>
                <p>
                  Here you can store data of Leads(Not customer yet) and next task have to do with them<br>
                </p>
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
  name:'DashboardDoc',
  components: {
     Navbar
  },
}
</script>

<style>


</style>
