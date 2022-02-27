//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
