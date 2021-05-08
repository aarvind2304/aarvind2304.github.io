firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

   

    var user = firebase.auth().currentUser;

    if(user != null){

      
     console.log(done);

    }

  } else {
    // No user is signed in.
      
   
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {

    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    
    // ...
  });

  


  

}

function logout(){
  firebase.auth().signOut();
}

function create_account()
{
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

  window.alert("You have successfully created an account!");
  
  window.open("../../index.html","_self")


 
}

 function cancel()
  {
    window.open("../../index.html","_self");
  }