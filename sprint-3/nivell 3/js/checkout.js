/*En aquest exercici hauràs d'implementar la lògica perquè els camps del formulari compleixin les següents condicions:
okis - Tots els camps són obligatoris.
okis - Tots els camps han de tenir almenys 3 caràcters.
okis - El nom i cognoms han de contenir només lletres.
okis - El telèfon ha de contenir només números.
okis - La contrasenya ha d'incloure números i lletres.
okis - L'email ha de tenir format d'email.
*/

var primerElement = document.getElementById('primer');

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {               
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

