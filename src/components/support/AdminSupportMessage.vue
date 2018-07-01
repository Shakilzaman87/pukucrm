<template>
  <v-app>

      <Navbar/>
    <div>
    <v-content>
      <v-container>
          <v-layout row>
            <v-flex xs12 sm6 sm3>



                    <div class="message-box" v-chat-scroll>

                      <v-list style="margin-left:16px" v-for="message in supportmessages" :key="message.id">
                        <b style="margin-right:10px">{{message.sender_name}}</b>
                        {{message.message}}
                      </v-list>

                    </div>

                    <br>

                    <form @submit.prevent="sendMessage">
                        <v-flex xs11 align-center justify-space-between>
                          <v-layout align-center style="margin-left:20px">
                            <v-text-field
                              required
                              v-model="message"
                              placeholder="Enter message"

                            ></v-text-field>
                          </v-layout>
                        </v-flex>
                    </form>



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
  name:'AdminSupportMessage',
  components: {
    Navbar
  },
  data(){
      return{
          rowsPerPageItems: [8, 16, 24],
          pagination: {
          rowsPerPage: 8
          },
          message:null,
          supportmessages:[],

    }
  },
  methods:{
    sendMessage(){
      let ref = db.collection('supportmessage');
      ref.add({
          sender_name:"Admin",
          message:this.message,
          message_id:this.$route.params.id,
          sending_time:Date.now()
      })
      this.message = null
    }
  },
  created(){
          // Show all messages of this gueste
          let ref = db.collection('supportmessage').where("message_id","==",this.$route.params.id).orderBy('sending_time', 'asc');

          ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
              if(change.type == 'added'){
                let doc = change.doc
                this.supportmessages.push({
                  id:doc.id,
                  message:doc.data().message,
                  sender_name:doc.data().sender_name,
                  timestamp:moment(doc.data().sending_time).format('ll')
                })
              }
            })
          })
  }


}
</script>

<style>

.message-box{
  max-height: 300px;
  overflow: auto;
  border: 1px solid rgba(0,0,0,.20);
  width: 100%;
}
.message-box::-webkit-scrollbar{
  width: 3px;
}
.message-box::-webkit-scrollbar-track{
  background: #ddd;
}
.message-box::-webkit-scrollbar-thumb{
  background: #aaa;
}

</style>
