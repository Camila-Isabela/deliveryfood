import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBZ08KTS8SdzOvW21FJS6TVCgSGp4OtdXI",
    authDomain: "deliveryfood-5dd22.firebaseapp.com",
    databaseURL: "https://deliveryfood-5dd22-default-rtdb.firebaseio.com",
    projectId: "deliveryfood-5dd22",
    storageBucket: "deliveryfood-5dd22.appspot.com",
    messagingSenderId: "1072498747718",
    appId: "1:1072498747718:web:58702e9ebea8410bb45d47"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage }
