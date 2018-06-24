<template>
  <v-app>

      <Navbar/>
    <div>
      <v-content>
        <v-card-title>
          Nutrition
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="sales"
          :search="search"
          :rows-per-page-items="rowsPerPageItems"
        
          row
          wrap
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-right">{{ props.item.item_name }}</td>
            <td class="text-xs-right">{{ props.item.price }}</td>
            <td class="text-xs-right">{{ props.item.quantity }}</td>
            <td class="text-xs-right">{{ props.item.customer }}</td>
            <td class="text-xs-right">{{ props.item.timestamp }}</td>
            <td class="text-xs-right">{{ props.item.total }}</td>
            <v-btn fab dark small color="cyan" :to="{name: 'EditSales', params: {id:props.item.id}}">
               <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="pink" @click="removeSales(props.item.id)">
               <v-icon dark>remove</v-icon>
            </v-btn>
          </template>
        </v-data-table>


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
        search: '',
        sales:[],
        rowsPerPageItems: [8, 16, 24],
        pagination: {
        rowsPerPage: 8
        },
        headers: [
         { text: 'Item Name'},
         { text: 'Unit Price' },
         { text: 'Quantity' },
         { text: 'Customer' },
         { text: 'Created' },
         { text: 'Total' },
         { text: 'Action' },
       ]
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

      // Show All Sales
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
.text-xs-right{
  text-align: left !important;
}
td{
  text-align: center;
}
</style>
