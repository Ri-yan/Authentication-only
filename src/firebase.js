import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const app = firebase.initializeApp({
  apiKey: "AIzaSyBX3fupkvpNRqnlLOi7IQMasjj5qC9cFMU",
  authDomain: "auth-dev-8fccd.firebaseapp.com",
  projectId: "auth-dev-8fccd",
  storageBucket: "auth-dev-8fccd.appspot.com",
  messagingSenderId: "178166994362",
  appId: "1:178166994362:web:415630bb01957fe9537983"
})

export const auth = app.auth()
export default app
