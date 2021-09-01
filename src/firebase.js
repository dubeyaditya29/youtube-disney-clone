import firebase from "firebase/app";
import "firebase/auth";

// firebase config file holds the initialization information for a collection of services.

var firebaseConfig = {
  apiKey: "AIzaSyDWdrwTysEyUFCjVzsEm1IJQnf1j8CuoSc",
  authDomain: "disneyplusclone-fe8af.firebaseapp.com",
  projectId: "disneyplusclone-fe8af",
  storageBucket: "disneyplusclone-fe8af.appspot.com",
  messagingSenderId: "482907951455",
  appId: "1:482907951455:web:62bc82fe3c86f9b725a6ea",
  measurementId: "G-YPNLD6KRH8",
};

const app = firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var provider = new firebase.auth.GoogleAuthProvider();

export default app;
