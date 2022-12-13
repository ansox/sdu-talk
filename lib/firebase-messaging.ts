import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCd4gE4sZ5_JEVHQzLhJyzgLZnVg_BT1O0",
  authDomain: "sdu-talks.firebaseapp.com",
  projectId: "sdu-talks",
  storageBucket: "sdu-talks.appspot.com",
  messagingSenderId: "311887505202",
  appId: "1:311887505202:web:63441d40bfec5f2da9992b"
};

export function initFirebase() {
  const app = initializeApp(firebaseConfig);

  const messaging = getMessaging(app);

  getToken(messaging, {vapidKey: "BGqRwE8UDXKZfwxWfWh8l2syDNRgzh2Hfm7enc_kSpStQkyMHhBrihxQjL5-lslK1P0ukCmQx9EQrzSfnhEgD-4"});

  onMessage(messaging, (payload) => {
    console.log('Message received', payload);
  })
}