import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyALlOYnFevKAH9I03zUanavP308lx83Gt4",
  authDomain: "muso-ninjas-65f75.firebaseapp.com",
  projectId: "muso-ninjas-65f75",
  storageBucket: "muso-ninjas-65f75.appspot.com",
  messagingSenderId: "650332695845",
  appId: "1:650332695845:web:0f1edf8c6ca7032b90fecc"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }