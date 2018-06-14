<template>
  <v-app>
    <div>
      <v-container>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>

              <v-card>
                <v-card-text>
                  <v-container>
                    <h4 class="display-1">Live Chat</h4>

                    <form @submit.prevent="enterChat">

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="name"
                            label="Your Name"
                            required
                          >
                          </v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="subject"
                            label="What type of support you are looking for"
                            required
                          >
                          </v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-btn round color="primary" dark type="submit">Start Chat</v-btn>
                        </v-flex>
                      </v-layout>

                    </form>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import db from '@/firebase/init'
export default {
  name:'Welcome',
  data(){
    return{
      name:null,
      subject:null,
      timestamp:Date.now()
    }
  },
  methods:{
    enterChat(){
      if(this.name && this.subject){
         let ref = db.collection('supportguest');
         ref.add({
           name:this.name,
           subject:this.subject,
           sender_id:this.timestamp
         })
         this.$router.push({ name: 'Message',  params:{ id:this.timestamp, pr_name: this.name, pr_subject:this.subject, pr_time:this.timestamp} })
      }
    }
  }

}
</script>

<style>
.display-1{
  margin-top: 140px;
  color:#1976d2 !important;
}
</style>
