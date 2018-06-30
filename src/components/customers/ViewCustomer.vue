<template>
  <v-app>
      <Navbar/>
    <div>

      <v-content>
        <v-container fluid grid-list-md>

              <v-flex xs12 sm6 md4 lg8>
              <v-card>
                <v-card-title><h4>{{this.customer.customer_name}}</h4></v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>Email:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.customer.email}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Phone:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.customer.phone}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Company:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.customer.company}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Designation:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.customer.designation}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Country:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.customer.country}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>City:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.customer.city}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Website:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.customer.website}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Source:</v-list-tile-content>
                    <v-list-tile-content class="align-end" v-if="this.customer.source">{{this.customer.source.text}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Rating:</v-list-tile-content>
                    <v-list-tile-content class="align-end" v-if="this.customer.rating">{{this.customer.rating.text}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list>
                    <v-list-tile-content style="margin-left:15px"><b>Business History:</b></v-list-tile-content>
                    <v-list-tile-content style="margin-left:15px" class="align-end" v-if="this.customer.rating">{{this.customer.details}}</v-list-tile-content>
                  </v-list>
                </v-list>
              </v-card>

              <v-card>
                <v-card-title><h4>Business updates with {{this.customer.customer_name}}</h4></v-card-title>
                <v-divider></v-divider>
                <v-list dense>

                    <v-list v-for="customerrecord in customerrecords" :key="customerrecord.id">
                      <v-list style="margin-left:16px">
                        <b style="margin-right:10px">{{customerrecord.timestamp}}</b>
                        {{customerrecord.text}}
                        <a style="color:red;margin-left:10px" v-on:click="removecustomerRecord(customerrecord.id)">Delete</a>
                      </v-list>
                    </v-list>
                    <br>

                    <form @submit.prevent="addUpdates">
                        <v-flex xs11 align-center justify-space-between>
                          <v-layout align-center style="margin-left:20px">
                            <v-text-field
                              required
                              prepend-icon="assignment"
                              placeholder="Enter updates"
                              v-model="customerupdates"
                            ></v-text-field>
                          </v-layout>
                        </v-flex>
                    </form>

                </v-list>
              </v-card>
            </v-flex>
        </v-container>

      </v-content>
    </div>
  </v-app>

</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'ViewCustomer',
  components: {
    Navbar
  },
  data(){
      return{
          rowsPerPageItems: [8, 16, 24],
          pagination: {
          rowsPerPage: 8
          },
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
          feedback:null,
          customerupdates:null,
          customerrecords:[]
    }
  },
  methods:{
          addUpdates(){
            if(this.customerupdates){
              let ref = db.collection('customerrecords');
              ref.add({
                id:this.$route.params.id,
                text:this.customerupdates,
                name:this.customer.customer_name,
                timestamp:Date.now()
              })
              this.customerupdates = null
            }else {
              this.feedback = "Please insert some text"
            }
          },
          removecustomerRecord(id){
            var result = confirm("Want to delete ?");
            if (result) {
              db.collection('customerrecords').doc(id).delete().then(() => {
                this.customerrecords = this.customerrecords.filter(customerrecord => {
                  return customerrecord.id != id
                })
              })
            }
          }

  },
  created(){
          // Single Customer
          db.collection("customers").doc(this.$route.params.id).onSnapshot(doc =>{
            this.customer = doc.data()
            this.customer.id = doc.id
          })

         // Show All customer Records
         let ref = db.collection('customerrecords').where("id","==",this.$route.params.id).orderBy('timestamp', 'asc');

         ref.onSnapshot(snapshot => {
           snapshot.docChanges().forEach(change => {
             if(change.type == 'added'){
               let doc = change.doc
               this.customerrecords.push({
                 id:doc.id,
                 text:doc.data().text,
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
</style>
