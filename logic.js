  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCde095ozRbpcs8A1Yss2b4I4Tl9RelCkw",
    authDomain: "slon-70e65.firebaseapp.com",
    databaseURL: "https://slon-70e65.firebaseio.com",
    projectId: "slon-70e65",
    storageBucket: "",
    messagingSenderId: "899872242770",
    appId: "1:899872242770:web:d2510257479cb570"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

$("#submit").on("click", function (event){
    event.preventDefault();
    var name = $("#employee-name").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#start-date").val().trim();
    var monthlyRate = $("#monthly-rate").val().trim();

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });


});