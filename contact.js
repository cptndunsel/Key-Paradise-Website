// contact form validation 
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact-form");
  
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
  
      let firstNameInput = document.querySelector("#first-name");
      let lastNameInput = document.querySelector("#last-name");
      let emailAddressInput = document.querySelector("#email-address");
      let phoneNumberInput = document.querySelector("#phone-number");
  
      let isValid = true;
  

      // Paramaters for invalid inputs and error messages on contact form
      if (firstNameInput.value === "") {
        isValid = false;
        firstNameInput.classList.add("error");
        document.querySelector("#first-name-error").textContent = "Please enter your name.";
      } else {
        clearErrorMessage(firstNameInput);
      }
  
      if (lastNameInput.value === "") {
        isValid = false;
        lastNameInput.classList.add("error");
        document.querySelector("#last-name-error").textContent = "Please enter your last name.";
      } else {
        clearErrorMessage(lastNameInput);
      }
  
      const emailPattern = /^\S+@\S+\.\S+$/;
      if (emailAddressInput.value === "" || !emailPattern.test(emailAddressInput.value)) {
        isValid = false;
        emailAddressInput.classList.add("error");
        document.querySelector("#email-error").textContent = "Please enter a valid email address.";
      } else {
        clearErrorMessage(emailAddressInput);
      }
  
      const phonePattern = /^\d{10}$/;
      if (phoneNumberInput.value === "" || !phonePattern.test(phoneNumberInput.value)) {
        isValid = false;
        phoneNumberInput.classList.add("error");
        document.querySelector("#phone-error").textContent = "Please enter your phone number.";
      } else {
        clearErrorMessage(phoneNumberInput);
      }
  
      // If the above conditions are valid, the form will submit
      if (isValid) {
        this.submit();
      }  
    });
  });