<template>
  <v-app>

      <Navbar/>
    <div>
      <v-content>
        <form @submit.prevent="changePassword">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 center"
          >
          <h4>Update Password</h4>

          </v-card-title>
          <v-container grid-list-sm class="pa-4">


              <v-flex xs10 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="email"
                    placeholder="Email"
                    v-model="userCurrentEmail"
                    disabled
                  ></v-text-field>
              </v-flex>

              <v-flex xs10 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="vpn_key"
                    placeholder="New Password"
                    v-model="newPassword"
                    type="password"
                    disabled
                  ></v-text-field>                
              </v-flex>


              <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Password Update</v-btn>
              </v-flex>
              <p class="feedback-successful" v-if="passowrdFeedback">{{passowrdFeedback}}</p>


          </v-container>

        </v-card>
        </form>

        <form @submit.prevent="changeCurrency">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 center"
          >
          <h4>Update Currency</h4>

          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs10 align-center justify-space-between>
                <v-layout align-center>
                  <v-text-field
                    prepend-icon="local_atm"
                    placeholder="Email"
                    v-model="currency"

                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs10>
                <v-btn type="submit" block color="primary" dark>Currency Update</v-btn>
              </v-flex>
                <p class="feedback-successful" v-if="currencyFeedback">{{currencyFeedback}}</p>

            </v-layout>
          </v-container>

        </v-card>
        </form>
      </v-content>

    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'
export default {
  name:'Settings',
  components: {
     Navbar
  },
  data(){
    return{
       passowrdFeedback:'',
       currencyFeedback:'',
       newPassword:'',
       userCurrentEmail:'',
       currency:'',
    }
  },
  created(){

      // Current User Email
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.userCurrentEmail = user.email;
      }

      // Current Currency
      db.collection("settings").doc('config').onSnapshot(doc =>{
         this.currency = doc.data().currency
      })


  },
  methods:{
      changePassword(){
          var user = firebase.auth().currentUser;
          var newEmail = this.userCurrentEmail;
          var newPassword = this.newPassword;

            user.updateEmail(newEmail).then(function() {
            // Update successful.
            })
            user.updatePassword(newPassword)
            .catch((e)=>{
            this.passowrdFeedback="Password updated successfully. You have to login again with new password"
            })
      },
      changeCurrency(){
            if(this.currency){
            let ref = db.collection('settings').doc('config');
              ref.update({
                currency:this.currency
              })
              this.currencyFeedback="Currency updated successfully"
            }

      }
  }

}
</script>

<style>
.feedback-successful{
  color: green;
  text-align: center;
}
h4{
  margin-left: 1%;
}

</style>
