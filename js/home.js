/* Nav: close the mobile menu after jumping to a section */

const menu = document.getElementById('navbarMenu');
const menuToggle = document.getElementById('navbarToggle');

if (menu && menuToggle) {
  const syncLabel = () => {
    menuToggle.setAttribute('aria-label', menu.classList.contains('is-open') ? 'Close menu' : 'Open menu');
  };

  menuToggle.addEventListener('click', syncLabel);

  menu.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    syncLabel();
  });
}

/* Scroll reveal — siblings stagger in by their order */

const revealEls = document.querySelectorAll('[data-reveal]');

revealEls.forEach((el) => {
  const siblings = [...el.parentElement.children].filter((child) => child.hasAttribute('data-reveal'));
  el.style.setProperty('--d', `${siblings.indexOf(el) * 80}ms`);
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      revealObserver.unobserve(el);

      // Hand the element back to its own transitions (hover, filter) once it has settled
      const delay = parseFloat(el.style.getPropertyValue('--d')) || 0;
      setTimeout(() => el.removeAttribute('data-reveal'), 700 + delay);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* "Who needs care?" — fades the services that don't fit that person */

const whoButtons = document.querySelectorAll('[data-who]');
const serviceCards = document.querySelectorAll('.svc[data-for]');
const whoStatus = document.getElementById('whoStatus');

const whoLabels = {
  me: 'you',
  child: 'your kids',
  parent: 'your parents',
};

whoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const who = button.dataset.who;
    let matches = 0;

    whoButtons.forEach((other) => other.setAttribute('aria-pressed', String(other === button)));

    serviceCards.forEach((card) => {
      const isMatch = who === 'all' || card.dataset.for.split(' ').includes(who);
      card.classList.toggle('is-dimmed', !isMatch);
      if (isMatch) matches += 1;
    });

    if (whoStatus) {
      whoStatus.textContent = who === 'all'
        ? `Showing all ${matches} services`
        : `${matches} services for ${whoLabels[who]}`;
    }
  });
});

