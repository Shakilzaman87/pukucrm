<template>
  <v-app>

      <Navbar/>
    <div>
      <v-content>
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Item Name </th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Customer</th>
              <th>Created</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sale in sales" :key="sale.id">

              <td>{{sale.item_name}}</td>
              <td>{{sale.price}}</td>
              <td>{{sale.quantity}}</td>
              <td>{{sale.customer}}</td>
              <td>{{sale.timestamp}}</td>
              <td>{{sale.total}}</td>
              <td>
                <v-btn fab dark small color="cyan" :to="{name: 'EditSales', params: {id:sale.id}}">
                   <v-icon dark>edit</v-icon>
                </v-btn>
                <v-btn fab dark small color="pink" @click="removeSales(sale.id)">
                   <v-icon dark>remove</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>


        <!-- Add Customer Button  -->
        <v-btn :to="{name: 'AddSales'}"
          fab
          bottom
          right
          color="indigo"
          dark
          fixed
        >
          <v-icon>add</v-icon>
        </v-btn>

      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'Sales',
  components: {
     Navbar
  },
  data(){
      return{
        sales:[],
      }
  },
  methods:{
      removeSales(id){
        var deleteResult = confirm("Want to delete?");
        if (deleteResult) {
          db.collection('sales').doc(id).delete().then(() => {
            this.sales = this.sales.filter(sale => {
              return sale.id != id
            })
          })
        }
      }

  },
  created(){

      // Show All Customers
      let ref = db.collection('sales').orderBy('timestamp', 'desc')

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type == 'added'){
            let doc = change.doc
            this.sales.push({
              id:doc.id,
              item_name:doc.data().item_name,
              price:doc.data().price,
              quantity:doc.data().quantity,
              customer:doc.data().customer.customer_name,
              total:doc.data().total,
              timestamp:moment(doc.data().timestamp).format('ll')
            })
          }
        })
      })
     }
}
</script>

<style>
tbody a{
  font-size: 13px;
  color:black;
  text-decoration: underline;
}

td{
  text-align: center;
}
</style>
