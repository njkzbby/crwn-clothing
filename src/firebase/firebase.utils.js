import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHp3paUdudYDKlw5VDowQcb1XDXV04Y8Y",
    authDomain: "crwn-db-406a2.firebaseapp.com",
    projectId: "crwn-db-406a2",
    storageBucket: "crwn-db-406a2.appspot.com",
    messagingSenderId: "306799706658",
    appId: "1:306799706658:web:5edd0942ea3f05694fc07b",
    measurementId: "G-D1V0X3XZVZ"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;