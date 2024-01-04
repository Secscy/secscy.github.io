import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



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
    
    const db = firebase.firestore();



    


function createData() {
    const name = document.getElementById("name").value; // Get data from form fields
    // ... other fields
    db.collection("yourCollection").add({
        name,
        // ... other fields
    })
    .then(() => {
        console.log("Data added successfully!");
        // Clear form fields and display success message
    })
    .catch((error) => {
        console.error("Error adding data:", error);
        // Display error message
    });
}



function getData() {
    db.collection("yourCollection")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                // Display data in the table
            });
        })
        .catch((error) => {
            console.error("Error getting data:", error);
        });
}



function updateData(id) {
    const name = document.getElementById("name").value; // Get updated data from form fields
    // ... other fields
    db.collection("yourCollection").doc(id).update({
        name,
        // ... other fields
    })
    .then(() => {
        console.log("Data updated successfully!");
        // Display success message
    })
    .catch((error) => {
        console.error("Error updating data:", error);
        // Display error message
    });
}



function deleteData(id) {
    db.collection("yourCollection").doc(id).delete()
    .then(() => {
        console.log("Data deleted successfully!");
        // Remove data from the table
    })
    .catch((error) => {
        console.error("Error deleting data:", error);
        // Display error message
    });
}

