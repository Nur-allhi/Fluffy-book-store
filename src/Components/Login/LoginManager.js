import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Configs/firebase.config";

export const initializeAppLoginFrameWork = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      handleAuthToken();
      return result.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleAuthToken = () => {
  return firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      return idToken;
    })
    .catch(function (error) {
      console.log(error);
    });
};
