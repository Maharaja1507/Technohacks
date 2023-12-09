const form = document.querySelector("#form");
const userfname = document.querySelector("#userfname");
const userlname = document.querySelector("#userlname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const userfnameVal = userfname.value.trim();
  const userlnameVal = userlname.value.trim();
  const emailval = email.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();
  let success = true;

  if (userfnameVal === "") {
    success = false;
    seterror(userfname, "First Name is required");
  } else {
    setsucess(userfname);
  }

  if (userlnameVal === "") {
    success = false;
    seterror(userlname, "Last Name is required");
  } else {
    setsucess(userlname);
  }

  if (emailval === "") {
    success = false;
    seterror(email, "Email is required");
  } else if (!validateEmail(emailval)) {
    success = false;
    seterror(email, "Please enter a valid email ");
  } else setsucess(email);

  if (passwordval === "") {
    success = false;
    seterror(password, "password is required");
  } else if (passwordval.length < 8) {
    success = false;
    seterror(password, "password must be atleast 8 characters long");
  } else setsucess(password);

  if (cpasswordval === "") {
    success = false;
    seterror(cpassword, "Confirm password id required");
  } else if (cpasswordval !== passwordval) {
    success = false;
    seterror(cpassword, "password does not match");
  } else {
    setsucess(cpassword);
  }
  return success;
}

function seterror(element, message) {
  const sectiongroup = element.parentElement;
  const errorelement = sectiongroup.querySelector(".error");
  errorelement.innerText = message;
  sectiongroup.classList.add("error");
  sectiongroup.classList.remove("success");
}

function setsucess(element) {
  const sectiongroup = element.parentElement;
  const errorelement = sectiongroup.querySelector(".error");
  errorelement.innerText = "";
  sectiongroup.classList.add("sucess");
  sectiongroup.classList.remove("error");
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};
