import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK9fJ8BOo3qkVtLsbqdgK8FvMNSkLdFQM",
  authDomain: "the-cook-abc7e.firebaseapp.com",
  projectId: "the-cook-abc7e",
  storageBucket: "the-cook-abc7e.appspot.com",
  messagingSenderId: "823465353046",
  appId: "1:823465353046:web:ba4dd6970f77e8a0b3c0f7",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
