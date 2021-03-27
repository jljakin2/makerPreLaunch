const email = document.querySelector(".email");
const error = document.querySelector(".error-message");
const form = document.querySelector("form");

email.addEventListener("invalid", (e) => {
  e.preventDefault();

  error.classList.add("show-error");
  email.classList.add("show-error--border");
});

email.addEventListener("keydown", (e) => {
  error.classList.remove("show-error");
  email.classList.remove("show-error--border");
});

form.addEventListener("submit", (e) => {
  if (!email.value) {
    e.preventDefault();
  }
});
