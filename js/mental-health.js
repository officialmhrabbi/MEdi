/* Therapist finder — filter cards by name/focus text and specialty */

const thSearch = document.getElementById('thSearch');
const thSpecialty = document.getElementById('thSpecialty');
const thCards = [...document.querySelectorAll('#thList .doc')];
const thEmpty = document.getElementById('thEmpty');

function filterTherapists() {
  const query = thSearch.value.trim().toLowerCase();
  const specialty = thSpecialty.value;
  let shown = 0;

  thCards.forEach((card) => {
    const text = `${card.dataset.search} ${card.textContent}`.toLowerCase();
    const match = (!query || text.includes(query)) && (!specialty || card.dataset.specialty === specialty);
    card.hidden = !match;
    if (match) shown += 1;
  });

  thEmpty.hidden = shown > 0;
}

if (thSearch && thSpecialty) {
  thSearch.addEventListener('input', filterTherapists);
  thSpecialty.addEventListener('change', filterTherapists);
}
