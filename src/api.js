import firebase from "firebase";
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseconfig from "./firebaseconfig";;

const FirebaseApp = firebase.initializeApp(firebaseconfig);

const db = FirebaseApp.firestore();

export default {

    googleLogar: async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}