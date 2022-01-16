// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcSFi65eQ_RYzxBtIp8WIqxbG8XRO4Ayc",
  authDomain: "lets-chat-web-app-bd0d9.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-bd0d9-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-bd0d9",
  storageBucket: "lets-chat-web-app-bd0d9.appspot.com",
  messagingSenderId: "181606416950",
  appId: "1:181606416950:web:d4a2e177210d51e9cece97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = document.getElementById("user_name").value;
room_name = document.getElementById("room_name").value;
function send(){
  msg =  document.getElementById("msg").value
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });   
  document.getElementById("msg").value = "";
}