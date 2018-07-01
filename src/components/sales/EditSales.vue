<template>
  <v-app>

      <Navbar/>
      <v-content>

        <form @submit.prevent="editSales">
        <v-card>

          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    prepend-icon="shopping_cart"
                    placeholder="Item Name"
                    required
                    v-model="sales.item_name"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    type="number"
                    prepend-icon="local_atm"
                    placeholder="Price"
                    required
                    v-model="sales.price"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    type="number"
                    prepend-icon="note_add"
                    placeholder="Quantity"
                    required
                    v-model="sales.quantity"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10>
                <h4 v-if="sales.customer">Customer Name: {{sales.customer.customer_name}}</h4>
                <v-select
                    prepend-icon="group"
                    v-bind:items="customers"
                    v-model="sales.customer"
                    label="Customer"
                    item-text="customer_name"
                    item-value="sales.customer"
                    autocomplete=true
                    single-line
                    bottom
                ></v-select>
              </v-flex>

              <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Update Sales</v-btn>
              </v-flex>

            </v-layout>
          </v-container>

        </v-card>
        </form>


      </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'EditSales',
  components:{
    Navbar
  },
  data(){
    return{
      item_name:null,
      price:null,
      quantity:null,
      customer:null,
      total:null,
      feedback:null,
      sales:[],
      customers:[]
    }
  },
  methods:{
      editSales(){
        if(this.sales.item_name){

          let ref = db.collection('sales').doc(this.$route.params.id);

          ref.update({
            item_name:this.sales.item_name,
            price:this.sales.price,
            quantity:this.sales.quantity,
            customer:this.sales.customer,
            total:parseFloat(this.sales.price * this.sales.quantity),
          })

        }
        this.$router.push({ name: 'Sales'})
      }
  },
  created(){
          // Show data of a specific sales
          db.collection("sales").doc(this.$route.params.id).onSnapshot(doc =>{
             this.sales = doc.data()
             this.sales.id = doc.id
          })

          // Show All Customers
          let ref = db.collection('customers').orderBy('timestamp', 'desc')

          ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
              if(change.type == 'added'){
                let doc = change.doc
                this.customers.push({
                  id:doc.id,
                  customer_name:doc.data().customer_name
                })
              }
            })
          })

  }
}
</script>

<style>

</style>
