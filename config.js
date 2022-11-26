import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyBIq_aSI95plmppZYycB888EbSmwlgoqJ4",
    authDomain: "pro-78-aec94.firebaseapp.com",
    databaseURL: "https://pro-78-aec94-default-rtdb.firebaseio.com",
    projectId: "pro-78-aec94",
    storageBucket: "pro-78-aec94.appspot.com",
    messagingSenderId: "359649963808",
    appId: "1:359649963808:web:4cfe8609162278ca747145"
  };
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
