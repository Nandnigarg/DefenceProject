
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgK_FrIutqjtWNAPyICncyybrk4ZDYf4c",
    authDomain: "otp-verification-d2d34.firebaseapp.com",
    projectId: "otp-verification-d2d34",
    storageBucket: "otp-verification-d2d34.appspot.com",
    messagingSenderId: "661004221716",
    appId: "1:661004221716:web:ddaf9ae1ce9351594f1601"
}
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};