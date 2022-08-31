// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXHpzlLvjKqqj0Cv0Hj6CWIsL4GufoPgE",
  authDomain: "sportcommunityapp.firebaseapp.com",
  projectId: "sportcommunityapp",
  storageBucket: "sportcommunityapp.appspot.com",
  messagingSenderId: "205745050116",
  appId: "1:205745050116:web:0d4f185bd4eb1b28509b51",
  measurementId: "G-5NQTTBVQ2B"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };