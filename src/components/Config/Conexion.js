// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebasebrixxi as firebase } from '../Config/Firebase.config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebase.apiKey,
    authDomain: firebase.authDomain,
    projectId: firebase.projectId,
    storageBucket: firebase.storageBucket,
    messagingSenderId: firebase.messagingSenderId ,
    appId: firebase.appId
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);