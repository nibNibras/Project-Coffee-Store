const hamburger = document.getElementById('hamburger-menu');
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.navbar-nav a');
const overlay = document.getElementById('nav-overlay');

const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');

function toggleMenu() {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');

  // Toggle icons
  if (nav.classList.contains('active')) {
    iconMenu.style.display = 'none';
    iconClose.style.display = 'inline-block';
  } else {
    iconMenu.style.display = 'inline-block';
    iconClose.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

// Close on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    iconMenu.style.display = 'inline-block';
    iconClose.style.display = 'none';
  });
});

// Close on overlay click
overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  iconMenu.style.display = 'inline-block';
  iconClose.style.display = 'none';
});


