import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa_fhL81iuhkpDIxtk-rsOaMoGUJ4eLKI",
  authDomain: "vue-auth-test-9896f.firebaseapp.com",
  projectId: "vue-auth-test-9896f",
  storageBucket: "vue-auth-test-9896f.appspot.com",
  messagingSenderId: "1010891411797",
  appId: "1:1010891411797:web:9ba6a304cc87e57179dfdc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
