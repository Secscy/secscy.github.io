
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCYliQfq0fOvgrXF29Zuicr8BiX2VLbIQE",
  authDomain: "cdtacesso.firebaseapp.com",
  projectId: "cdtacesso",
  storageBucket: "cdtacesso.appspot.com",
  messagingSenderId: "411616434320",
  appId: "1:411616434320:web:d8428570f438ddeff2a015",
  measurementId: "G-KRVPZHNP7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Access the database instance
const database = getDatabase(app);

// Create reference to the "bandnames" collection
const bandnamesRef = ref(database, "bandnames");

function createUser() {
  // Obtém os dados do formulário
  const categoria = document.querySelector("#categoria").value;
  const cpf = document.querySelector("#cpf").value;
  const emissaoCNH = document.querySelector("#emissaoCNH").value;
  const nomeComp = document.querySelector("#nomeComp").value;
  const ufDeEmissao = document.querySelector("#ufDeEmissao").value;
  const validadeCNH = document.querySelector("#validadeCNH").value;

  // Cria um novo documento na coleção
  bandnamesRef.push({
    categoria,
    cpf,
    emissaoCNH,
    nomeComp,
    ufDeEmissao,
    validadeCNH,
});
}

