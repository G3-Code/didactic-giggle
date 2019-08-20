let pattern = {
  username: /^[a-z\d]{5,12}$/i,
  email: /([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?/,
  password: /[\w@-]{8,20}/,
  telephone: /^\d{11}$/g,
  slug: /[a-z\d-]{8,20}/i
};

//validate the regex
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "input-type valid";
  } else {
    field.className = "input-type invalid";
  }
}

// get the nodes and add event listeners
let inputTypes = document.querySelectorAll(".input-type");
inputTypes.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, pattern[e.target.name]);
  });
});
