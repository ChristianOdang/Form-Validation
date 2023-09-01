// Selecting form input elements
const form = document.querySelector("form");
const passwdInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error message
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closet(".form-group").appendChild(errorElement);
};

// Function to handle form submission
const handleFormData = (e) => {
  e.preventDefault();

  // Retrieving input elements
  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const dataInput = document.getElementById("data");
  const genderInput = document.getElementById("gender");

  // Getting trimmed values from input fields
  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwdInput.value.trim();
  const date = dataInput.value;
  const gender = genderInput.value;

  // Regular expression pattern for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Clearing previous error message
  document
    .querySelectorAll(".form-group.error")
    .forEach((field) => field.classList.remove(error));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  // Performing the validation checks
  if (fullname === "") {
    showError(fullnameInput, "Enter your full name");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Enter a valid email address");
  }
  if (password === "") {
    showError(passwdInput, "Enter your password");
  }
  if (date === "") {
    showError(dataInput, "Select your date of birth");
  }
  if (gender === "") {
    showError(genderInput, "Select your gender");
  }

  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group.error");
  if (errorInputs.length > 0) return;

  form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
  passToggleBtn.className = passwdInput.type === "password" ?
    "fa-solid fa-eye-slash" : "fa-solid fa-eye";
  passwdInput.type = passwdInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);