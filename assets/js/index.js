


firebase.auth().onAuthStateChanged(function(user) {
  

  if (user) {
    // User is signed in.
    // document.location.href = "dashboard.html";

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "User : " + email_id;

    }


  } else {


    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }

  $(document).ready(function() {

    $('body').toggleClass('loaded');

     $("#login").click(function(event){
      var userEmail = document.getElementById("email_field").value;
      var userPass = document.getElementById("password_field").value;

      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
     });

});
     $("#logout").click(function(event){

       firebase.auth().signOut();
       window.location.href("http://localhost:8000/droga/pages/");
     });
});
});

   