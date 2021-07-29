import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-XdE_RrWSddseGYXe6y_eTGVsAARp7aE",
  authDomain: "disney-plus-clone-b355e.firebaseapp.com",
  projectId: "disney-plus-clone-b355e",
  storageBucket: "disney-plus-clone-b355e.appspot.com",
  messagingSenderId: "7462397664",
  appId: "1:7462397664:web:05c94fe27cc5c7426c9285",
  measurementId: "G-NLTPGQR66Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
