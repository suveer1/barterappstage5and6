import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyAPMiAoiXLxvbfsNrgsdcTitJV9tZg1cp8",
  authDomain: "home-744d7.firebaseapp.com",
  projectId: "home-744d7",
  storageBucket: "home-744d7.appspot.com",
  messagingSenderId: "867735910863",
  appId: "1:867735910863:web:5e659369a343b05b307aba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();