const doctorProfile = document.getElementById('doctorProfile');
const doctorNotFound = document.getElementById('doctorNotFound');

function setText(id, text) {
  document.getElementById(id).textContent = text;
}

function withArticle(word) {
  return (/^[aeiou]/i.test(word) ? 'an ' : 'a ') + word;
}

function renderStars(container, rating) {
  const rounded = Math.round(rating * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('i');
    if (rounded >= i) star.className = 'fa-solid fa-star';
    else if (rounded >= i - 0.5) star.className = 'fa-solid fa-star-half-stroke';
    else star.className = 'fa-regular fa-star';
    star.setAttribute('aria-hidden', 'true');
    container.appendChild(star);
  }

  container.setAttribute('aria-label', `Rated ${rating} out of 5`);
}

function renderSlots(container, slots) {
  slots.forEach((time) => {
    const slot = document.createElement('button');
    slot.type = 'button';
    slot.className = 'doc-slot';
    slot.textContent = time;
    slot.setAttribute('aria-pressed', 'false');

    slot.addEventListener('click', () => {
      container.querySelectorAll('.doc-slot').forEach((other) => {
        other.setAttribute('aria-pressed', String(other === slot));
      });
    });

    container.appendChild(slot);
  });
}

function renderDoctor(doctor) {
  const dept = DEPARTMENTS[doctor.dept];
  const lastName = doctor.name.split(' ').pop();

  document.title = `${doctor.name}, ${doctor.specialty} | UpCare Mediconnect`;
  document.querySelector('meta[name="description"]').setAttribute('content',
    `Book a telehealth or in-person appointment with ${doctor.name}, ${doctor.specialty} at UpCare Mediconnect.`);

  const badge = document.getElementById('doctorDeptBadge');
  badge.textContent = dept.name;
  badge.classList.add(`doc-badge--${dept.tone}`);

  const photo = document.getElementById('doctorPhoto');
  photo.alt = `Photo of ${doctor.name}`;

  setText('doctorName', doctor.name);
  setText('doctorSpecialty', doctor.specialty);
  setText('doctorRating', doctor.rating.toFixed(1));
  setText('doctorReviewCount', `(${doctor.reviews} reviews)`);
  setText('doctorExperience', `${doctor.years}+ years`);
  setText('doctorLocation', `UpCare Mediconnect — ${dept.name}`);

  setText('doctorAboutTitle', `About Dr. ${lastName}`);
  setText('doctorBio',
    `${doctor.name} is ${withArticle(doctor.specialty.toLowerCase())} in our ${dept.name} department ` +
    `with ${doctor.years}+ years of clinical experience. Their work focuses on ${doctor.focus}. ` +
    'They offer both in-person visits and secure telehealth consultations, with compassionate, evidence-based care for every patient.');
  setText('doctorDept', dept.name);

  const focusList = document.getElementById('doctorFocus');
  doctor.areas.forEach((area) => {
    const item = document.createElement('li');
    item.textContent = area;
    focusList.appendChild(item);
  });

  renderSlots(document.getElementById('doctorSlots'), doctor.slots || DEFAULT_SLOTS);

  setText('doctorRatingLarge', doctor.rating.toFixed(1));
  renderStars(document.getElementById('doctorStars'), doctor.rating);
  setText('doctorReviewNote', `Based on ${doctor.reviews} patient reviews`);

  doctorProfile.hidden = false;
}

const doctorId = new URLSearchParams(window.location.search).get('id');
const doctor = DOCTORS.find((item) => item.id === doctorId);

if (doctor) {
  renderDoctor(doctor);
} else {
  doctorNotFound.hidden = false;
}
