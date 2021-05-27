import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBgw4dj13zFYLwYtVMBjYkpEzfAL-E8YH0",
    authDomain: "starbucks-edaea.firebaseapp.com",
    projectId: "starbucks-edaea",
    storageBucket: "starbucks-edaea.appspot.com",
    messagingSenderId: "26167891225",
    appId: "1:26167891225:web:7636768320e8428f49a188"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()

  export {auth}
