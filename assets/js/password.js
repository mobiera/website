const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");
const children = document.querySelector("#togglePassword #img");

togglePassword.addEventListener("click", function (e) {
  e.preventDefault();
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  const src =
    children.getAttribute("src") === "/images/eye-close.svg"
      ? "/images/eye-open.svg"
      : "/images/eye-close.svg";
  children.setAttribute("src", src);
});
