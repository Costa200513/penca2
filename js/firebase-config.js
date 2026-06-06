// Pegá acá la configuración real que te da Firebase Console → Project settings → Your apps → Web app.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PEGAR_API_KEY",
  authDomain: "PEGAR_AUTH_DOMAIN",
  projectId: "PEGAR_PROJECT_ID",
  storageBucket: "PEGAR_STORAGE_BUCKET",
  messagingSenderId: "PEGAR_MESSAGING_SENDER_ID",
  appId: "PEGAR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
