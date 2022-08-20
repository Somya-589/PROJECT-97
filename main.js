function adduser(){
    username=document.getElementById("name_ofchild").value ;
    localStorage.setItem("username",username);
    window.location="room.html";
};