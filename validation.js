let pattern = {
  username: /^[a-z\d]{5,12}$/i,
  email: /[a-z]/,
  password: /[\w@-]{8,20}/,
  telephone: /^\d{11}$/g,
  slug: /[a-z\d-]{8,20}/i
};

//validate the regex
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// get the nodes and add event listeners
let inputTypes = document.querySelectorAll(".input-type");
inputTypes.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, pattern[e.target.name]);
  });
});
