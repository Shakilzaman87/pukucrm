<template>
  <v-app>

      <Navbar/>
    <div>
      <v-content>
        <v-data-table
          :headers="headers"
          :items="supportlists"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          row
          wrap
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">
              <router-link :to="{ name: 'AdminSupportMessage', params: {id:props.item.sender_id} }">{{props.item.name}}</router-link>
            </td>
            <td class="text-xs-left">{{ props.item.subject }}</td>
            <td class="text-xs-left">{{ props.item.time }}</td>

            <v-btn fab dark small color="pink" @click="removeGuest(props.item.id)">
               <v-icon dark>remove</v-icon>
            </v-btn>
          </template>
        </v-data-table>

      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'AdminSupportList',
  components:{
    Navbar
  },
  data(){
    return{
        rowsPerPageItems: [8, 16, 24],
        pagination: {
        rowsPerPage: 8
        },
        headers: [
         { text: 'Guest Name'},
         { text: 'Support Title' },
         { text: 'Sent At' },
         { text: 'Action' },
        ],
        supportlists:[]
    }
  },
  methods:{
    removeGuest(id){
      var result = confirm("Want to delete?");
      if (result) {
        db.collection('supportguest').doc(id).delete().then(() => {
          this.supportlists = this.supportlists.filter(supportlist => {
            return supportlist.id != id
          })
        })
      }

    }
  },
  created(){
    // Show All Expense
    let ref = db.collection('supportguest').orderBy('sender_id', 'desc')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
          let doc = change.doc
          this.supportlists.push({
            id:doc.id,
            sender_id:doc.data().sender_id,
            name:doc.data().name,
            subject:doc.data().subject,
            time:moment(doc.data().sender_id).format('lll')
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
.text-xs-right{
  text-align: left !important;
}
td{
  text-align: center;
}

</style>
