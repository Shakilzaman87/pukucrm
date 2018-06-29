<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Expenses</h1>
                <p>Collection of all Expenses</p>
                <v-divider class="my-3"></v-divider>

                <img width="100%" src="./../../assets/documentation/expenses.png"><br>
                <h3>Features</h3>
                <div class="list">
                  <li>Display all Expneses</li>
                  <li>Search Expneses</li>
                  <li>Edit Expenses</li>
                  <li>Delete Expenses</li>
                </div>

                <h3>Add Expneses  </h3>
                <img src="./../../assets/documentation/expenses-add.png"><br>

                <h3>Edit Expenses </h3>
                <img src="./../../assets/documentation/expenses-edit.png"><br>
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
  name:'ExpneseDoc',
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
