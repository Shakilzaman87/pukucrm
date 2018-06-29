<template>
  <v-content>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search Customer"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="customers"
      :search="search"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      row
      wrap
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">

        <td class="text-xs-left"><router-link :to="{ name: 'ViewCustomer', params: {id:props.item.id} }">{{props.item.customer_name}}</router-link></td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.phone }}</td>
        <td class="text-xs-left">{{ props.item.company }}</td>
        <td class="text-xs-left">{{ props.item.designation }}</td>
        <td class="text-xs-left">{{ props.item.timestamp }}</td>
        <v-btn fab dark small color="cyan" :to="{name: 'EditCustomer', params: {id:props.item.id}}">
           <v-icon dark>edit</v-icon>
        </v-btn>
        <v-btn fab dark small color="pink" @click="removeCustomer(props.item.id)">
           <v-icon dark>remove</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <!-- Add Customer Button  -->
    <v-btn :to="{name: 'AddCustomer'}"
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
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'ShowCustomers',
  components: {

  },
  data(){
      return{
        search: '',
        customers:[],
        rowsPerPageItems: [8, 16, 24],
        pagination: {
        rowsPerPage: 8
        },
        headers: [
         { text: 'Customer Name', value: 'customer_name' },
         { text: 'Email' , value: 'email' },
         { text: 'Phone' , value: 'phone' },
         { text: 'Company' , value: 'company' },
         { text: 'Designation' , value: 'designation' },
         { text: 'Created' , value: 'created' },
         { text: 'Action' , value: 'action' },
       ]
      }
  },
  methods:{
      removeCustomer(id){
        var result = confirm("Want to delete?");
        if (result) {
          db.collection('customers').doc(id).delete().then(() => {
            this.customers = this.customers.filter(customer => {
              return customer.id != id
            })
          })
        }

      }
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
              customer_name:doc.data().customer_name,
              email:doc.data().email,
              phone:doc.data().phone,
              website:doc.data().website,
              country:doc.data().country,
              city:doc.data().city,
              company:doc.data().company,
              designation:doc.data().designation,
              timestamp:moment(doc.data().timestamp).fromNow('lll')
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
