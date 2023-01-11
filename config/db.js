// Import the functions you need from the SDKs you need
const admin = require('firebase-admin')
const credentials = require('./key.json')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOc2kII5508NQh9Vcttb_gJOv4j-1xM84",
  authDomain: "greydive-19c17.firebaseapp.com",
  projectId: "greydive-19c17",
  storageBucket: "greydive-19c17.appspot.com",
  messagingSenderId: "231306648911",
  appId: "1:231306648911:web:54eae1d58f8e46f510b93a",
  measurementId: "G-BYWQWS9ZLB"
};

// Initialize Firebase
admin.initializeApp({
  credential:admin.credential.cert(credentials)
});
const db=admin.firestore()
const Person=db.collection('Person')
module.exports=Person