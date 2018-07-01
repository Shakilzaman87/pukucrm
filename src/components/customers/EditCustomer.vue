<template>
  <v-app>
      <Navbar/>
      <v-content>

        <form @submit.prevent="editCustomer">
        <v-card>
        
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    prepend-icon="face"
                    placeholder="Customer Name"
                    required
                    v-model="customer.customer_name"
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  type="email"
                  prepend-icon="mail"
                  placeholder="Email"
                  v-model="customer.email"
                ></v-text-field>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  type="number"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  v-model="customer.phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                  v-model="customer.company"
                ></v-text-field>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  prepend-icon="work"
                  placeholder="Designation"
                  v-model="customer.designation"
                ></v-text-field>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  prepend-icon="language"
                  placeholder="Country"
                  v-model="customer.country"
                ></v-text-field>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  prepend-icon="home"
                  placeholder="City"
                  v-model="customer.city"
                ></v-text-field>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  prepend-icon="tv"
                  placeholder="Website"
                  v-model="customer.website"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <h4 v-if="customer.source">Source: {{customer.source.text}}</h4>
                <v-select
                   prepend-icon="group"
                   v-bind:items="sources"
                   v-model="customer.source"
                   label="Sources"
                   single-line
                ></v-select>
              </v-flex>

              <v-flex xs10>
                <h4 v-if="customer.rating"> Current Rating: {{customer.rating.text}}</h4>
                <v-select
                  :items="ratings"
                  v-model="customer.rating"
                  label="Ratings"
                  single-line
                ></v-select>
              </v-flex>

              <v-flex xs10>
                 <v-text-field
                   v-model="customer.details"
                   label="Buesiness history with this customer....."
                   multi-line
                 ></v-text-field>
               </v-flex>

               <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Update Customer</v-btn>
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
export default {
  name:'EditCustomer',
  components:{
    Navbar
  },
  data(){
    return{
      dialog:null,
      customer:[],
      sources: [
        { id: 1, text: 'Facebook' },
        { id: 2, text: 'Website' },
        { id: 3, text: 'Networks' },
        { id: 4, text: 'Direct Marketing' },
        { id: 5, text: 'Others' },
      ],
      ratings: [
        { id: 1, text: "Bad" },
        { id: 2, text: "Not Good" },
        { id: 3, text: "Good" },
        { id: 4, text: "Very Good" },
        { id: 5, text: "Excellent" },
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
  methods:{
      editCustomer(){
          if(this.customer.customer_name){

          let ref = db.collection('customers').doc(this.$route.params.id)
          ref.update({
            customer_name:this.customer.customer_name,
            email:this.customer.email,
            phone:this.customer.phone,
            country:this.customer.country,
            city:this.customer.city,
            website:this.customer.website,
            company:this.customer.company,
            designation:this.customer.designation,
            source:this.customer.source,
            rating:this.customer.rating,
            details:this.customer.details,
          })
          }
          this.$router.push({ name: 'Customers'})
      }
  },
  created(){
          // Customers Data
          db.collection("customers").doc(this.$route.params.id).onSnapshot(doc =>{
               this.customer = doc.data()
               this.customer.id = doc.id
          })
  }
}
</script>

<style>

</style>
