/* Department tabs — one department's doctors at a time, with arrow-key support */

const deptTabs = [...document.querySelectorAll('.dept-tab')];
const deptPanels = deptTabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

function selectDept(index, moveFocus) {
  deptTabs.forEach((tab, i) => {
    const isSelected = i === index;
    tab.setAttribute('aria-selected', String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    deptPanels[i].hidden = !isSelected;
  });

  if (moveFocus) deptTabs[index].focus();
}

if (deptTabs.length) {
  const initial = Math.max(0, deptTabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true'));
  selectDept(initial, false);

  deptTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      selectDept(index, false);
      // On narrow screens the tabs scroll sideways; keep the chosen one in view
      tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });

    tab.addEventListener('keydown', (event) => {
      const last = deptTabs.length - 1;
      const keys = {
        ArrowDown: index === last ? 0 : index + 1,
        ArrowRight: index === last ? 0 : index + 1,
        ArrowUp: index === 0 ? last : index - 1,
        ArrowLeft: index === 0 ? last : index - 1,
        Home: 0,
        End: last,
      };

      if (!(event.key in keys)) return;
      event.preventDefault();
      selectDept(keys[event.key], true);
    });
  });
}
