
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding_room_name"});
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}
 



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name" + Room_names);
row="<div class='room_name'id= "+ Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}