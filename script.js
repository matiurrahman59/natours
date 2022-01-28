'use strict';

// HMenu
const menuOpen = document.querySelector('.navigation__button');
const backGround = document.querySelector('.navigation__background');
const navItems = document.querySelector('.navigation__nav');

const closeModal = function () {
  menuOpen.classList.toggle('navigation__menu-show');
  backGround.classList.toggle('navigation__hide');
  navItems.classList.toggle('navigation__hide');
};
menuOpen.addEventListener('click', closeModal);

//POPUP
const bookNow = document.querySelector('.popup--1');
const popUp = document.querySelector('.popup');

console.log(bookNow);

// const popupOpen = function () {
//   // popUp.classList.remove('popup-hide');
//   popUp.classList.toggle('popup__hide');
// };
