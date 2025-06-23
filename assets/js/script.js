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



// footer.js

// Newsletter Confirmation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".newsletter-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value;
    if (email) {
      alert("Thank you for subscribing, " + email + "!");
      form.reset();
    }
  });

  // Scroll to top functionality
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.innerHTML = "↑";
  scrollTopBtn.className = "scroll-to-top";
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const hiddenProducts = document.querySelectorAll('.hidden-product');
  let isExpanded = false;

  viewMoreBtn.addEventListener('click', function() {
    isExpanded = !isExpanded;
    
    hiddenProducts.forEach(product => {
      product.style.display = isExpanded ? 'block' : 'none';
    });
    
    this.textContent = isExpanded ? 'VIEW LESS' : 'VIEW MORE';
    
    // Smooth scroll to bottom when expanding
    if (isExpanded) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 300);
    }
  });
});



// Sample product data
const products = [
  {
    image: 'https://via.placeholder.com/300x300?text=Product+1',
    title: 'Rose des Vents Ring',
    price: '$9750.00'
  },
  {
    image: 'https://via.placeholder.com/300x300?text=Product+2',
    title: 'Turn Your Own to Big Trading',
    price: 'Quality'
  },
  {
    image: 'https://via.placeholder.com/300x300?text=Product+3',
    title: 'Turn Your Own to Business',
    price: 'Quality'
  },
  {
    image: 'https://via.placeholder.com/300x300?text=Product+4',
    title: 'Business Starter Kit',
    price: '$120.00'
  },
  {
    image: 'https://via.placeholder.com/300x300?text=Product+5',
    title: 'Premium Collection',
    price: '$450.00'
  },
  {
    image: 'https://via.placeholder.com/300x300?text=Product+6',
    title: 'Luxury Edition',
    price: '$890.00'
  },
  {
    image: 'https://via.placeholder.com/300x300?text=Product+7',
    title: 'Standard Package',
    price: '$75.00'
  },
  {
    image: 'https://via.placeholder.com/300x300?text=Product+8',
    title: 'Deluxe Bundle',
    price: '$320.00'
  }
];

// DOM elements
const productGrid = document.getElementById('productGrid');
const viewMoreBtn = document.getElementById('viewMoreBtn');

// Configuration
const initialLoadCount = 4;
const loadMoreCount = 4;
let currentIndex = 0;

// Function to create product HTML
function createProductElement(product) {
  return `
    <div class="product-item" style="background: #fff; padding: 20px; text-align: center;">
      <div class="product-image" style="height: 300px; margin-bottom: 20px; overflow: hidden;">
        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <h3 style="font-size: 1.2rem; font-weight: 400; margin-bottom: 5px;">${product.title}</h3>
      <p style="color: #888; font-size: 0.9rem;">${product.price}</p>
    </div>
  `;
}

// Function to load products
function loadProducts(count) {
  const endIndex = Math.min(currentIndex + count, products.length);
  
  for (let i = currentIndex; i < endIndex; i++) {
    productGrid.innerHTML += createProductElement(products[i]);
  }
  
  currentIndex = endIndex;
  
  // Hide button if all products are loaded
  if (currentIndex >= products.length) {
    viewMoreBtn.style.display = 'none';
  }
}

// Initial load
loadProducts(initialLoadCount);

// Event listener for View More button
viewMoreBtn.addEventListener('click', () => {
  loadProducts(loadMoreCount);
});
