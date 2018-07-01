<template>
  <v-app>

      <Navbar/>
      <v-content>

        <form @submit.prevent="addNewExpense">
        <v-card>

          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    prepend-icon="format_size"
                    placeholder="Expense title"
                    required
                    v-model="expense_title"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    type="number"
                    prepend-icon="attach_money"
                    placeholder="Expense Amount"
                    required
                    v-model="expense_amount"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10>
                <v-select
                  prepend-icon="collections"
                  :items="expense_types"
                  v-model="expense_type"
                  label="Expense Type"
                  single-line
                ></v-select>
              </v-flex>

              <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Add Expense</v-btn>
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
  name:'AddExpenses',
  components:{
    Navbar
  },
  data(){
    return{
      expense_title:null,
      expense_amount:null,
      expense_type:null,
      timestamp:null,
      expense_types: [
        { id: 1, text: 'Transportation' },
        { id: 2, text: 'IT & Internet' },
        { id: 3, text: 'Telephone' },
        { id: 4, text: 'Food & Entertainment' },
        { id: 5, text: 'Office' },
        { id: 6, text: 'Travel' },
        { id: 7, text: 'Customer' },
        { id: 8, text: 'Others' },
      ],
    }
  },
  methods:{
      addNewExpense(){
          if(this.expense_title){

          let ref = db.collection('expenses');
            ref.add({
              expense_title:this.expense_title,
              expense_amount:this.expense_amount,
              expense_type:this.expense_type,
              created_month:moment().format('MM-YYYY'),
              timestamp:Date.now()
            })
            this.expense_title=null
            this.expense_amount=null
            this.expense_type=null
          }
          this.$router.push({ name: 'Expenses'})
      },
   },

}
</script>

<style>

</style>
