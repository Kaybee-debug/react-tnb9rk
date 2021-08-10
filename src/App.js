import React,{useState,useEffect}from "react";
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './Login';
import Weather from './Weather';

var firebaseConfig = {
  apiKey: "AIzaSyDKCrAYkt5memrE_8HM-9w2CkwvBiCVL2c",
    authDomain: "malehu-91d2e.firebaseapp.com",
    projectId: "malehu-91d2e",
    storageBucket: "malehu-91d2e.appspot.com",
    messagingSenderId: "1048738124730",
    appId: "1:1048738124730:web:99c4a0f033567fcf030383"
};
 firebase = firebase.initializeApp(firebaseConfig);

const App = () =>{
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAcoount,setHasAccount]=useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');

  }
  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearErrors('');
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      }

    });
  };
  const handleSingup = ()=> {
    clearErrors();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        
        setEmailError(err.message);
        break;
        case "auth/weak-password":
        setPasswordError(err.message);
        break;
      }

    });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };
  const authListener = () =>{
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        clearInputs();
        setUser(user);
       } else {
      setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();

  },[]);
  return(
    <div>
      {user ?(
        <Weather handleLogout={handleLogout}/>
      ):(
        <Login
email={email}
setEmail={setEmail}
password={password}
setPassword={setPassword}
handleLogin={handleLogin}
handleSingup={handleSingup}
hasAcoount={hasAcoount}
setHasAccount={setHasAccount}
emailError={emailError}
passwordError={passwordError}

/>

      )}

    </div>

  );
};


export default App;

















////////////////
