<template>
  <v-app>
      <Navbar/>
      <v-content>

        <form @submit.prevent="addNewCustomer">
        <v-card>
        
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    required
                    prepend-icon="face"
                    placeholder="Customer Name"
                    v-model="customer_name"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  type="email"
                  prepend-icon="mail"
                  placeholder="Email"
                  v-model="email"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  type="number"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  v-model="phone"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                  v-model="company"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="work"
                  placeholder="Designation"
                  v-model="designation"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="language"
                  placeholder="Country"
                  v-model="country"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="home"
                  placeholder="City"
                  v-model="city"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="tv"
                  placeholder="Website"
                  v-model="website"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-select
                  prepend-icon="group"
                  :items="sources"
                  v-model="source"
                  label="Source"
                  single-line
                ></v-select>
              </v-flex>

              <v-flex xs10>
                <v-select
                  prepend-icon="star_rate"
                  :items="ratings"
                  v-model="rating"
                  label="Rating"
                  single-line
                ></v-select>
              </v-flex>

              <v-flex xs10>
                 <v-text-field
                   v-model="details"
                   label="Buesiness history with this customer....."
                   multi-line
                 ></v-text-field>
               </v-flex>

               <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Add Customer</v-btn>
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
  name:'AddCustomer',
  components:{
    Navbar
  },
  data(){
    return{
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
      addNewCustomer(){
          if(this.customer_name){
            this.dialog = false

          let ref = db.collection('customers');
          ref.add({
            customer_name:this.customer_name,
            email:this.email,
            phone:this.phone,
            country:this.country,
            city:this.country,
            website:this.website,
            company:this.company,
            designation:this.designation,
            source:this.source,
            rating:this.rating,
            details:this.details,
            created_month:moment().format('MM-YYYY'),
            timestamp:Date.now(),
          })
          this.customer_name=null
          this.email=null
          this.phone = null
          this.country=null
          this.city=null
          this.website=null
          this.company=null
          this.designation=null
          this.source=null
          this.rating=null
          this.details = null
          }else{
            this.dialog = true
          }
          this.$router.push({ name: 'Customers'})
      }
  }
}
</script>

<style>

</style>
