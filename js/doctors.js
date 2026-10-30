const DEPARTMENTS = {
  cardiology: { name: 'Cardiology', tone: 'red' },
  neurology: { name: 'Neurology', tone: 'purple' },
  pediatrics: { name: 'Pediatrics', tone: 'blue' },
  dermatology: { name: 'Dermatology', tone: 'green' },
  orthopedics: { name: 'Orthopedics', tone: 'blue' },
  gynecology: { name: "Gynecology & Women's Health", tone: 'pink' },
  diagnostics: { name: 'Diagnostics & Lab Testing', tone: 'teal' },
};

const DEFAULT_SLOTS = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

// `focus` finishes the sentence "Their work focuses on ..."; `areas` are the Areas of Focus list.
const DOCTORS = [
  // Cardiology
  { id: 'sarah-johnson', name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', dept: 'cardiology', years: 15, rating: 4.9, reviews: 214,
    focus: 'interventional and general cardiology', areas: ['Interventional cardiology', 'General cardiology'] },
  { id: 'ahmed-khan', name: 'Dr. Ahmed Khan', specialty: 'Interventional Cardiologist', dept: 'cardiology', years: 12, rating: 4.8, reviews: 167,
    focus: 'angioplasty and stents', areas: ['Angioplasty', 'Coronary stents'] },
  { id: 'lisa-chen', name: 'Dr. Lisa Chen', specialty: 'Cardiac Surgeon', dept: 'cardiology', years: 20, rating: 4.9, reviews: 302,
    focus: 'heart valve and bypass surgery', areas: ['Heart valve surgery', 'Bypass surgery'] },
  { id: 'robert-williams', name: 'Dr. Robert Williams', specialty: 'Electrophysiologist', dept: 'cardiology', years: 10, rating: 4.7, reviews: 98,
    focus: 'heart rhythm disorders', areas: ['Heart rhythm disorders'] },
  { id: 'maria-torres', name: 'Dr. Maria Torres', specialty: 'Preventive Cardiologist', dept: 'cardiology', years: 8, rating: 4.8, reviews: 76,
    focus: 'lifestyle changes and cardiovascular risk reduction', areas: ['Lifestyle medicine', 'Risk reduction'] },

  // Neurology
  { id: 'emily-parker', name: 'Dr. Emily Parker', specialty: 'Neurologist', dept: 'neurology', years: 14, rating: 4.9, reviews: 188,
    focus: 'migraine and epilepsy', areas: ['Migraine', 'Epilepsy'] },
  { id: 'raul-mehta', name: 'Dr. Raul Mehta', specialty: 'Neurosurgeon', dept: 'neurology', years: 18, rating: 4.8, reviews: 241,
    focus: 'spinal and brain surgery', areas: ['Spinal surgery', 'Brain surgery'] },
  { id: 'jennifer-adams', name: 'Dr. Jennifer Adams', specialty: 'Stroke Specialist', dept: 'neurology', years: 11, rating: 4.7, reviews: 112,
    focus: 'stroke prevention and recovery', areas: ['Stroke prevention', 'Stroke recovery'] },
  { id: 'hassan-ali', name: 'Dr. Hassan Ali', specialty: 'Pediatric Neurologist', dept: 'neurology', years: 9, rating: 4.9, reviews: 87,
    focus: 'neurological care for children and adolescents', areas: ['Pediatric neurology', 'Adolescent care'] },
  { id: 'susan-martinez', name: 'Dr. Susan Martinez', specialty: 'Movement Disorder Specialist', dept: 'neurology', years: 13, rating: 4.8, reviews: 134,
    focus: "Parkinson's disease and tremor disorders", areas: ["Parkinson's disease", 'Tremor disorders'] },

  // Pediatrics
  { id: 'michael-lee', name: 'Dr. Michael Lee', specialty: 'Pediatrician', dept: 'pediatrics', years: 16, rating: 4.9, reviews: 276,
    focus: 'well-child checkups and immunizations', areas: ['Well-child checkups', 'Immunizations'] },
  { id: 'hana-lopez', name: 'Dr. Hana Lopez', specialty: 'Pediatric Allergist', dept: 'pediatrics', years: 10, rating: 4.8, reviews: 121,
    focus: 'allergies and asthma in children', areas: ['Allergies', 'Asthma'] },
  { id: 'james-wright', name: 'Dr. James Wright', specialty: 'Pediatric Endocrinologist', dept: 'pediatrics', years: 12, rating: 4.7, reviews: 109,
    focus: 'growth disorders and diabetes in children', areas: ['Growth disorders', 'Childhood diabetes'] },
  { id: 'priya-sharma', name: 'Dr. Priya Sharma', specialty: 'Pediatric Gastroenterologist', dept: 'pediatrics', years: 9, rating: 4.8, reviews: 83,
    focus: 'digestive health in children', areas: ['Pediatric digestive health'] },
  { id: 'david-brown', name: 'Dr. David Brown', specialty: 'Neonatologist', dept: 'pediatrics', years: 14, rating: 4.9, reviews: 158,
    focus: 'newborn and infant care', areas: ['Newborn care', 'Infant care'] },
  { id: 'anna-kowalski', name: 'Dr. Anna Kowalski', specialty: 'Pediatric Cardiologist', dept: 'pediatrics', years: 11, rating: 4.8, reviews: 95,
    focus: 'heart conditions in children', areas: ['Pediatric heart conditions'] },

  // Dermatology
  { id: 'aisha-rahman', name: 'Dr. Aisha Rahman', specialty: 'Dermatologist', dept: 'dermatology', years: 13, rating: 4.9, reviews: 231,
    focus: 'acne, eczema and other skin conditions', areas: ['Acne', 'Eczema', 'Skin conditions'] },
  { id: 'david-kim', name: 'Dr. David Kim', specialty: 'Cosmetic Dermatologist', dept: 'dermatology', years: 10, rating: 4.7, reviews: 143,
    focus: 'skin rejuvenation and aesthetics', areas: ['Skin rejuvenation', 'Aesthetics'] },
  { id: 'sarah-johnson-derm', name: 'Dr. Sarah Johnson', specialty: 'Pediatric Dermatologist', dept: 'dermatology', years: 9, rating: 4.8, reviews: 78,
    focus: 'skin conditions in children', areas: ['Pediatric skin conditions'] },
  { id: 'mark-thompson', name: 'Dr. Mark Thompson', specialty: 'Dermatopathologist', dept: 'dermatology', years: 15, rating: 4.8, reviews: 116,
    focus: 'skin cancer diagnosis', areas: ['Skin cancer diagnosis'] },
  { id: 'nina-patel', name: 'Dr. Nina Patel', specialty: 'Hair & Scalp Specialist', dept: 'dermatology', years: 8, rating: 4.6, reviews: 69,
    focus: 'hair loss and scalp disorders', areas: ['Hair loss', 'Scalp disorders'] },

  // Orthopedics
  { id: 'james-miller', name: 'Dr. James Miller', specialty: 'Orthopedic Surgeon', dept: 'orthopedics', years: 17, rating: 4.8, reviews: 259,
    focus: 'joint replacement and fracture care', areas: ['Joint replacement', 'Fracture care'] },
  { id: 'julia-chen', name: 'Dr. Julia Chen', specialty: 'Sports Medicine Specialist', dept: 'orthopedics', years: 11, rating: 4.9, reviews: 147,
    focus: 'sports-related injuries', areas: ['Sports injuries'] },
  { id: 'kevin-rodriguez', name: 'Dr. Kevin Rodriguez', specialty: 'Spine Specialist', dept: 'orthopedics', years: 14, rating: 4.7, reviews: 132,
    focus: 'back and spinal conditions', areas: ['Back conditions', 'Spinal conditions'] },
  { id: 'michelle-davis', name: 'Dr. Michelle Davis', specialty: 'Pediatric Orthopedist', dept: 'orthopedics', years: 9, rating: 4.8, reviews: 74,
    focus: 'growth-related conditions and surgery in children', areas: ['Pediatric growth conditions', 'Pediatric surgery'] },
  { id: 'thomas-wilson', name: 'Dr. Thomas Wilson', specialty: 'Podiatrist', dept: 'orthopedics', years: 12, rating: 4.6, reviews: 101,
    focus: 'foot and ankle care', areas: ['Foot care', 'Ankle care'] },

  // Gynecology & Women's Health
  { id: 'maria-gonzalez', name: 'Dr. Maria Gonzalez', specialty: 'Gynecologist', dept: 'gynecology', years: 15, rating: 4.9, reviews: 238,
    focus: 'general reproductive health', areas: ['Reproductive health'] },
  { id: 'rachel-evans', name: 'Dr. Rachel Evans', specialty: 'Obstetrician', dept: 'gynecology', years: 13, rating: 4.8, reviews: 196,
    focus: 'prenatal and delivery care', areas: ['Prenatal care', 'Delivery care'] },
  { id: 'amanda-taylor', name: 'Dr. Amanda Taylor', specialty: 'Reproductive Endocrinologist', dept: 'gynecology', years: 10, rating: 4.8, reviews: 124,
    focus: 'fertility and hormone care', areas: ['Fertility', 'Hormone care'] },
  { id: 'stephanie-lee', name: 'Dr. Stephanie Lee', specialty: 'Gynecologic Oncologist', dept: 'gynecology', years: 14, rating: 4.9, reviews: 107,
    focus: 'gynecologic cancers', areas: ['Gynecologic cancers'] },
  { id: 'fatima-hassan', name: 'Dr. Fatima Hassan', specialty: 'Menopause Specialist', dept: 'gynecology', years: 12, rating: 4.7, reviews: 89,
    focus: 'menopause and midlife care', areas: ['Menopause', 'Midlife care'] },

  // Diagnostics & Lab Testing
  { id: 'oliver-grant', name: 'Dr. Oliver Grant', specialty: 'Radiologist', dept: 'diagnostics', years: 16, rating: 4.8, reviews: 142,
    focus: 'diagnostic imaging', areas: ['Diagnostic imaging'] },
  { id: 'noor-fatima', name: 'Dr. Noor Fatima', specialty: 'Pathologist', dept: 'diagnostics', years: 11, rating: 4.7, reviews: 91,
    focus: 'lab analysis and diagnostics', areas: ['Lab analysis', 'Diagnostics'] },
  { id: 'carlos-mendez', name: 'Dr. Carlos Mendez', specialty: 'Nuclear Medicine Physician', dept: 'diagnostics', years: 13, rating: 4.8, reviews: 68,
    focus: 'PET and nuclear imaging', areas: ['PET imaging', 'Nuclear imaging'] },
  { id: 'helen-wang', name: 'Dr. Helen Wang', specialty: 'Interventional Radiologist', dept: 'diagnostics', years: 10, rating: 4.7, reviews: 77,
    focus: 'image-guided procedures', areas: ['Image-guided procedures'] },
  { id: 'richard-clark', name: 'Dr. Richard Clark', specialty: 'Clinical Lab Director', dept: 'diagnostics', years: 18, rating: 4.9, reviews: 103,
    focus: 'lab quality and operations', areas: ['Lab quality', 'Lab operations'] },
];
