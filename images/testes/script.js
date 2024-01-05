
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
