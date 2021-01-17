import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhcWz0LZ__f7kezYN6iwf48_WHSalJ5Fg",
    authDomain: "slack-460a1.firebaseapp.com",
    databaseURL: "https://slack-460a1.firebaseio.com",
    projectId: "slack-460a1",
    storageBucket: "slack-460a1.appspot.com",
    messagingSenderId: "220764845372",
    appId: "1:220764845372:web:1985eddc99de7ce2e71a39",
    measurementId: "G-N4ESPBPRW3"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebaseApp.auth()
const provider=new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db
