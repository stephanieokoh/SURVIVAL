const firebaseConfig = {
  apiKey: "AIzaSyAPDf08-PtNp06X4l3SUdz28oGhwg3z3j0",
  authDomain: "survival-bab40.firebaseapp.com",
  databaseURL: "https://survival-bab40-default-rtdb.firebaseio.com",
  projectId: "survival-bab40",
  storageBucket: "survival-bab40.appspot.com",
  messagingSenderId: "180707888995",
  appId: "1:180707888995:web:b101aafd87ba7c898d0d56"
};


firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("survival-bab40");

document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("username");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("message");
    
    console.log(name, emailid, msgContent);

    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alerti").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alerti").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };