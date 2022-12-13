
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");


firebase.initializeApp({
  apiKey: "AIzaSyCd4gE4sZ5_JEVHQzLhJyzgLZnVg_BT1O0",
  authDomain: "sdu-talks.firebaseapp.com",
  projectId: "sdu-talks",
  storageBucket: "sdu-talks.appspot.com",
  messagingSenderId: "311887505202",
  appId: "1:311887505202:web:63441d40bfec5f2da9992b"
});

const messaging = firebase.messaging();