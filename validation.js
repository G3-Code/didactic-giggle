let pattern = {
  username: /[a-z]/,
  email: /[a-z]/,
  password: /[a-z]/,
  telephone: /^\d{11}$/g,
  slug: /[a-z]/
};

var inputTypes = document.querySelectorAll(".input-type");
inputTypes.forEach(input => {
  input.addEventListener("keyup", e => {
    if (RegExp.test(pattern[e.target.name])) {
      console.log("Pattern matches");
    }
  });
});
