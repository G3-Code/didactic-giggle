let pattern = {
  username: /[a-z]/,
  email: /[a-z]/,
  password: /[a-z]/,
  telephone: /^\d{11}$/g,
  slug: /[a-z]/
};

//validate the regex
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.style.border = "2px solid green";
  } else {
    field.style.border = "2px solid orange";
  }
}

// get the nodes and add event listeners
let inputTypes = document.querySelectorAll(".input-type");
inputTypes.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, pattern[e.target.name]);
  });
});
