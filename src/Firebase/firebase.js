import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyChKJNYUDDiHilK1dqlSYfjp7AGLNOs35A',
  authDomain: 'clone-eb9fe.firebaseapp.com',
  projectId: 'clone-eb9fe',
  storageBucket: 'clone-eb9fe.appspot.com',
  messagingSenderId: '189253746995',
  appId: '1:189253746995:web:1fdb71bf4d47598a9cbe46',
  measurementId: 'G-BTW89LE4EH',
});

// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
