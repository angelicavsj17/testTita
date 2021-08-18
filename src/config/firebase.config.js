import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAMcf6rLEzL_7MkFxZK05HtH5BVcWijSuU",
    authDomain: "pruebatita-c1f2b.firebaseapp.com",
    projectId: "pruebatita-c1f2b",
    storageBucket: "pruebatita-c1f2b.appspot.com",
    messagingSenderId: "46785483750",
    appId: "1:46785483750:web:744eeb11653bf19b17bc27",
    measurementId: "G-RDPCQYTVSQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase