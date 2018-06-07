<template>
  <v-app>

      <Navbar/>
    <div>
      <v-content>
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Expense title</th>
              <th>Expense Amount</th>
              <th>Expense Type</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expense in expenses" :key="expense.id">

              <td>{{expense.expense_title}}</td>
              <td>{{expense.expense_amount}}</td>
              <td>{{expense.expense_type}}</td>
              <td>{{expense.timestamp}}</td>
              <td>
                <v-btn fab dark small color="cyan" :to="{name: 'EditExpense', params: {id:expense.id}}">
                   <v-icon dark>edit</v-icon>
                </v-btn>
                <v-btn fab dark small color="pink" @click="removeSales(expense.id)">
                   <v-icon dark>remove</v-icon>
                </v-btn>
              </td>

            </tr>

          </tbody>
        </table>


        <!-- Add Expense Button  -->
        <v-btn :to="{name: 'AddExpenses'}"
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
  name:'Expenses',
  components: {
     Navbar
  },
  data(){
      return{
        expenses:[]
      }
  },
  methods:{
      removeSales(id){
        var deleteResult = confirm("Want to delete?");
        if (deleteResult) {
          db.collection('sales').doc(id).delete().then(() => {
            this.expenses = this.expenses.filter(expense => {
              return expense.id != id
            })
          })
        }
      }

  },
  created(){

      // Show All Expense
      let ref = db.collection('expenses').orderBy('timestamp', 'desc')

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type == 'added'){
            let doc = change.doc
            this.expenses.push({
              id:doc.id,
              expense_title:doc.data().expense_title,
              expense_amount:doc.data().expense_amount,
              expense_type:doc.data().expense_type.text,
              timestamp:moment(doc.data().timestamp).format('ll')
            })
          }
        })
      })
     }
}
</script>

<style>
td{
  text-align: center;
}
</style>
