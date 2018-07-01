<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Installation</h1>
                <p>Install Puku CRM in your server</p>
                <v-divider class="my-3"></v-divider>
                <h3>Free Installation</h3>

                <img src="./../../assets/documentation/free-installation.png"><br>
                <p>
                  Well if you face any problem to install Puku CRM in your server.<br>
                  We will provide a free installation support for you.<br>
                  Just send us an email. Will contact as soon as possible <br><br>
                  <b>Support Email: w3schools000@gmail.com</b>
                </p>

                <h1>Installation Guide</h1><br>
                <h3>Step 1: Create Firebase Account </h3>
                <p>Puku CRM is a firebase based software. So first of all you have to create a Firebase account<br>
                  Login your Gmail account and then go to this link <br>
                  <b>https://firebase.google.com/</b>
                </p>
                <img width="100%" src="./../../assets/documentation/firebase-google-link.png"><br>
                <p>Then click on <b>GO TO CONSOLE</b> Then click <b>Add Project</b></p>

                <p>Write your Project name and get started.</p>
                <img width="50%" src="./../../assets/documentation/firebase-add-project-form.png"><br><br>
                <p>Now this is your firebase admin dashboard</p>
                <img width="50%" src="./../../assets/documentation/firebase-dashboard.png"><br><br>
                <p>Click on <b>Add Firebase to your web app</b> And copy this code</p>
                <img width="50%" src="./../../assets/documentation/firebase-code.png"><br><br>
                <p>Setup Authentication</p>
                <img width="50%" src="./../../assets/documentation/auth.png"><br><br>
                <p>Enable Email/Password Method</p>
                <img width="70%" src="./../../assets/documentation/auth2.png"><br><br>
                <p>Now click on database to setup Firestore</p>
                <img width="50%" src="./../../assets/documentation/firebase-database.png"><br><br>
                <p>Change Rules like this</p>
                <img width="50%" src="./../../assets/documentation/database-rules.png"><br><br>
                <p>Go to Indexes and Setup Index Manually</p>
                <img width="70%" src="./../../assets/documentation/database-index.png"><br><br>
                <p>Create index of <b>customerrecords</b> like this</p>
                <img width="50%" src="./../../assets/documentation/database-index-1.png"><br><br>
                <p>Create index of <b>leadrecords</b> like this</p>
                <img width="50%" src="./../../assets/documentation/database-index-2.png"><br><br>
                <p>Create index of <b>supportmessage</b> like this</p>
                <img width="50%" src="./../../assets/documentation/database-index-3.png"><br><br>
                <p>Create index of <b>supportmessage</b> like this</p>
                <img width="50%" src="./../../assets/documentation/database-index-5.png"><br><br>

                <br><br><br>

                <h3>Step 2: Download Files and use the firebase config code </h3>
                <p>
                  After purchasing Puku CRM you will get files like this. Now go to this file <br>
                  <b>src/firebase/init.js</b>
                </p>
                <img  src="./../../assets/documentation/puku-files.png"><br>
                <p>Into the <b>init.js</b> paste the code here</p>
                <img width="50%" src="./../../assets/documentation/firebase-init.png">
                <p>So the code will look like this</p>
                <img width="50%" src="./../../assets/documentation/firebase-init2.png"><br><br><br>

                <h3>Step 3: Run the "npm run build" command in your terminal </h3><br>
                <img width="50%" src="./../../assets/documentation/project-folder.png">
                <p>
                  Now select your the downladed folder and open command window.<br>
                  If you have already npm installed in your computer you can run the command <b>"npm run build"</b><br>
                  After build complete <b>dist</b> folder will generate.
                </p>
                <img width="50%" src="./../../assets/documentation/dist.png"><br>
                <b>Note:</b>If you dont have npm installed in your computer then you can <br>
                Setup NPM from here. <b>https://nodejs.org/en/</b><br><br><br>


                <h3>Step 4: Upload dist folder to public_html </h3>
                <p>
                  Zip the dist folder then upload to <b>public_html</b> folder in your hosting server.<br>
                  And refresh your URL.
                </p>

                <h3>Step 5: Setup </h3>
                <p>Well if everything ok then you will see the setup form like this.</p>
                <img width="50%" src="./../../assets/documentation/setup.png"><br>
                 Now fill up the setup form and enter to Puku CRM

                <h3>Note</h3>
                <p>After Setup successfully if you find any problem on URL(url refresh return 404 Not Found)<br>
                  create a .htaccess file in your root folder and use this code
                </p>
                <img src="./../../assets/documentation/htaccess.png"><br>
                You can get this code here<br>
                <b> https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations</b><br><br>
                 <h3>Thank you  </h3>
              </v-flex>
            </v-layout>
          </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
export default {
  name:'InstallationDoc',
  components: {
     Navbar
  },
}
</script>

<style>
.list{
  margin-left: 8px;
}

</style>
