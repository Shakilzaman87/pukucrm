import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyBtwvjj8HF4gVVSGhyg6jsT3KRQqUtgs-A",
   authDomain: "pukucrm.firebaseapp.com",
   databaseURL: "https://pukucrm.firebaseio.com",
   projectId: "pukucrm",
   storageBucket: "pukucrm.appspot.com",
   messagingSenderId: "460246239015"
 };

 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots:true})

 export default firebaseApp.firestore()
