
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, FacebookAuthProvider  
 } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
//GoogleAuthProvider, signInWithPopup, FacebookAuthProvider  


//import { FacebookAuthProvider } from "firebase/auth";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDVrpKhzUyupv2gPA6cXa7ws0ziT2TVjpg",
    authDomain: "prestigious-app.firebaseapp.com",
    databaseURL: "https://prestigious-app-default-rtdb.firebaseio.com",
    projectId: "prestigious-app",
    storageBucket: "prestigious-app.firebasestorage.app",
    messagingSenderId: "247314856088",
    appId: "1:247314856088:web:feeaf32b99e050304378ed",
    measurementId: "G-M0HEJQ3M55"
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getDatabase();
  const providerr = new FacebookAuthProvider();

// document.getElementById("registerUser").addEventListener("click", ()=>{

//     let firstName = document.getElementById("firstname").value;
//     let lastname = document.getElementById("lastname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
     
//     if (firstName == "" || lastname == "" || email == "" || password == "" ) {
//       alert("All field are required")

//     } 

//     let userInfo = {
//         firstName, lastname, email, password, createdAt: new Date().toISOString(),
//     }
    

//     console.log(userInfo)
//     createUserWithEmailAndPassword(auth, email,
//     password)
//     .then((user)=>{
//         console.log(user)
    
//         let uid = user.user.uid
//         console.log(uid)
//         alert("Signup Successfully!") 
    

//     let userRef = ref(db, `users/${uid}`)
//     set(userRef, userInfo)
//     .then(()=>{
//       console.log("user info saved")
//       location.href = "./pro.html"
//     })
//     .catch((error)=>{
//       console.log(error)
//       console.log("user info not saved")
//       alert("Error with signingup")
//     })
//     })
//     .catch((error)=>{
//         console.log(error)
//      })
//     });





facebook.addEventListener("click", ()=>{
    signInWithPopup(auth, providerr)
     .then((result) => {
        console.log(result)
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
     alert("Signed Up Successfully😁")
      location.href ="./cart-page.html"

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error)
     alert("Trouble in Signning you up 😒")
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
   
  });
})







   google.addEventListener("click", ()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert("Signed Up Successfully!😁")
    location.href ="./cart-page.html"
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error)
    alert("Trouble in Siggning up up 😒")
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    })


     


   
