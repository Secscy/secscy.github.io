
// Import the functions you need from the SDKs you need
import { initializeApp, getFirestore } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDrILJtw4J1jHIOal-TljOpUp4ka78kkPw",
  authDomain: "cdtacesso.firebaseapp.com",
  projectId: "cdtacesso",
  storageBucket: "cdtacesso.appspot.com",
  messagingSenderId: "411616434320",
  appId: "1:411616434320:web:d8428570f438ddeff2a015",
  measurementId: "G-KRVPZHNP7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Access the firestore database instance
const db = firebase.firestore();

// Create reference to the "bandnames" collection

const bandnamesCollection = collection(db, "bandnames");


function createUser() {
    // Get data from the form (unchanged)
    const categoria = document.querySelector("#categoria").value;
    const cpf = document.querySelector("#cpf").value;
    const emissaoCNH = document.querySelector("#emissaoCNH").value;
    const nomeComp = document.querySelector("#nomeComp").value;
    const ufDeEmissao = document.querySelector("#ufDeEmissao").value;
    const validadeCNH = document.querySelector("#validadeCNH").value;
  
    // Add a new document to the collection
    addDoc(bandnamesCollection, {
      categoria,
      cpf,
      emissaoCNH,
      nomeComp,
      ufDeEmissao,
      validadeCNH,
    })
    .then(() => {
      console.log("Document added successfully!");
    })
    .catch((error) => {
      console.error("Error adding document:", error);
    });
  }