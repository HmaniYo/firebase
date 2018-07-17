  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDpzACk2XnfCcU2SbiK8UcW1QKJyZV6gEY",
    authDomain: "test-80085.firebaseapp.com",
    databaseURL: "https://test-80085.firebaseio.com",
    projectId: "test-80085",
    storageBucket: "test-80085.appspot.com",
    messagingSenderId: "547716034599"
  };
  firebase.initializeApp(config);
var messageRef=firebase.database().ref('messages');
$("#formulaire").submit(submitform)
function submitform(event){
    event.preventDefault()
    var name= document.getElementById("name").value;
    var Email= document.getElementById("email").value;
    var subject= document.getElementById("subject").value;
    var message= document.getElementById("message").value;
    saveMessage(name,Email,subject,message)
}
function saveMessage(name,Email,subject,message){
    messageRef.push({
        name: name,
        Email: Email,
        subject: subject,
        message: message
    })
    alert('message sent')
    $("#popup").css("display","block")
}

