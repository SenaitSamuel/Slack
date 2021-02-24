import firebase from 'firebase';
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyDYlGLgoXkEy76N69ut8i6molOH3_c-JMI",
    authDomain: "slack-clone-58c27.firebaseapp.com",
    projectId: "slack-clone-58c27",
    storageBucket: "slack-clone-58c27.appspot.com",
    messagingSenderId: "885291610862",
    appId: "1:885291610862:web:f9d3ab9ed5ecf19ded39ff",
    measurementId: "G-GWR4HVR4RL"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);   
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;