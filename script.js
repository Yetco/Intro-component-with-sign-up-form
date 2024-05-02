const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameInput = document.getElementById("firstName");
  const firstValue = firstNameInput.value;
  const firstpara = document.querySelector(".firstpara");

  const lastNameInput = document.getElementById("lastName");
  const lastValue = lastNameInput.value;
  const lastpara = document.querySelector(".lastpara");

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  const emailpara = document.querySelector(".emailpara");

  const passwordInput = document.getElementById("password");
  const passwordValue = passwordInput.value;
  const passwordpara = document.querySelector(".passwordpara");

  const hide = document.querySelector(".hide");
  const hide2 = document.querySelector(".hide2");
  const hide3 = document.querySelector(".hide3");
  const hide4 = document.querySelector(".hide4");

  if (firstValue === "") {
    firstNameInput.style.borderColor = "red";
    firstNameInput.placeholder = "";
    firstpara.style.color = "red";
    firstpara.innerHTML = "First Name cannot be empty";
    hide.style.display = "block";
  } else {
    firstNameInput.style.borderColor = "green";
    firstpara.innerHTML = "";
    hide.style.display = "none";
  }

  if (lastValue === "") {
    lastNameInput.style.borderColor = "red";
    lastNameInput.placeholder = "";
    lastpara.style.color = "red";
    lastpara.innerHTML = "Last Name cannot be empty";
    hide2.style.display = "block";
  } else {
    lastNameInput.style.borderColor = "green";
    lastpara.innerHTML = "";
    hide2.style.display = "none";
  }

  if (emailValue === "") {
    emailInput.style.borderColor = "red";
    emailInput.placeholder = "";
    emailpara.style.color = "red";
    emailpara.innerHTML = "Email cannot be empty";
    hide3.style.display = "block";
  } else if (!emailValue.includes("@")) {
    emailInput.style.borderColor = "red";
    emailpara.style.color = "red";
    emailpara.innerHTML = "Looks like this is not an email";
  } else {
    emailInput.style.borderColor = "green";
    emailpara.innerHTML = "";
    hide3.style.display = "none";
  }

  if (passwordValue === "") {
    passwordInput.style.borderColor = "red";
    passwordInput.placeholder = "";
    passwordpara.style.color = "red";
    passwordpara.innerHTML = "Password cannot be empty";
    hide4.style.display = "block";
  } else {
    passwordInput.style.borderColor = "green";
    passwordpara.innerHTML = "";
    hide4.style.display = "none";
  }
});

// Add event listener for input event on first name input field
const firstNameInput = document.getElementById("firstName");
firstNameInput.addEventListener("input", () => {
  // Hide icon error and reset border color when typing starts
  const iconError = document.querySelector(".hide");
  const borderColor = firstNameInput.style.borderColor;
  if (borderColor === "red") {
    iconError.style.display = "none";
    firstNameInput.style.borderColor = "";
  }
});

// Add event listener for input event on last name input field (similar to above)
const lastNameInput = document.getElementById("lastName");
lastNameInput.addEventListener("input", () => {
  const iconError = document.querySelector(".hide2");
  const borderColor = lastNameInput.style.borderColor;
  if (borderColor === "red") {
    iconError.style.display = "none";
    lastNameInput.style.borderColor = "";
  }
});

// Add event listener for input event on email input field (similar to above)
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", () => {
  const iconError = document.querySelector(".hide3");
  const borderColor = emailInput.style.borderColor;
  if (borderColor === "red") {
    iconError.style.display = "none";
    emailInput.style.borderColor = "";
  } else if (emailInput.value.includes("/")) {
    emailInput.style.borderColor = "red";
  }
});

// Add event listener for input event on password input field (similar to above)
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
  const iconError = document.querySelector(".hide4");
  const borderColor = passwordInput.style.borderColor;
  if (borderColor === "red") {
    iconError.style.display = "none";
    passwordInput.style.borderColor = "";
  }
});
