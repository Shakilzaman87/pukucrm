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
                      <span>Customers of this month : {{customer_of_this_month}} </span><br>
                      <span>Total Customers: {{customer_total}}</span>
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
                      <span>Sales of this month : {{sales_of_this_month}} </span><br>
                      <span>Total Sales: {{sales_total}} </span>
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
                      <span>Expenses of this month : {{expenses_of_this_month}} </span><br>
                      <span>Total Expense: {{ expenses_total }}</span>
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
                      <span>Leads of this month : {{leads_of_this_month}} </span><br>
                      <span>Total Leads: {{leads_total}} </span>
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
        customer_of_this_month:'',
        customer_total:'',
        sales_of_this_month:'',
        sales_total:'',
        expenses_of_this_month:'',
        expenses_total:'',
        leads_of_this_month:'',
        leads_total:'',
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

        // Total Customers of this Month
        db.collection('customers').where("created_month", "==", moment().format('MM-YYYY'))
       .get()
       .then(snapshot => {
             this.customer_of_this_month = snapshot.size;
        })

        // Total Customers
        db.collection('customers')
       .get()
       .then(snapshot => {
             this.customer_total = snapshot.size;
        })

        // Total Sales of this Month
        db.collection('sales').where("created_month", "==", moment().format('MM-YYYY'))
        .get()
        .then(snapshot => {
              var totalSalesOfThisMonth = 0;
              snapshot.forEach(doc => {
                 totalSalesOfThisMonth += Number(doc.data().total)
              })
              this.sales_of_this_month = totalSalesOfThisMonth;
         })

         // Total sales
         db.collection('sales')
        .get()
        .then(snapshot => {
              var totalSales = 0;
              snapshot.forEach(doc => {
                 totalSales += Number(doc.data().total)
              })
              this.sales_total = totalSales;
         })

         // Total Expense of this Month
         db.collection('expenses').where("created_month", "==", moment().format('MM-YYYY'))
         .get()
         .then(snapshot => {
               var totalExpensesOfThisMonth = 0;
               snapshot.forEach(doc => {
                  totalExpensesOfThisMonth += Number(doc.data().expense_amount)
               })
               this.expenses_of_this_month = totalExpensesOfThisMonth;
          })

          // Total Expenses
          db.collection('expenses')
         .get()
         .then(snapshot => {
               var totalExpneses = 0;
               snapshot.forEach(doc => {
                  totalExpneses += Number(doc.data().expense_amount)
               })
               this.expenses_total = totalExpneses;
          })

          // Total Customers of this Month
          db.collection('leads').where("created_month", "==", moment().format('MM-YYYY'))
         .get()
         .then(snapshot => {
               this.leads_of_this_month = snapshot.size;
          })

          // Total Customers
          db.collection('leads')
         .get()
         .then(snapshot => {
               this.leads_total = snapshot.size;
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
