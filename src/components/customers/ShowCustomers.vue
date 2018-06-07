<template>
  <v-content>
    <table class="table table-responsive">
      <thead>
        <tr>
          <th>Customer Name </th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Designation</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td><router-link :to="{ name: 'ViewCustomer', params: {id:customer.id} }">{{customer.customer_name}}</router-link> </td>
          <td>{{customer.email}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.company}}</td>
          <td>{{customer.designation}}</td>
          <td>{{customer.timestamp}} ago</td>
          <td>
            <v-btn fab dark small color="cyan" :to="{name: 'EditCustomer',params: {id:customer.id}}">
               <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="pink"  @click="removeCustomer(customer.id)">
               <v-icon dark>remove</v-icon>
            </v-btn>
          </td>
        </tr>

      </tbody>
    </table>





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
        customers:[],
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
</style>
