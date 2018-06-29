<template>
  <v-app>

      <Navbar/>
    <div>

      <v-content>
        <v-container fluid grid-list-md>

              <v-flex xs12 sm6 md4 lg8>
              <v-card>
                <v-card-title><h4>{{this.lead.name}}</h4></v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>Email:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.lead.email}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Phone:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.lead.phone}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Company:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.lead.company}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Designation:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.lead.designation}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Website:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{this.lead.website}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Source:</v-list-tile-content>
                    <v-list-tile-content class="align-end" v-if="this.lead.source">{{this.lead.source.text}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Status:</v-list-tile-content>
                    <v-list-tile-content class="align-end" v-if="this.lead.status">{{this.lead.status.text}}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>

              <v-card>
                <v-card-title><h4>Lead Updates</h4></v-card-title>
                <v-divider></v-divider>
                <v-list dense>

                    <v-list v-for="leadrecord in leadrecords" :key="leadrecord.id">
                      <v-list style="margin-left:16px">
                        <b style="margin-right:10px">{{leadrecord.timestamp}}</b>
                        {{leadrecord.text}}
                        <a style="color:red;margin-left:10px" v-on:click="removeLeadRecord(leadrecord.id)">Delete</a>
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
                              v-model="leadupdates"
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
  name:'ViewLeads',
  components: {
    Navbar
  },
  data(){
      return{
          rowsPerPageItems: [8, 16, 24],
          pagination: {
          rowsPerPage: 8
          },
          lead: [],
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
          status:null,
          leadupdates:null,
          leadrecords:[]
    }
  },
  methods:{
          addUpdates(){
            if(this.leadupdates){
              let ref = db.collection('leadrecords');
              ref.add({
                id:this.$route.params.id,
                name:this.lead.name,
                text:this.leadupdates,
                timestamp:Date.now()
              })
              this.leadupdates = null
            }else {
              this.feedback = "Please insert some text"
            }
          },
          removeLeadRecord(id){
            var result = confirm("Want to delete ?");
            if (result) {
              db.collection('leadrecords').doc(id).delete().then(() => {
                this.leadrecords = this.leadrecords.filter(leadrecord => {
                  return leadrecord.id != id
                })
              })
            }
          }

  },
  created(){
          // Lead Doc
          db.collection("leads").doc(this.$route.params.id).onSnapshot(doc =>{
            this.lead = doc.data()
            this.lead.id = doc.id
          })

         // Show All Lead Records
         let ref = db.collection('leadrecords').where("id","==",this.$route.params.id).orderBy('timestamp', 'asc');

         ref.onSnapshot(snapshot => {
           snapshot.docChanges().forEach(change => {
             if(change.type == 'added'){
               let doc = change.doc
               this.leadrecords.push({
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
