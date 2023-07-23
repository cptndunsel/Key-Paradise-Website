// contact form validation 
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#newsletter-form");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
  //Function to clear error prompts
      function clearErrorMessage(inputElement) {
        const errorElement = inputElement.nextElementSibling;
        errorElement.textContent = "";
      }
  
      const errorElements = document.querySelectorAll(".error");
      errorElements.forEach(function (element) {
        element.classList.remove("error");
      });
  
      let emailAddressInput = document.querySelector("#email-adress");
      
      let isValid = true;

      // Paramaters for invalid inputs and error messages on contact form
      const emailPattern = /^\S+@\S+\.\S+$/;
      if (emailAddressInput.value === "" || !emailPattern.test(emailAddressInput.value)) {
        isValid = false;
        emailAddressInput.classList.add("error");
        document.querySelector("#email-error").textContent = "Please enter a valid email address.";
      } else {
        clearErrorMessage(emailAddressInput);
      }

         // If the above conditions are valid, the form will submit
         if (isValid) {
            this.submit();
          }
          
        });
    });