import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCo7vD94vcil1sm36zidHsiHFE7Uln5xtA",
    authDomain: "crown-store-60cd0.firebaseapp.com",
    databaseURL: "https://crown-store-60cd0.firebaseio.com",
    projectId: "crown-store-60cd0",
    storageBucket: "crown-store-60cd0.appspot.com",
    messagingSenderId: "164638365340",
    appId: "1:164638365340:web:1e897e8e5bb83a40277f59",
    measurementId: "G-W5KY0KPX5F"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData) => {

      if(!userAuth) return;
     
      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get()

      if(!snapShot.exists) {

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        } catch (error ) {
          console.log('error creating user', error.message)
        }
      }
      return userRef;
  };

  export default firebase;

