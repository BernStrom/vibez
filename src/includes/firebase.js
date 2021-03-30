import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAsxwMKM9yB92CtWRP1CCuysaU7xSpNQFw',
  authDomain: 'vibez-d5b23.firebaseapp.com',
  projectId: 'vibez-d5b23',
  storageBucket: 'vibez-d5b23.appspot.com',
  appId: '1:372651913293:web:de7293a33c91eeccc2ec04',
  measurementId: 'G-B8SQVF425C',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
firebase.analytics();
