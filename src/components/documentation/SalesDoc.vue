<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Sales</h1>
                <p>Collection of all Sales</p>
                <v-divider class="my-3"></v-divider>

                <img width="100%" src="./../../assets/documentation/sales.png"><br>
                <h3>Features</h3>
                <p>
                  <li>Display all Sales</li>
                  <li>Search Sales</li>
                  <li>Edit Sales</li>
                  <li>Delete Sales</li>
                </p>

                <h3>Add Sales  </h3>
                <img src="./../../assets/documentation/sales-add.png"><br>

                <h3>Edit Sales </h3>
                <img src="./../../assets/documentation/sales-edit.png"><br>
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
  name:'SalesDoc',
  components: {
     Navbar
  },
}
</script>

<style>


</style>
