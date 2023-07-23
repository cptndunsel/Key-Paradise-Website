// reservation form validation 
document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.querySelector("#reservation-form");

  reservationForm.addEventListener("submit", function (event) {
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

    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];

    let checkInDateInput = document.querySelector("#check-in-date");
    let checkOutDateInput = document.querySelector("#check-out-date");
    let adultsInput = document.querySelector("#adults");
    let childrenInput = document.querySelector("#children");

    let isValid = true;

    // Paramaters for invalid inputs and error messages on reservation form
    if (checkInDateInput.value === "") {
      isValid = false;
      checkInDateInput.classList.add("error")
      document.querySelector("#check-in-date-error").textContent = "Please enter a check in date."
    }
    else if (checkInDateInput.value < formattedCurrentDate) {
      isValid = false;
      checkInDateInput.classList.add("error")
      document.querySelector("#check-in-date-error").textContent = "Your check in date cannot be set in the past."
    }
    else {
      clearErrorMessage(checkInDateInput);
    }

    if (checkOutDateInput.value === "") {
      isValid = false;
      checkOutDateInput.classList.add("error")
      document.querySelector("#check-out-date-error").textContent = "Please enter a check out date."
    }
    else if (checkOutDateInput.value < formattedCurrentDate) {
      isValid = false;
      checkOutDateInput.classList.add("error")
      document.querySelector("#check-out-date-error").textContent = "Your check out date cannot be set in the past."
    }
    else if (checkOutDateInput.value < checkInDateInput.value) {
      isValid = false;
      checkOutDateInput.classList.add("error")
      document.querySelector("#check-out-date-error").textContent = "You cannot check out before you check in!"
    }
    else {
      clearErrorMessage(checkOutDateInput);
    }

    if (adultsInput.value === "" || parseInt(adultsInput.value) <= 0) {
      isValid = false;
      adultsInput.classList.add("error");
      childrenInput.classList.add("error");
      document.querySelector("#adults-error").textContent = "The number of adults cannot be zero."
    }
    else {
      clearErrorMessage(adultsInput);
    }

    // If the above conditions are valid, the form will submit
    if (isValid) {
      this.submit();
    }

  });
});
