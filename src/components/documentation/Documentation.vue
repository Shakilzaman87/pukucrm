<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h3 class="display-1">Puku CRM</h3>
                <span class="subheading">
                  Puku CRM is an online based Customer Relationship Management software that is<br>
                  perfectly fit for any kind of business, company, freelancers or any business<br>
                  related uses. Puku CRM created with modern design that works on any devices.
                </span>
                <v-divider class="my-3"></v-divider>
                <div class="title mb-3">Documentation</div>
                <v-btn large color="primary" class="mx-0">Installation</v-btn><br>
                <v-btn large color="primary" class="mx-0">Dashboard</v-btn><br>
                <v-btn large color="primary" class="mx-0">Customers</v-btn><br>
                <v-btn large color="primary" class="mx-0">Sales</v-btn><br>
                <v-btn large color="primary" class="mx-0">Sales Graph of this Month</v-btn><br>
                <v-btn large color="primary" class="mx-0">Leads</v-btn><br>
                <v-btn large color="primary" class="mx-0">Live Chat</v-btn><br>
                <v-btn large color="primary" class="mx-0">Settings</v-btn><br>

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
  name:'Documentation',
  components: {
     Navbar
  },
}
</script>

<style>


</style>
