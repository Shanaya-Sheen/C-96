var firebaseConfig = {
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

  user_name=localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
    }