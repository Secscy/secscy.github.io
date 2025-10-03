
// Import the functions you need from the SDKs you need

// Required for side-effects

import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, getFirestore, DocumentSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL, uploadBytes, deleteObject, listAll } from "firebase/storage";


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
const db = getFirestore(app);
const storage = getStorage(app);

// Create reference to the "bandnames" collection


  document.addEventListener("DOMContentLoaded", () => {
    async function createUser() {
        // Get data from the form (unchanged)
        const categoria = document.querySelector("#categoria").value;
        const cpf = document.querySelector("#cpf").value;
        const emissaoCNH = document.querySelector("#emissaoCNH").value;
        const nomeComp = document.querySelector("#nomeComp").value;
        const ufDeEmissao = document.querySelector("#ufDeEmissao").value;
        const validadeCNH = document.querySelector("#validadeCNH").value;
      



        //check if it already exists
        const docRef = doc(db, "bandnames", cpf);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          alert("Documento já existe, apague-o primeiro antes de reinseri-lo");
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          // Add a new document to the collection
          await setDoc(doc(db, "bandnames", cpf), {
            categoria,
            cpf,
            emissaoCNH,
            nomeComp,
            ufDeEmissao,
            validadeCNH,
          })
          .then(() => {
            console.log("Document added successfully.");
            alert("Documento adicionado com sucesso.");
          })
          .catch((error) => {
            console.error("Error adding document:", error);
            alert("Erro!");
            alert(error);
          });
        }

      }

      const imagesForm = document.querySelector(".imagesForm");

      imagesForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        showLoadingScreen();

        try {
          await handleImageUpload();
          hideLoadingScreen();
        } catch (error) {
          hideLoadingScreen();
          console.error("Error uploading images:", error);
          alert("Ocorreu algum problema");
          alert(error);
        }
      });
      
      async function handleImageUpload() {
        
        const cpfAntes = document.getElementById("cpfDaImagem").value;
        const cpf = document.getElementById("cpfDaImagem").value.replace(/[^\d]/g, "");
        const folderPath = `/${cpfAntes}`;
        const folderRef = ref(storage, folderPath);
      
        const imageInputs = document.querySelectorAll(".imagesForm input[type='file']");

        let uploadedImages = 0;
        for (const imageInput of imageInputs) {
          const file = imageInput.files[0];
      
          if (file) {
            const fileName = `${cpf}cdt${uploadedImages + 1}.png`;
            const imageRef = ref(folderRef, fileName);
      
            await uploadBytes(imageRef, await file.arrayBuffer());
            console.log(`Image ${fileName} uploaded successfully! in folder ${folderRef}`);
            uploadedImages++;
          }
        }
      
        // Create folder if it doesn't exist (optional)
        // ... Use folderRef.listAll() or alternative method for folder existence check
      
        let shouldITryToUpload = false;

        if (uploadedImages === 0) {
          alert("Por favor, selecione pelo menos uma imagem para enviar.");
        }
        else{
          shouldITryToUpload = true;
        }
      
        // Create folder if it doesn't exist (optional)
        // ... Use folderRef.listAll() or alternative method for folder existence check
        if(shouldITryToUpload){
          alert("Imagens Enviadas Com Sucesso!");
          console.log("Image upload completed!");
        }
      
      }

      
      
      function showLoadingScreen(){
        const boxesAddImages= document.getElementById("boxesAddImages");
        const botaoEnviarImagens= document.getElementById("botaoEnviarImagens");

        boxesAddImages.style.display = "block";
        botaoEnviarImagens.style.display = "none";
      }
      function hideLoadingScreen(){
        const boxesAddImages= document.getElementById("boxesAddImages");
        const botaoEnviarImagens= document.getElementById("botaoEnviarImagens");
        boxesAddImages.style.display = "none";
        botaoEnviarImagens.style.display = "block";
      }
    

    async function deleteUser() {

      const cpf = document.querySelector("#cpfDelete").value;

      const docRef = doc(db, "bandnames", cpf);
      const docSnap = await getDoc(docRef);


      if (docSnap.exists()) {

        await deleteDoc(docRef)
        .then(() => {
          alert("Documento removido com sucesso.");
          console.log(" The following doc has been removed:");
          console.log(docRef);
        })
        .catch((error) => {
          console.log("ou aqui");
          console.error("Error adding document:", error);
          alert("Erro!");
          alert(error);
        });

      } else {
        alert("Documento não existe");
        console.log("Missing document");
      }

    }

    async function deleteUserImages(){

      showLoadingScreen1();

      try {
        const cpf = document.querySelector("#cpfDelete").value;
  
        // Construct the reference to the directory to be deleted
        const directoryRef = ref(storage, cpf);
        
        // List all items in the directory
        const listResult = await listAll(directoryRef);
                
        // Iterate through each item in the directory and delete it
        for await (const itemRef of listResult.items) {
          await deleteObject(itemRef);
        }
    
        /*
        // Finally, delete the empty directory itself
        //Well, this it seems that firebase has problem with deleting directories, so for now it will be postponed.
        // Keep in mind, if you're reading this and it's now possible, you can run a script that checks all of current storage folders with the firestore database CPF's
        // to check if they have a match, and if they don't, you delete them all <3
        
        //await new Promise((resolve) => setTimeout(resolve, 500)); 

        //
        //await deleteObject(directoryRef);
        */
        hideLoadingScreen2();
        alert("Imagens Deletadas com sucesso.");
        return true;
      } catch (error) {
        console.error("Um erro ocorreu:", error);
        alert("Um erro ocorreu!");
        hideLoadingScreen2();
      }

      function showLoadingScreen1(){
        const boxesDeleteImages= document.getElementById("boxesDeleteImages");
        const botaoApagarImagens= document.getElementById("botaoDeletarImagensUsuario");

        boxesDeleteImages.style.display = "block";
        botaoApagarImagens.style.display = "none";
      }
      function hideLoadingScreen2(){
        const boxesDeleteImages= document.getElementById("boxesDeleteImages");
        const botaoApagarImagens= document.getElementById("botaoDeletarImagensUsuario");
        boxesDeleteImages.style.display = "none";
        botaoApagarImagens.style.display = "block";
      }

    }

    async function displayImages() {
      let deuErro = false;
      try {
            // Replace with the actual paths to your images in Firebase Storage
        const cpfVariable = document.querySelector("#cpfView").value;; // Replace with the actual CPF value
        const cpfWithoutDotsHyphen = cpfVariable.replace(/\.|-/g, "");

        const imagePaths = [];
        for (let i = 1; i <= 4; i++) {
          const imagePath = `${cpfVariable}/${cpfWithoutDotsHyphen}cdt${i}.png`;
          imagePaths.push(imagePath);
        }
        console.log(imagePaths);

        for (let i = 0; i < imagePaths.length; i++) {
          const imageRef = ref(storage, imagePaths[i]);
          const url = await getDownloadURL(imageRef)
          .then()
          .catch((error) => {
            console.error("Error adding document:", error);
            deuErro = true;
          });
          const imgElement = document.getElementById(`image${i + 1}`);
          imgElement.src = url;
          imgElement.classList.remove("d-none");
        }
        if(deuErro){
          alert("Ocorreu algum erro");
        }
        else{
          alert("Imagens atualizadas");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        // Handle errors gracefully, e.g., display error messages to the user
      }
    }


    async function viewUser() {

      const cpf = document.querySelector("#cpfView").value;

      const docRef = doc(db, "bandnames", cpf);
      const docSnap = await getDoc(docRef);

      console.log("Documento encontrado")


      if (docSnap.exists()) {
        console.log("Documento encontrado")
        console.log("Document data:", docSnap.data());
        

        document.getElementById("nomeCompView").textContent = docSnap.data().nomeComp;
        document.getElementById("cpfViewDois").textContent = cpf;
        document.getElementById("categoriaView").textContent = docSnap.data().categoria;
        document.getElementById("emissaoCNHView").textContent = docSnap.data().emissaoCNH;
        document.getElementById("ufDeEmissaoView").textContent = docSnap.data().ufDeEmissao;
        document.getElementById("validadeCNHView").textContent = docSnap.data().validadeCNH;


      } else {
        alert("Documento não encontrado");
        console.log("Document not found");
      }

    }

    async function showAllUsersFunction(){

      const usersList = document.querySelector(".users-list");
      const cpfList = document.querySelector(".cpf-list");


      const fetchAndPopulateUsers = async () => {
        try {
          const snapshot = await getDocs(collection(db, "bandnames"));
      
          // Example usage:
          console.log("All users:");
          snapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });
      
          const usersData = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              nomeComp: doc.get("nomeComp"), // Replace with actual field name
              cpf: doc.get("cpf"),
            };
          });
      

          usersData.forEach((user) => {
            const userListItem = document.createElement("a");
            userListItem.classList.add("list-group-item", "list-group-item-action");
            userListItem.innerHTML = `<span class="user-name">${user.nomeComp}</span> <span class="cpf">${user.cpf}</span>`;
          
            userListItem.addEventListener("click", () => {
              const cpfElement = userListItem.querySelector(".cpf");
              copyToClipboard(cpfElement.textContent); // Get CPF text content
              cpfElement.classList.add("copied"); // Add class for visual feedback

            });
          
            usersList.appendChild(userListItem);
          });
          
          function copyToClipboard(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
          }
          
        } catch (error) {
          console.error("Error fetching users:", error);
          alert("Um erro ocorreu!");
          // ... Handle error gracefully ...
        }
        
      };
      


      fetchAndPopulateUsers();

    }





    const botaoAdicionarUsuario = document.querySelector("#botaoAdicionarUsuario");
    botaoAdicionarUsuario.addEventListener("click", () => {
        createUser();
    
    });
    const botaoDeletarUsuario = document.querySelector("#botaoDeletarUsuario");
    botaoDeletarUsuario.addEventListener("click", () => {
        deleteUser();
    
    });
    const botaoDeletarImagensUsuario = document.querySelector("#botaoDeletarImagensUsuario");
    botaoDeletarImagensUsuario.addEventListener("click", () => {
        deleteUserImages();
    
    });
    const botaoVisualizarUsuario = document.querySelector("#botaoVisualizarUsuario");
    botaoVisualizarUsuario.addEventListener("click", () => {

        const userDataContainer = document.getElementById("user-data");
        userDataContainer.style.display = "block";
        viewUser();
    
    });
    const botaoShowUserImages = document.querySelector("#botaoShowUserImages");
    botaoShowUserImages.addEventListener("click", () => {
        displayImages();
    });

    const botaoMostrarUsuarios = document.querySelector("#botaoMostrarUsuarios");
    botaoMostrarUsuarios.addEventListener("click", () => {
        showAllUsersFunction();
    
    });
    
  });
