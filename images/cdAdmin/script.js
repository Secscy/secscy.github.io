const passwordTrigger = document.getElementById("password-trigger");
const container = document.querySelector(".container");
const newContainer = document.querySelector(".newContainer");
const showAllUsers = document.querySelector(".showAllUsers");
const botaoShowAllUsers = document.querySelector(".botaoShowAllUsers");
const botaoShowImages = document.querySelector(".botaoShowImages");
const showImages = document.querySelector(".showImages");
const addUsersScreen = document.querySelector(".addUsersScreen");
const viewUsersScreen = document.querySelector(".viewUsersScreen");
const botaoViewUsers = document.querySelector(".botaoViewUsers");
const botaoAddUsers = document.querySelector(".botaoAddUsers");
const oqDesejaFazerScreen = document.querySelector(".oqDesejaFazerScreen");
const botaoDeleteUsers = document.querySelector(".botaoDeleteUsers");
const deleteUsersScreen = document.querySelector(".deleteUsersScreen");

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
  oqDesejaFazerScreen.style.display = "block";
  container.style.display = "none";
  showAllUsers.style.display ="none";
  addUsersScreen.style.display ="none";
  viewUsersScreen.style.display ="none";
  deleteUsersScreen.style.display = "none";
  showImages.style.display ="none";
}

botaoShowAllUsers.addEventListener("click", () => {
  oqDesejaFazerScreen.style.display = "none";
  showAllUsers.style.display ="block";
});


botaoAddUsers.addEventListener("click", () => {
  oqDesejaFazerScreen.style.display ="none";
  addUsersScreen.style.display ="block";
});

botaoViewUsers.addEventListener("click", () => {
  oqDesejaFazerScreen.style.display ="none";
  viewUsersScreen.style.display ="block";
});

botaoDeleteUsers.addEventListener("click", () => {
  oqDesejaFazerScreen.style.display ="none";
  deleteUsersScreen.style.display ="block";
});


// PRA DEPOIS SHOW IMAGES

botaoShowImages.addEventListener("click", () => {
  oqDesejaFazerScreen.style.display ="none";
  showImages.style.display ="block";
});


const cpfInput = document.getElementById("cpf");
const cpfDaImagemInput = document.getElementById("cpfDaImagem");
const cpfViewInput = document.getElementById("cpfView");
const cpfDeleteInput = document.getElementById("cpfDelete");
const emissaoCNHInput = document.getElementById("emissaoCNH");
const validadeCNHInput = document.getElementById("validadeCNH");

const formatCPF = (value) => {
  cpfInput.maxLength = 14;
  cpfDaImagemInput.maxLength = 14;
  cpfViewInput.maxLength = 14;
  cpfDeleteInput.maxLength = 14;



  return value
    .replace(/\D/g, "") // Remove non-digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2");
};

const formatDate = (value) => {
  let date = value;

  // Coloca uma barra após os primeiros dois números
  if (date.length === 2) {
    date += "/";
  }

  // Coloca uma barra após os próximos dois números
  if (date.length === 5) {
    date += "/";
  }

  // Impedimos que o usuário digite mais números
  if (date.length === 8) {
    date += "";
  }

  emissaoCNHInput.maxLength = 10;
  validadeCNHInput.maxLength = 10;

  return date;
};

// Event listener for CPF input
cpfInput.addEventListener("input", (event) => {
  event.target.value = formatCPF(event.target.value);
});
cpfDaImagemInput.addEventListener("input", (event) => {
  event.target.value = formatCPF(event.target.value);
});
cpfViewInput.addEventListener("input", (event) => {
  event.target.value = formatCPF(event.target.value);
});
cpfDeleteInput.addEventListener("input", (event) => {
  event.target.value = formatCPF(event.target.value);
});

// Event listeners for date inputs
emissaoCNHInput.addEventListener("input", (event) => {
  event.target.value = formatDate(event.target.value);
});
validadeCNHInput.addEventListener("input", (event) => {
  event.target.value = formatDate(event.target.value);
});
