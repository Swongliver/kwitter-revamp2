username=localStorage.getItem("username",username)
document.getElementById("username").innerHTML="Welcome "+username;
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBQX1NpOsF55xQoQAL9R2QR5LNnNHnZs8c",
      authDomain: "kwitter-fb77d.firebaseapp.com",
      databaseURL: "https://kwitter-fb77d-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb77d",
      storageBucket: "kwitter-fb77d.appspot.com",
      messagingSenderId: "516178910838",
      appId: "1:516178910838:web:a0a81fa95c28fce5408957"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      window.location="index.html";
}