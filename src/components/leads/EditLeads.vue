<template>
  <v-app>

      <Navbar/>
      <v-content>

        <form @submit.prevent="editLeads">
        <v-card>

          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    required
                    prepend-icon="face"
                    placeholder="Name"
                    v-model="lead.name"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  type="email"
                  prepend-icon="mail"
                  placeholder="Email"
                  v-model="lead.email"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  type="number"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  v-model="lead.phone"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                  v-model="lead.company"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="work"
                  placeholder="Designation"
                  v-model="lead.designation"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-text-field
                  prepend-icon="tv"
                  placeholder="Website"
                  v-model="lead.website"
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <h4 v-if="lead.source"> Source: {{lead.source.text}}</h4>
                <v-select
                  prepend-icon="group"
                  :items="sources"
                  v-model="lead.source"
                  label="Source"
                  single-line
                ></v-select>
              </v-flex>

              <v-flex xs10>
                <h4 v-if="lead.status"> Current Status: {{lead.status.text}}</h4>
                <v-select
                  prepend-icon="account_box"
                  :items="allstatus"
                  v-model="lead.status"
                  label="Status"
                  single-line
                ></v-select>
              </v-flex>

              <v-flex xs10>
                 <v-text-field
                   v-model="lead.details"
                   label="Buesiness history with this customer....."
                   multi-line
                 ></v-text-field>
               </v-flex>

               <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Update Leads</v-btn>
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
        { id: 6, text: "Customer ( Converted )" },

      ],
      lead:[],
      name:null,
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
      status:null,
    }
  },
  methods:{
      editLeads(){
          if(this.lead.name && this.lead.status.id != 6){
              let ref = db.collection('leads').doc(this.$route.params.id);
              ref.update({
              name:this.lead.name,
              email:this.lead.email,
              phone:this.lead.phone,
              website:this.lead.website,
              company:this.lead.company,
              designation:this.lead.designation,
              source:this.lead.source,
              status:this.lead.status,
              details:this.lead.details,
              })
          }else{
              let ref = db.collection('leads').doc(this.$route.params.id);
              ref.update({
              name:this.lead.name,
              email:this.lead.email,
              phone:this.lead.phone,
              website:this.lead.website,
              company:this.lead.company,
              designation:this.lead.designation,
              source:this.lead.source,
              status:this.lead.status,
              details:this.lead.details,
              })

              let cref = db.collection('customers');
              cref.add({
              customer_name:this.lead.name,
              email:this.lead.email,
              phone:this.lead.phone,
              country:this.country,
              city:this.country,
              website:this.lead.website,
              company:this.lead.company,
              designation:this.lead.designation,
              source:this.lead.source,
              rating:this.rating,
              details:this.details,
              created_month:moment().format('MM-YYYY'),
              timestamp:Date.now()
              })
          }
          this.$router.push({ name: 'Leads'})
      }
  },
  created(){
      // Show data of a specific Leads
      db.collection("leads").doc(this.$route.params.id).onSnapshot(doc =>{
          this.lead = doc.data()
          this.lead.id = doc.id
      })
  }
}
</script>

<style>

</style>
