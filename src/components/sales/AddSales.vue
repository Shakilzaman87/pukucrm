<template>
  <v-app>

      <Navbar/>
      <v-content>

        <form @submit.prevent="addNewSales">
        <v-card>

          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    prepend-icon="shopping_cart"
                    placeholder="Item Name"
                    required
                    v-model="item_name"
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
                    v-model="price"
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
                    v-model="quantity"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10>
                <v-select
                    prepend-icon="group"
                    v-bind:items="customers"
                    v-model="customer"
                    label="Customer"
                    item-text="customer_name"
                    item-value="customers"
                    single-line
                    bottom
                    autocomplete
                ></v-select>
              </v-flex>

              <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Add Sales</v-btn>
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
  name:'AddSales',
  components:{
    Navbar
  },
  data(){
    return{
      dialog:null,
      item_name:null,
      price:null,
      quantity:null,
      customer:'',
      total:null,
      timestamp:null,
      feedback:null,
      customers: [],
    }
  },
  methods:{
      addNewSales(){

          if(this.item_name){

          let ref = db.collection('sales');
            ref.add({
              item_name:this.item_name,
              price:this.price,
              quantity:this.quantity,
              customer:this.customer,
              total:parseFloat(this.price * this.quantity),
              sales_date:moment().format('DD-MM-YYYY'),
              created_month:moment().format('MM-YYYY'),
              timestamp:Date.now()
            })
            this.item_name=null
            this.price=null
            this.quantity=null
            this.customer=null
          }
          this.$router.push({ name: 'Sales'})
      },
   },
   created(){

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
