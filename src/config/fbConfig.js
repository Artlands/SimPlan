import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzZKcrFbvD8P7C-Tc_FObzD5r1zeUgYAg",
  authDomain: "sim-plans.firebaseapp.com",
  databaseURL: "https://sim-plans.firebaseio.com",
  projectId: "sim-plans",
  storageBucket: "sim-plans.appspot.com",
  messagingSenderId: "882259952780"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;