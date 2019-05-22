// import app from "firebase/app";
// // import app from "firebase";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3ETepVqyRRneKIwjWO8ObpTfb1OTnczI",
//   authDomain: "news-7ac67.firebaseapp.com",
//   databaseURL: "https://news-7ac67.firebaseio.com",
//   projectId: "news-7ac67",
//   storageBucket: "news-7ac67.appspot.com",
//   messagingSenderId: "585539712829",
//   appId: "1:585539712829:web:e373bc9a24479721"
// };

// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//   }

//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
// }

// export default Firebase;

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA3ETepVqyRRneKIwjWO8ObpTfb1OTnczI",
  authDomain: "news-7ac67.firebaseapp.com",
  databaseURL: "https://news-7ac67.firebaseio.com",
  projectId: "news-7ac67",
  storageBucket: "news-7ac67.appspot.com",
  messagingSenderId: "585539712829",
  appId: "1:585539712829:web:e373bc9a24479721"
};

firebase.initializeApp(config);

export default firebase;
