// var slideIndex= 1;



// function showSlides(n){
// 	var i;
// 	var slides = document.getElementsByClassName("slide");

// 	for (i = 0; i < slides.length; i++) {
// 	  slides[i].style.display = "none";  
// 	}

// 	if(n > slides.length) {
// 		slideIndex=1;
// 	}

// 	if(n<1){
// 		slideIndex = slides.length;
// 	}

// 	slides[slideIndex-1].style.display = "block";
// }

// showSlides(1);


// function plusSlides(n) {
// 	slideIndex += n;
// 	showSlides(slideIndex);
// }


// setInterval(plusSlides, 3000, 1);

document.addEventListener("DOMContentLoaded", function () {
  const loginToggle = document.getElementById("login-toggle");
  const loginForm = document.getElementById("login-form");

  loginToggle.addEventListener("click", function () {
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
      loginForm.style.display = "block";
    } else {
      loginForm.style.display = "none";
    }
  });
});




/* //////////////////index//////////////////////////// */











/* //////////////////men//////////////////////////// */







/* //////////////////women//////////////////////////// */









/* //////////////////accesores//////////////////////////// */

'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);





