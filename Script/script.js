
  

var config = {
        apiKey: "AIzaSyDgMml6CuoYiET5jwy5T4MP2gs6if_Y9Tg",
        authDomain: "cashjeeto-e2960.firebaseapp.com",
        databaseURL: "https://cashjeeto-e2960-default-rtdb.firebaseio.com",
        projectId: "cashjeeto-e2960",
        storageBucket: "cashjeeto-e2960.appspot.com",
        messagingSenderId: "661240217249",
        appId: "1:661240217249:web:f48dc391f32ecadfc93ae0"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
console.log("sdkfdk")
  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
  console.log(newMessageRef)
}
