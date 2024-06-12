const form = document.querySelector("#form");
const fName = document.querySelector("#fname");
const lName = document.querySelector("#lname");
const email = document.querySelector("#email");
const text = document.querySelector("#t-area");
const checkBox = document.querySelector("#check");
const radioOpt1 = document.getElementById("opt1");
const radioOpt2 = document.getElementById("opt2");
const alert = document.querySelector(".alert-hidden");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

// Error and success for first and last Name, email and text message;

const setError = (element, message) => {
  const inputControl = element;
  const errorMsg = element.nextElementSibling;

  inputControl.style.borderColor = "#ff3333";
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element;
  const errorMsg = element.nextElementSibling;

  inputControl.style.borderColor = "hsl(169, 82%, 27%)";
  errorMsg.style.display = "none";
};

// To check email is valid or not

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(email).toLowerCase());
};

// Error and success for input checkbox

const isAgreeError = (element, message) => {
  const nextSibling = element.nextElementSibling;
  const agreeErrorMsg = nextSibling.nextElementSibling;

  agreeErrorMsg.style.display = "block";
  agreeErrorMsg.innerText = message;
};

const isAgreeSuccess = (element) => {
  const nextSibling = element.nextElementSibling;
  const agreeErrorMsg = nextSibling.nextElementSibling;

  agreeErrorMsg.style.display = "none";
};

const validateInputs = () => {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = text.value.trim();

  if (fNameValue === "") {
    setError(fName, "This field is required");
  } else {
    setSuccess(fName);
  }

  if (lNameValue === "") {
    setError(lName, "This field is required");
  } else {
    setSuccess(lName);
  }

  if (emailValue === "") {
    setError(email, "Email address cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  // Error and success for radio input

  if (radioOpt1.checked) {
    radioOpt1.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
    radioOpt2.parentElement.style.borderColor = "hsl(186, 15%, 59%)";
    document.querySelector("#radio-errormsg").style.display = "none";
  } else if (radioOpt2.checked) {
    radioOpt2.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
    radioOpt1.parentElement.style.borderColor = "hsl(186, 15%, 59%)";
    document.querySelector("#radio-errormsg").style.display = "none";
  } else {
    document.querySelector("#radio-errormsg").style.display = "block";
    document.querySelector("#radio-errormsg").innerText =
      "Please select a query type";
  }

  if (messageValue === "") {
    setError(text, "This field is required");
  } else if (messageValue.length < 50) {
    setError(text, "Message needs at least 50 words");
  } else {
    setSuccess(text);
  }

  if (checkBox.checked) {
    isAgreeSuccess(checkBox);
  } else {
    isAgreeError(
      checkBox,
      "To submit this form, please consent to being contacted"
    );
  }

  if (!setError && !isAgreeError && !radioOpt1.checked && !radioOpt2.checked) {
    // alert.style.display = "block";
    alert("There are no errors.");
  } else {
    // alert.style.display = "none";
    alert("There are errors.");
  }
};
