"use strict";

const nav = document.querySelector(".nav");
const buttonMenuMobile = document.querySelector(".nav__btn-menu");
const menu = document.querySelector('[role="menu"]');
const itemsMenu = [];
let firstItemMenu = false;
let lastItemMenu = false;
const elemItemsMenu = document.querySelectorAll('[role="menuitem"]');
const containerMenu = document.querySelector(".nav__container-menu");
const buttonClose = document.querySelector(".nav__btn-close");

buttonMenuMobile.addEventListener("keydown", onButtonKeydown);
buttonMenuMobile.addEventListener("click", onButtonClick);
buttonClose.addEventListener("click", onBtnCloseClick);
buttonClose.addEventListener("keydown", onKeydownBtnClose);
window.addEventListener("mousedown", onBackgroundMousedown, true);

for (let i = 0; i < elemItemsMenu.length; i++) {
  itemsMenu.push(elemItemsMenu[i]);
  const menuItem = elemItemsMenu[i];
  menuItem.tabIndex = -1;
  menuItem.addEventListener("keydown", onMenuItemKeydown);
  menuItem.addEventListener("mouseover", onMenuitemMouseover);
  if (!firstItemMenu)
    firstItemMenu = elemItemsMenu[i];
  lastItemMenu = elemItemsMenu[i];
}

//manipuladores de evento do menu
function onButtonKeydown(event) {
  let flag = false;
  switch (event.key) {
    case '':
    case 'Enter':
    case 'ArrowDown':
    case 'Down':
      openMenu();
      flag = true;
      setFocusToFirstMenuItem();
      break;
    case 'Esc':
    case 'Escape':
      closeMenu();
      buttonMenuMobile.focus();
      flag = true;
      break;
    case 'Up':
    case 'ArrowUp':
      openMenu();
      setFocusLastItemMenu();
      flag = true;
      break;
    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
}

function onButtonClick(event) {
  if (menuIsOpen()) {
    closeMenu();
    buttonMenuMobile.focus();
  } else {
    openMenu();
    setFocusToFirstMenuItem();
  }

  event.stopPropagation;
  event.preventDefault;
}

function onBtnCloseClick(event) {
  if (menuIsOpen()) {
    closeMenu();
    buttonMenuMobile.focus();
  }

  event.stopPropagation;
  event.preventDefault;
}

function onKeydownBtnClose(event) {
  let flag = false;
  switch (event.key) {
    case 'Esc':
    case 'Escape':
      closeMenu();
      buttonMenuMobile.focus();
      flag = true;
      break;
    case 'Enter':
    case '':
      closeMenu();
      buttonMenuMobile.focus();
      flag = true;
      break;
    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
}

function onMenuItemKeydown(event) {
  let flag = false;
  if (event.ctrlKey || event.altKey || event.metaKey)
    return;
  if (event.shiftKey) {
    if (event.key === 'Tab') {
      buttonMenuMobile.focus();
      closeMenu();
      flag = true;
    }
  } else {
    switch (event.key) {
      case 'Esc':
      case 'Escape':
        closeMenu();
        buttonMenuMobile.focus();
        flag = true;
        break;
      case 'Up':
      case 'ArrowUp':
        setFocusToPreviousMenuItem(event.currentTarget);
        flag = true;
        break;
      case 'ArrowDown':
      case 'Down':
        setFocusToNextMenuItem(event.currentTarget);
        flag = true;
        break;
      case 'Home':
      case 'PageUp':
        setFocusToFirstMenuItem();
        flag = true;
        break;
      case 'End':
      case 'PageDown':
        setFocusLastItemMenu();
        flag = true;
        break;
      case 'Tab':
        closeMenu();
        break;
      default:
        break;
    }
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
}

function onMenuitemMouseover(event) {
  event.currentTarget.focus();
}

function onBackgroundMousedown(event) {
  if (!nav.contains(event.target)) {
    if (menuIsOpen()) {
      closeMenu();
      buttonMenuMobile.focus();
    }
  }
}

//functions menu
function openMenu() {
  document.body.classList.add("body_overlay");
  containerMenu.classList.add("container__menu_view");
  buttonMenuMobile.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  if (menuIsOpen()) {
    buttonMenuMobile.removeAttribute("aria-expanded");
    containerMenu.classList.remove("container__menu_view");
    document.body.classList.remove("body_overlay");
  }
}

function menuIsOpen() {
  return buttonMenuMobile.getAttribute("aria-expanded") === "true";
}

//functions para manipulação de foco
function setFocusToItemMenu(newMenuItem) {
  itemsMenu.forEach((item) => {
    if (item === newMenuItem) {
      item.tabIndex = 0;
      newMenuItem.focus();
    } else {
      item.tabIndex = -1;
    }
  });
}

function setFocusToFirstMenuItem() {
  setFocusToItemMenu(firstItemMenu);
}

function setFocusLastItemMenu() {
  setFocusToItemMenu(lastItemMenu);
}

function setFocusToPreviousMenuItem(currentMenuItem) {
  let newMenuItem, index;
  //volta para o ultimo
  if (currentMenuItem === firstItemMenu)
    newMenuItem = lastItemMenu;
  else {
    //volta para o anterior
    index = itemsMenu.indexOf(currentMenuItem);
    newMenuItem = itemsMenu[index - 1];
  }

  setFocusToItemMenu(newMenuItem);

  return newMenuItem;
}

function setFocusToNextMenuItem(currentMenuItem) {
  let newMenuItem, index;
  //vai para o primeiro 
  if (currentMenuItem === lastItemMenu) 
    newMenuItem = firstItemMenu;
  else {
    //avança um item
    index = itemsMenu.indexOf(currentMenuItem);
    newMenuItem = itemsMenu[index + 1];
  }

  setFocusToItemMenu(newMenuItem);

  return newMenuItem;
}
