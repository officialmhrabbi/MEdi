const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    const isOpen = navbarMenu.classList.toggle('is-open');
    navbarToggle.setAttribute('aria-expanded', isOpen);
  });
}

const dropdowns = document.querySelectorAll('.navbar__dropdown');

function closeDropdown(dropdown) {
  dropdown.classList.remove('is-open');
  const toggle = dropdown.querySelector('.navbar__dropdown-toggle, .navbar__lang');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector('.navbar__dropdown-toggle, .navbar__lang');
  if (!toggle) return;

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);

    dropdowns.forEach((other) => {
      if (other !== dropdown) closeDropdown(other);
    });
  });
});

document.addEventListener('click', (event) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) closeDropdown(dropdown);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    dropdowns.forEach(closeDropdown);
  }
});
