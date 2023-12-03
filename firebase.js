// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { async } from "regenerator-runtime";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7I7-zWX936DIAwNQ-J_4UGYpCnkc_UJs",
  authDomain: "tuongtacnguoimay-75c39.firebaseapp.com",
  projectId: "tuongtacnguoimay-75c39",
  storageBucket: "tuongtacnguoimay-75c39.appspot.com",
  messagingSenderId: "175824208602",
  appId: "1:175824208602:web:79f5661a66676a81355be3"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

// Lấy tham chiếu đến collection trong Firestore
// var myCollection = firestore.collection('articles');

// Lấy dữ liệu từ collection
// myCollection.get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//     // doc.data() chứa dữ liệu từ Firestore
//     var data = doc.data();
//     console.log(data);
//   });
// });

const db = getFirestore(FirebaseApp);


export {FirebaseApp, db };