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

Userwelcom = localStorage.getItem("user");
room_name = localStorage.getItem("nameof_room");

function send(){
    msg=document.getElementById("message").value ;
    firebase.database().ref(room_name).push({
        name:Userwelcom,
        like:0,
        message:msg
    });
    document.getElementById("message").value="";
  }
  function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = ""; 
        snapshot.forEach(function(childSnapshot) { 
            childKey = childSnapshot.key; 
            childData = childSnapshot.val(); 
            if(childKey != "purpose") { 
                firebase_message_id = childKey; 
                message_data = childData; 
                //Start code 
                name=message_data["name"];
                message=message_data["message"];
                like=message_data["like"];
                item1="<h4>"+name+"<img id='imgbluetick' src=''> </h4>";
                item2="<h4>"+message+"</h4>";
                item3="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updatelikes(this.id)'>";
                item4="<span class='glyphicon glyphicon-thumbs-up'> likes : "+like+"</span> </button> <hr>";
                row = item1 + item2 + item3 + item4;
                document.getElementById("output").innerHTML+=row;
                //End code 
            } });
         }); 
        } ;
        getData();
        function logout(){
            localStorage.removeItem("nameof_room");
            localStorage.removeItem("user");
            window.location="index.html";
          };
function updatelikes(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updatedlikes=Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
    like:updatedlikes
            });
        };               