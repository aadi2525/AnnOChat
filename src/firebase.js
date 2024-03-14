import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// const firebaseConfig = {
//   apiKey: "AIzaSyBXahZ6e1kX5BQxj57pJYHTAEWlaNuDnRo",
//   authDomain: "anno-chat-app.firebaseapp.com",
//   projectId: "anno-chat-app",
//   storageBucket: "anno-chat-app.appspot.com",
//   messagingSenderId: "660314466232",
//   appId: "1:660314466232:web:ca81cab14734317505914d"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAAS9ED5K_hYrxCvJ0wVxh6S4n6xjTjuy8",
  authDomain: "anno-chat.firebaseapp.com",
  projectId: "anno-chat",
  storageBucket: "anno-chat.appspot.com",
  messagingSenderId: "166469298474",
  appId: "1:166469298474:web:24ab5caa5bd900c31b5653"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();