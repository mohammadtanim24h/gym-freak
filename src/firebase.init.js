import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUq67umyVHuFuT0M6PR46vFRwIUPpSq_U",
  authDomain: "gym-freak-a8e55.firebaseapp.com",
  projectId: "gym-freak-a8e55",
  storageBucket: "gym-freak-a8e55.appspot.com",
  messagingSenderId: "560986680450",
  appId: "1:560986680450:web:5106308fcb7618e042989b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;