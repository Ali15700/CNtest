import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAn-kWER9koDIwcXOCtUEW3_MPYkG1AhR0",
  
    authDomain: "careertest-a8ed1.firebaseapp.com",
  
    projectId: "careertest-a8ed1",
  
    storageBucket: "careertest-a8ed1.appspot.com",
  
    messagingSenderId: "247692145229",
  
    appId: "1:247692145229:web:0c1009403b2fa6dbe2e204",
  
    measurementId: "G-1JW9TR851L"
  
  };

  const app = initializeApp(firebaseConfig); //connect firebase with project
 
  export const db = getFirestore(app);