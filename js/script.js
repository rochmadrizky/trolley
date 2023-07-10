// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  };
};

// Dark mode
const sunIcon = document.querySelector('.btn-theme-sun')
const moonIcon = document.querySelector('.btn-theme-moon')

sunIcon.addEventListener('click', toggleDarkTheme)
moonIcon.addEventListener('click', toggleDarkTheme)

function toggleDarkTheme() {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    
    moonIcon.classList.remove('hidden')
    sunIcon.classList.add('hidden')

  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    moonIcon.classList.add('hidden')
    sunIcon.classList.remove('hidden')
  }
};

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  sunIcon.classList.remove('hidden')
  moonIcon.classList.add('hidden')
};



// Add Start
const plus = document.querySelector('.plus');
minus = document.querySelector('.minus');
num = document.querySelector('.num');

let a = 1;

plus.addEventListener('click', ()=>{
  a++;
  a = (a < 1) ? '0' + a : a;
  num.innerText = a;
});

minus.addEventListener('click', ()=>{
  if (a > 1) {
    a--;
    a = (a < 1) ? '0' + a : a;
    num.innerText = a;
  };
});

// Year date
const yearSpan = document.querySelector('#fullYear');
const fullYear = new Date();
yearSpan.innerText = fullYear.getFullYear();
