<template>
  <v-app>

      <Navbar/>
      <v-content>





  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs6>
        <v-card dark color="primary">
          <v-card-text class="px-0">
            <h2>Customer Name: </h2> &nbsp;&nbsp;&nbsp; {{this.customer.customer_name}}
            <h2>Email: </h2> &nbsp;&nbsp;&nbsp; {{this.customer.email}}
            <h2>Phone:</h2> &nbsp;&nbsp;&nbsp;  {{this.customer.phone}}
            <h2>Company:</h2> &nbsp;&nbsp;&nbsp; {{this.customer.company}}
            <h2>Designation:</h2> &nbsp;&nbsp;   {{this.customer.designation}}
            <h2>Country:</h2> &nbsp;&nbsp; {{this.customer.country}}
            <h2>City:</h2> &nbsp;&nbsp;  {{this.customer.city}}
            <h2>Website:</h2> &nbsp;  {{this.customer.website}}
            <h2>Source:</h2> &nbsp; <p v-if="this.customer.source">{{this.customer.source.text}}</p>
            <h2>Rating:</h2> &nbsp; <p v-if="this.customer.rating">{{this.customer.rating.text}}</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card dark color="primary">
          <v-card-text dark color="primary">
             <h2>Customer History</h2>
             <p>
               {{this.customer.details}}
             </p>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>


      </v-content>
  </v-app>
</template>
<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
export default {
    name:'ViewCustomer',
    components:{
      Navbar
    },
    data(){
      return{
          customer:[],
          sources: [
            { id: 1, text: 'Facebook' },
            { id: 2, text: 'Website' },
            { id: 3, text: 'Networks' },
            { id: 4, text: 'Direct Marketing' },
            { id: 5, text: 'Others' },
          ],
          customer_name:null,
          email:null,
          phone:null,
          country:null,
          city:null,
          website:null,
          company:null,
          designation:null,
          source:null,
          rating:null,
          details:null,
          feedback:null
      }
    },
    created(){
            db.collection("customers").doc(this.$route.params.id).onSnapshot(doc =>{
            this.customer = doc.data()
            this.customer.id = doc.id
      })
    }
}
</script>

<style>
table{

}
h2{
  margin-top: 15px;
  font-size: 18px;
  font-weight: lighter;
  margin-left: 2%;
}

.details{
  font-size: 16px;
  float: left;
  margin-top: 15px;
}

</style>
