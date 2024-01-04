
const passwordTrigger = document.getElementById("password-trigger");
const container = document.querySelector(".container");
const newContainer = document.querySelector(".newContainer");

passwordTrigger.addEventListener("click", () => {
  const password = prompt("Insira a senha:");
  if (password === "#Senha123") {
    container.style.display = "none";
    newContainer.style.display = "block";
    initializeFirebase();
  } else {
    container.style.display = "block";
    newContainer.style.display = "none";
    alert("Senha incorreta");
  }
});

function initializeFirebase() {

    console.log("I'm working")

}

