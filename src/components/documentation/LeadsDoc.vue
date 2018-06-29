<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Leads</h1>
                <p>Collection of all Leads (Not Customer yet but interested)</p>
                <v-divider class="my-3"></v-divider>

                <img width="100%" src="./../../assets/documentation/leads.png"><br>
                <h3>Features</h3>
                <p>
                  <li>Display all Leads</li>
                  <li>Search Leads</li>
                  <li>Edit Leads</li>
                  <li>Delete Leads</li>
                </p>

                <h3>Add Leads  </h3>
                <img src="./../../assets/documentation/leads-add.png"><br>

                <h3>Edit Leads </h3>
                <img src="./../../assets/documentation/leads-edit.png"><br>

                <h3>Leads's Update</h3>
                <img src="./../../assets/documentation/leads-update.png"><br>
                <p>This is a complete view of an individual lead.<br>
                  Also You can add leads's update here. Any type of dealing, to do, or <br>
                  dealing story you can write down here.
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
  name:'LeadsDoc',
  components: {
     Navbar
  },
}
</script>

<style>


</style>
