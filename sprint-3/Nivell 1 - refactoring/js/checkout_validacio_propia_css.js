// Get the input fields

var nom = document.querySelector('#firstName');
var cognom = document.querySelector('#lastName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var adresa = document.querySelector('#address');
var telefon = document.querySelector('#phone');


// Get the error elements
//var errorPassword = document.getElementById("errorPassword");
//var errorName = document.getElementById('errorName');
//var errorPhone = document.getElementById('errorPhone');


// Exercise 8
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const element  = document.querySelector('form');

element.addEventListener('submit', event => {
    if (!nom.checkValidity()) {        
        console.log('Form submission cancelled.');
        document.getElementById("errorName").style.display = "inline";        
        event.preventDefault()
        event.stopPropagation()                        
    }            
  });





