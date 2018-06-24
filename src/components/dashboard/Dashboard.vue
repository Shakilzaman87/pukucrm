<template>
  <v-app>

      <Navbar/>
    <div>
      <v-content>

        <v-card>
          <v-container
            fluid
            style="min-height: 0;"
            grid-list-lg
          >
            <v-layout row wrap>

              <v-flex xs3>
                <v-card color="primary" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">Customers</div>
                    <div>
                      <span>Customers of this month :  </span><br>
                      <span>Total Customers: </span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark :to="{name: 'Customers'}">Details</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex xs3>
                <v-card color="primary" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">Sales</div>
                    <div>
                      <span>Sales of this month :  </span><br>
                      <span>Total Sales: </span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark :to="{name: 'Sales'}">Details</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex xs3>
                <v-card color="primary" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">Expenses</div>
                    <div>
                      <span>Expenses of this month :  </span><br>
                      <span>Total Expense: </span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark :to="{name: 'Expenses'}">Details</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex xs3>
                <v-card color="primary" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">Leads</div>
                    <div>
                      <span>Leads of this month :  </span><br>
                      <span>Total Leads: </span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark :to="{name: 'Leads'}">Details</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card>
      </v-content>

      <v-content>
        <v-container>
          <v-layout>
              <v-flex xs6>
                <h4>Customer Updates</h4>
                <v-data-table
                  :headers="customerHeaders"
                  :items="customerrecords"
                  :rows-per-page-items="rowsPerPageItems"
                  :pagination.sync="pagination"
                  row
                  wrap
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-right">{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.text }}</td>
                    <td class="text-xs-right">{{ props.item.timestamp }} ago</td>
                  </template>
                </v-data-table>
              </v-flex>


              <v-flex xs6>
                <h4>Lead Updates</h4>
                <v-data-table
                  :headers="leadHeaders"
                  :items="leadrecords"
                  :rows-per-page-items="rowsPerPageItems"
                  :pagination.sync="pagination"
                  row
                  wrap
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-right">{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.text }}</td>
                    <td class="text-xs-right">{{ props.item.timestamp }} ago</td>
                  </template>
                </v-data-table>
              </v-flex>
          </v-layout>
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
  name:'Sales',
  components: {
     Navbar
  },
  data(){
      return{
        rowsPerPageItems: [8, 16, 24],
        pagination: {
        rowsPerPage: 8
        },
        customerrecords:[],
        leadrecords:[],
        customerHeaders: [
         { text: 'Customer Name'},
         { text: 'Updates'},
         { text: 'Created' },
        ],
        leadHeaders: [
          { text: 'Name'},
          { text: 'Updates'},
          { text: 'Created' },
        ],

      }
  },
  created(){

        // Show All Customer Updates
        let cref = db.collection('customerrecords').orderBy('timestamp', 'desc')

        cref.onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type == 'added'){
              let doc = change.doc
              this.customerrecords.push({
                name:doc.data().name,
                text:doc.data().text,
                timestamp:moment(doc.data().timestamp).fromNow('lll')
              })
            }
          })
        })

        // Show All Lead Updates
        let lref = db.collection('leadrecords').orderBy('timestamp', 'desc')

        lref.onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type == 'added'){
              let doc = change.doc
              this.leadrecords.push({
                name:doc.data().name,
                text:doc.data().text,
                timestamp:moment(doc.data().timestamp).fromNow('lll')
              })
            }
          })
        })



    }

}
</script>

<style>
.headline{
  width: 100%;
  margin-bottom: 15px;
  word-break: break-all;
}

.text-xs-right{
  text-align: left !important;
}
td{
  text-align: center;
}

</style>
