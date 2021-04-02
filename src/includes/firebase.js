import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAsxwMKM9yB92CtWRP1CCuysaU7xSpNQFw',
  authDomain: 'vibez-d5b23.firebaseapp.com',
  projectId: 'vibez-d5b23',
  storageBucket: 'vibez-d5b23.appspot.com',
  appId: '1:372651913293:web:de7293a33c91eeccc2ec04',
  measurementId: 'G-B8SQVF425C',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const usersCollection = db.collection('users');
export const songsCollection = db.collection('songs');
export const commentsCollection = db.collection('comments');
