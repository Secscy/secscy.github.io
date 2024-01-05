
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


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


const passwordTrigger = document.getElementById("password-trigger");
const container = document.querySelector(".container");
const newContainer = document.querySelector(".newContainer");
const showUsers = document.querySelector(".showUsers");
const botaoShowUsers = document.querySelector(".botaoShowUsers");
const botaoShowImages = document.querySelector(".botaoShowImages");
const showImages = document.querySelector(".showImages");
const addUsers = document.querySelector(".addUsers");
const viewUsers = document.querySelector(".viewUsers");
const botaoViewUsers = document.querySelector(".botaoViewUsers");
const botaoAddUsers = document.querySelector(".botaoAddUsers");
const oqDesejaFazer = document.querySelector(".oqDesejaFazer");
const botaoDeleteUsers = document.querySelector(".botaoDeleteUsers");
const deleteUsers = document.querySelector(".deleteUsers");

passwordTrigger.addEventListener("click", () => {
  const password = prompt("Insira a senha:");
  if (password === "#Senha123") {
    container.style.display = "none";
    newContainer.style.display = "block";
  } else {
    container.style.display = "block";
    newContainer.style.display = "none";
    alert("Senha incorreta");
  }
});

function skipPass(){
  newContainer.style.display = "block";
  oqDesejaFazer.style.display = "block";
  container.style.display = "none";
  showUsers.style.display ="none";
  addUsers.style.display ="none";
  viewUsers.style.display ="none";
  deleteUsers.style.display = "none";
  showImages.style.display ="none";
}

botaoShowUsers.addEventListener("click", () => {
  oqDesejaFazer.style.display = "none";
  showUsers.style.display ="block";
});


botaoAddUsers.addEventListener("click", () => {
  oqDesejaFazer.style.display ="none";
  addUsers.style.display ="block";
});

botaoViewUsers.addEventListener("click", () => {
  oqDesejaFazer.style.display ="none";
  viewUsers.style.display ="block";
});

botaoDeleteUsers.addEventListener("click", () => {
  oqDesejaFazer.style.display ="none";
  deleteUsers.style.display ="block";
});


// PRA DEPOIS SHOW IMAGES

botaoShowImages.addEventListener("click", () => {
  oqDesejaFazer.style.display ="none";
  showImages.style.display ="block";
});



function viewUser(cpf){

  //Essas funções estarão no script do firebase direto no html

}

function deleteUser(cpf){
 
  //Essas funções estarão no script do firebase direto no html
  console.log(cpf);
 
}


