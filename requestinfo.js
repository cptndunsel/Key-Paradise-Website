// info form validation 
document.addEventListener("DOMContentLoaded", function () {
  const requestForm = document.querySelector("#request-form");
  const stateProvinceSelect = document.getElementById("state-province");

  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

//State input selection
  const stateProvinceOptions = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" }
  ];

  function generateStateProvinceOptions() {
    for (const option of stateProvinceOptions) {
      const optionElement = document.createElement("option");
      optionElement.value = option.code;
      optionElement.textContent = option.name;
      stateProvinceSelect.appendChild(optionElement);
    }
  }

  generateStateProvinceOptions();

  requestForm.addEventListener("submit", function (event) {
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
    let addressInput = document.querySelector("#address");
    let stateProvinceInput = document.querySelector("#state-province");
    let postalCodeInput = document.querySelector("#postal-code");
    let eventTypeInput = document.querySelector("#event-type");
    let startDateInput = document.querySelector("#start-date");
    let endDateInput = document.querySelector("#end-date");
    let numGuestsInput = document.querySelector("#num-guests");

    let isValid = true;

    // Perform custom validation
    if (firstNameInput.value === "") {
      isValid = false;
      firstNameInput.classList.add("error");
      document.querySelector("#first-name-error").textContent = "Please enter your first name.";
    }
    else {
      clearErrorMessage(firstNameInput);
    }

    if (lastNameInput.value === "") {
      isValid = false;
      lastNameInput.classList.add("error");
      document.querySelector("#last-name-error").textContent = "Please enter your last name.";
    }
    else {
      clearErrorMessage(lastNameInput);
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (emailAddressInput.value === "" || !emailPattern.test(emailAddressInput.value)) {
      isValid = false;
      emailAddressInput.classList.add("error");
      document.querySelector("#email-error").textContent = "Please enter a valid email address.";
    }
    else {
      clearErrorMessage(emailAddressInput);
    }

    const phonePattern = /^\d{10}$/;
    if (phoneNumberInput.value === "" || !phonePattern.test(phoneNumberInput.value)) {
      isValid = false;
      phoneNumberInput.classList.add("error");
      document.querySelector("#phone-error").textContent = "Please enter your phone number.";
    }
    else {
      clearErrorMessage(phoneNumberInput);
    }

    if (addressInput.value === "") {
      isValid = false;
      addressInput.classList.add("error");
      document.querySelector("#address-error").textContent = "Please enter your address.";
    }
    else {
      clearErrorMessage(addressInput);
    }

    if (stateProvinceInput.value === "") {
      isValid = false;
      stateProvinceInput.classList.add("error");
      document.querySelector("#state-error").textContent = "Please select your state.";
    }
    else {
      clearErrorMessage(stateProvinceInput);
    }

    if (postalCodeInput.value === "") {
      isValid = false;
      postalCodeInput.classList.add("error");
      document.querySelector("#zip-error").textContent = "Please enter your zip or postal code.";
    }
    else {
      clearErrorMessage(postalCodeInput);
    }

    if (eventTypeInput.value === "") {
      isValid = false;
      eventTypeInput.classList.add("error");
      document.querySelector("#event-error").textContent = "Please tell us what type of event you are planning.";
    }
    else {
      clearErrorMessage(eventTypeInput);
    }

    if (startDateInput.value === "") {
      isValid = false;
      startDateInput.classList.add("error");
      document.querySelector("#start-date-error").textContent = "Please enter the event start date.";
    }
    else if (startDateInput.value < formattedCurrentDate) {
      isValid = false;
      startDateInput.classList.add("error")
      document.querySelector("#start-date-error").textContent = "Your event date cannot be set in the past."
    }
    else {
      clearErrorMessage(startDateInput);
    }

    if (endDateInput.value === "") {
      isValid = false;
      endDateInput.classList.add("error");
      document.querySelector("#end-date-error").textContent = "Please enter the event end date.";
    }
    else if (endDateInput.value < formattedCurrentDate) {
      isValid = false;
      endDateInput.classList.add("error")
      document.querySelector("#end-date-error").textContent = "Your event end date cannot be set in the past."
    }
    else if (endDateInput.value < startDateInput.value) {
      isValid = false;
      endDateInput.classList.add("error")
      document.querySelector("#end-date-error").textContent = "Your event cannot end before it starts!"
    }
    else {
      clearErrorMessage(endDateInput);
    }

    if (numGuestsInput.value === "") {
      isValid = false;
      numGuestsInput.classList.add("error");
      document.querySelector("#num-guests-error").textContent = "Please enter the number of guests.";
    }
    else if (numGuestsInput.value <= "0") {
      isValid = false;
      numGuestsInput.classList.add("error");
      document.querySelector("#num-guests-error").textContent = "The number of guests cannot be zero."
    }
    else {
      clearErrorMessage (numGuestsInput);
    }

    // If the above conditions are valid, the form will submit
    if (isValid) {
      this.submit();
    }
  });
});

