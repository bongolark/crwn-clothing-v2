// Copy/pasted from firebase page : https://console.firebase.google.com/project/crwn-db-v2-bbbe2/overview
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


// Your web app's Firebase configuration
// the ApiKey is not super secret. Can leave here
const firebaseConfig = {
  apiKey: "AIzaSyByNQ3PKUJZo9H2-nqR5DQgQroUMhyhXRo",
  authDomain: "crwn-db-v2-bbbe2.firebaseapp.com",
  projectId: "crwn-db-v2-bbbe2",
  storageBucket: "crwn-db-v2-bbbe2.appspot.com",
  messagingSenderId: "756247021190",
  appId: "1:756247021190:web:f9e76f8fe7808eda58b307"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
