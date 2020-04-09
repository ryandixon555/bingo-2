import firebase from 'firebase';

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyAIHArspzNM81HK088L2CIVIJZlDUo_FjM",
    authDomain: "another-bingo.firebaseapp.com",
    databaseURL: "https://another-bingo.firebaseio.com",
    projectId: "another-bingo",
    storageBucket: "another-bingo.appspot.com",
    messagingSenderId: "447414698246",
    appId: "1:447414698246:web:e43dd9e4ea6064254dde87",
    measurementId: "G-46LSHTGJ5W"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export default firebase;
