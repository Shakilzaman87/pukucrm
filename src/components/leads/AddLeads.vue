<template>
  <v-app>

      <Navbar/>
      <v-content>

        <form @submit.prevent="addNewLeads">
        <v-card>

          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    required
                    prepend-icon="face"
                    placeholder="Name"
                    v-model="name"
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
                  prepend-icon="account_box"
                  :items="allstatus"
                  item-value="New"
                  v-model="status"
                  label="Status"
                  single-line
                  required
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
                <v-btn type="submit" block color="primary" dark>Add Leads</v-btn>
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
  name:'AddLeads',
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
      allstatus: [
        { id: 1, text: "New" },
        { id: 2, text: "Contacted" },
        { id: 3, text: "Qualified" },
        { id: 4, text: "Working" },
        { id: 5, text: "Proposal Sent" },
      ],
      name:null,
      email:null,
      phone:null,
      website:null,
      company:null,
      designation:null,
      source:null,
      rating:null,
      details:null,
      feedback:null,
      status:"New",
    }
  },
  methods:{
      addNewLeads(){
          if(this.name){
            this.dialog = false

          let ref = db.collection('leads');
          ref.add({
            name:this.name,
            email:this.email,
            phone:this.phone,
            website:this.website,
            company:this.company,
            designation:this.designation,
            source:this.source,
            status:this.status,
            details:this.details,
            created_month:moment().format('MM-YYYY'),
            timestamp:Date.now()
          })
          this.name=null
          this.email=null
          this.phone = null
          this.website=null
          this.company=null
          this.designation=null
          this.source=null
          this.rating=null
          this.details = null
          }
          this.$router.push({ name: 'Leads'})
      }
  }
}
</script>

<style>

</style>
