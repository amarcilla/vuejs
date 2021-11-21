// Get the input fields
// var password = document.querySelector(".password");
// var phone = document.querySelector('.Phone No.');
// var name = document.querySelector('.First Name');
// var name = document.querySelector('.Last Name');
// var name = document.querySelector('.Email');
// var name = document.querySelector('.Address');
var nom = document.querySelector('#firstName');
var cognom = document.querySelector('#lastName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var adresa= document.querySelector('#address');
var telefon = document.querySelector('#phone');



// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    if (nom.value === "" || cognom.value === "") {
        alert("All fields are required!");
     }

    console.log(nom.value);
    nom.classList.add("error");


}