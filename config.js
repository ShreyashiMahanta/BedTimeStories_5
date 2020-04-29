import * as firebase from 'firebase'
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyCCggq9OZCAkzWMIBxocyseZoqs9-5h6Hw",
    authDomain: "bedtimestories-app.firebaseapp.com",
    databaseURL: "https://bedtimestories-app.firebaseio.com",
    projectId: "bedtimestories-app",
    storageBucket: "bedtimestories-app.appspot.com",
    messagingSenderId: "237790164350",
    appId: "1:237790164350:web:3c71678434be1260d16f2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();


