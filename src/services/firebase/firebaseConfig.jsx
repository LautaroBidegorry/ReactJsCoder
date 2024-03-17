
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
 


const firebaseConfig = {
  apiKey: "AIzaSyA3LcjeY19av8-XZJO9X9O1J0MV7tImZA4",
  authDomain: "entregafinalreactcoder.firebaseapp.com",
  projectId: "entregafinalreactcoder",
  storageBucket: "entregafinalreactcoder.appspot.com",
  messagingSenderId: "808599570461",
  appId: "1:808599570461:web:db99706602243339efdef4",
  measurementId: "G-WWDFQNRXFG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
