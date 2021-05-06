import firebase from 'firebase/App';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD_gO6wgxb9HVgHoIJOL0tEWTpRXYgvHlU",
    authDomain: "chatapp-26eb3.firebaseapp.com",
    projectId: "chatapp-26eb3",
    storageBucket: "chatapp-26eb3.appspot.com",
    messagingSenderId: "371207442697",
    appId: "1:371207442697:web:486481dbf6de075e0e03d8",
    measurementId: "G-X09SF88D23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default { projectStorage, projectFirestore};