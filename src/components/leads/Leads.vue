<template>
  <v-app>

      <Navbar/>
    <div>

      <v-content>
        <v-container fluid grid-list-md>
              <v-data-iterator
                :items="leads"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
                content-tag="v-layout"
                row
                wrap
              >
              <v-flex
                slot="item"
                slot-scope="props"
                xs12
                sm6
                md4
                lg3
              >
              <v-card>
                <v-card-title>
                  <router-link style="color:#000;text-decoration:underline" :to="{ name: 'ViewLeads', params: {id:props.item.id} }">
                    <h4>{{ props.item.name }}</h4>
                  </router-link>
                </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>Email:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.email }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Phone:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.phone }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Company:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.company }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Designation:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.designation }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Website:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.website }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Status:</v-list-tile-content>
                    <v-list-tile-content class="align-end"><span v-if="props.item.status"><b>{{ props.item.status.text }}</b></span></v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content class="align-end">
                      <router-link style="color:green" :to="{ name: 'EditLeads', params: {id:props.item.id} }">
                        <span v-on:click="">Edit</span>
                      </router-link>
                      <span style="color:red" v-on:click="removeLeads(props.item.id)">Delete</span>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-data-iterator>
        </v-container>

        <!-- Add Expense Button  -->
        <v-btn :to="{name: 'AddLeads'}"
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
  name:'ShowCustomers',
  components: {
    Navbar
  },
  data(){
      return{
          rowsPerPageItems: [8, 16, 24],
          pagination: {
          rowsPerPage: 8
          },
          leads: []
    }
  },
  methods:{
      removeLeads(id){
        var result = confirm("Want to delete ?");
        if (result) {
          db.collection('leads').doc(id).delete().then(() => {
            this.leads = this.leads.filter(lead => {
              return lead.id != id
            })
          })
        }
      }
  },
  created(){

      // Show All Leads
      let ref = db.collection('leads').orderBy('timestamp', 'desc')

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type == 'added'){
            let doc = change.doc
            this.leads.push({
              id:doc.id,
              name:doc.data().name,
              email:doc.data().email,
              phone:doc.data().phone,
              website:doc.data().website,
              country:doc.data().country,
              city:doc.data().city,
              company:doc.data().company,
              designation:doc.data().designation,
              source:doc.data().source,
              status:doc.data().status,
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
