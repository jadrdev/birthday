import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBTaBf5FR2mwCLw0LFwrTdH3naybYnE31k",
    authDomain: "birthday-ce8ac.firebaseapp.com",
    databaseURL: "https://birthday-ce8ac.firebaseio.com",
    projectId: "birthday-ce8ac",
    storageBucket: "birthday-ce8ac.appspot.com",
    messagingSenderId: "777870976791",
    appId: "1:777870976791:web:3ec83c0e35ffa7c66e7952"
  };

export default firebase.initializeApp(firebaseConfig);
