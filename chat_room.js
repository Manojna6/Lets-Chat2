

  user_name = localStorage.getItem("Username");
  console.log(user_name);
  console.log(document.getElementById("username"))
  document.getElementById("username").innerHTML = "Welcome, " + user_name;
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUbLdpXFKQif6QAVGvk5gabFiUWwcswn8",
    authDomain: "lets-chat-9bc9d.firebaseapp.com",
    databaseURL: "https://lets-chat-9bc9d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-9bc9d",
    storageBucket: "lets-chat-9bc9d.appspot.com",
    messagingSenderId: "481710097890",
    appId: "1:481710097890:web:e39246120097f60c3ea5bb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  