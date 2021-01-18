import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDTRIQ6LC4nXCr7U0FkpESQUJ42-kTAKak",
    authDomain: "crudweb-simple.firebaseapp.com",
    projectId: "crudweb-simple",
    storageBucket: "crudweb-simple.appspot.com",
    messagingSenderId: "305900530334",
    appId: "1:305900530334:web:033d8e79a1ad7f0a37698f",
    measurementId: "G-RXLQE9MEWS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;