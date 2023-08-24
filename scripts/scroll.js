"use strict";

const btnBackTop = document.querySelector(".btn-back-top");

document.addEventListener("scroll", (event) => {
  if (window.scrollY > 0)
    btnBackTop.classList.remove("btn-back-top_hidden");
  else
    btnBackTop.classList.add("btn-back-top_hidden");
});