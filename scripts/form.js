"use strict";

const form = document.querySelector("form");
const email = document.querySelector('input[type="email"]');
const emailMessage = document.querySelector(".footer__form-message-validation");
const formGroup = document.querySelector(".footer__form-group");

form.addEventListener("submit", handleSubmitForm);

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailMessage.textContent = "";
    //emailMessage.classList.remove("footer__form-message-validation_error");
    email.classList.remove("footer__input_invalid");
  } else {
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailMessage.textContent = "Você precisa inserir um endereço de e-mail.";
  } else if (email.validity.typeMismatch) {
    emailMessage.textContent = "O valor inserido precisa ser um endereço de e-mail.";
  }
  //emailMessage.classList.add("footer__form-message-validation_error");
  email.classList.add("footer__input_invalid");
}

function handleSubmitForm(event) {
  event.preventDefault();
  if (!email.validity.valid) {
    showError();
    return;
  }
  console.log("aqui");
  email.value = "";
}