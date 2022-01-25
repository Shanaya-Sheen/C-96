
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvECcEoWATuWbWALIUAiD33oEK8LcRIZw",
    authDomain: "c-94-b7a56.firebaseapp.com",
    databaseURL: "https://c-94-b7a56-default-rtdb.firebaseio.com",
    projectId: "c-94-b7a56",
    storageBucket: "c-94-b7a56.appspot.com",
    messagingSenderId: "1078002153242",
    appId: "1:1078002153242:web:3a62f5511a0665196edea3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/LMAO/").child(user_name).update({purpose: "addingUser"});
  }