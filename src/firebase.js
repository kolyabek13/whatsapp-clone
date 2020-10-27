import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAoNKl08jQ5SYuJnf1f2n18DmFt6wIx9BU",
    authDomain: "whatsapp-clone-c76be.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c76be.firebaseio.com",
    projectId: "whatsapp-clone-c76be",
    storageBucket: "whatsapp-clone-c76be.appspot.com",
    messagingSenderId: "1088601084363",
    appId: "1:1088601084363:web:5ab8960bb3ce6d2fd5664e",
    measurementId: "G-4JXQNM51V8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export {auth, provider}
  export default db