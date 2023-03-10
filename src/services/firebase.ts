import firebase from 'firebase';
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MENSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();


export { firebase, auth, database };

// test firebase
// try {
//   const app = initializeApp(firebaseConfig);
//   console.log('Firebase conectado com sucesso!');
// } catch (error) {
//   console.error('Erro ao conectar ao Firebase: ', error);
// }
