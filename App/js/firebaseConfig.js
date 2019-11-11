  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB6cTbKlKmtwmxMAryGswTzmsCd744Iy68",
    authDomain: "farmstatusapp-c0207.firebaseapp.com",
    databaseURL: "https://farmstatusapp-c0207.firebaseio.com",
    projectId: "farmstatusapp-c0207",
    appId: "1:353992149303:web:309cff2b312bb693f9b2b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Reference to Auth & Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();
  //Update Firestore
  db.settings({ timestampsInSnapshots: true });