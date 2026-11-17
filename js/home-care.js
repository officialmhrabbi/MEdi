/* Care program tabs, with arrow-key support and "Explore care" deep links */

const hcTabs = [...document.querySelectorAll('.hc-tab')];
const hcPanels = hcTabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

function selectProgram(index, moveFocus) {
  hcTabs.forEach((tab, i) => {
    const active = i === index;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    hcPanels[i].hidden = !active;
  });
  if (moveFocus) hcTabs[index].focus();
}

hcTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectProgram(index, false));
  tab.addEventListener('keydown', (event) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (event.key in keys) {
      event.preventDefault();
      selectProgram((index + keys[event.key] + hcTabs.length) % hcTabs.length, true);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      selectProgram(event.key === 'Home' ? 0 : hcTabs.length - 1, true);
    }
  });
});

document.querySelectorAll('.hc-link[data-tab]').forEach((link) => {
  link.addEventListener('click', () => {
    const index = hcTabs.findIndex((tab) => tab.id === `tab-${link.dataset.tab}`);
    if (index > -1) selectProgram(index, false);
  });
});
