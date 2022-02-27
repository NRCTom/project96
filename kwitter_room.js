var firebaseConfig = {
      apiKey: "AIzaSyBNepMTh24FecCnwJOacFpEpfOH-7i6mSA",
      authDomain: "kwitter-final-e96d0.firebaseapp.com",
      databaseURL: "https://kwitter-final-e96d0-default-rtdb.firebaseio.com",
      projectId: "kwitter-final-e96d0",
      storageBucket: "kwitter-final-e96d0.appspot.com",
      messagingSenderId: "614870291843",
      appId: "1:614870291843:web:0983bc613ba150d22212b6",
      measurementId: "G-0P388N61RN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}