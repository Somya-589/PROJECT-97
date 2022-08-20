var firebaseConfig = {
    apiKey: "AIzaSyADA-8tznwPOWlKMw-MUBZzOUWtiTpZaog",
    authDomain: "letschatwebsite-c150e.firebaseapp.com",
    databaseURL: "https://letschatwebsite-c150e-default-rtdb.firebaseio.com",
    projectId: "letschatwebsite-c150e",
    storageBucket: "letschatwebsite-c150e.appspot.com",
    messagingSenderId: "846359318830",
    appId: "1:846359318830:web:08b8266708ae62d82eeabf"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

Welcome__user = localStorage.getItem("username");
document.getElementById("Welcom_user").innerHTML = "Welcome  " + Welcome__user ;

function addroom(){
  roomname = document.getElementById("roomname").value ;
  firebase.database().ref("/").child(roomname).update({
    purpose : "added the new room"
  });
  localStorage.setItem("nameofroom",roomname);
  window.location = "Chat.html";
}
function getData() {
  firebase.database().ref("/").on('value',function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
    Room_names = childKey;
    row = "<div id="+Room_names+" onclick='Rooms(this.id)'>#"+Room_names+"</div>";
    document.getElementById("output").innerHTML += row;
   });
  });
};
getData();
function Rooms(name){
  localStorage.setItem("nameof_room",name);
  window.location="Chat.html";
};
function logout(){
  localStorage.removeItem("nameofroom");
  localStorage.removeItem("username");
  window.location="index.html";
}