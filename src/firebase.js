import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIe1o8mvKeSjXHT0PSwko0Y27o7flM3Bg',
  authDomain: 'popyeweather-352f0.firebaseapp.com',
  databaseURL: 'https://popyeweather-352f0.firebaseio.com',
  projectId: 'popyeweather-352f0',
  storageBucket: 'popyeweather-352f0.appspot.com',
  messagingSenderId: '824948431301',
  appId: '1:824948431301:web:26af4f6d57e622993793ac',
  measurementId: 'G-6EGQQV8B92',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
