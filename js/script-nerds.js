var feedback = document.querySelector(".footer-btn");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".popup-btn-close");
var userName = document.querySelector("[name=name]");
var form = document.querySelector(".popup-form");
var email = document.querySelector("[name=email]");
var storage = localStorage.getItem("name");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-show");
  if (storage) {
    userName.value = storage;
    email.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  }  else {
    localStorage.setItem("name", userName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      popup.classList.remove("feedback-error");
    }
  }
});
