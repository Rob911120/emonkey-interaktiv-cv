// main.js - interaktiv logik och tracking

// Håller koll på om varje sektion är öppnad
tconst sections = {
  om: false,
  arbeid: false,
  prosjekt: false
};

// Starta timer när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
  // Visar knapp automatiskt om alla modaler redan öppnats innan 2 min (alternativt kan man ta bort timer helt om man vill)
  setTimeout(() => {
    checkIfAllVisited();
  }, 120000); // 2 minuter
});

// Öppna modal för en sektion
function openModal(section) {
  const texts = {
    om: '<h2>Om meg</h2><p>Her står det om meg (navn, adresse, personlig info).</p>',
    arbeid: '<h2>Arbeidserfaring</h2><p>Her beskrives mine tidligere stillinger og oppgaver.</p>',
    prosjekt: '<h2>Prosjekt</h2><p>Her lister jeg opp prosjekter jeg har deltatt i, enten ferdige eller pågående.</p>'
  };

  document.getElementById('modal-text').innerHTML = texts[section];
  document.getElementById('modal').style.display = 'block';

  // Markera som läst
  sections[section] = true;
  checkIfAllVisited();
}

// Stäng modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Kollar om alla sektioner är besökta
function checkIfAllVisited() {
  const allVisited = Object.values(sections).every(v => v === true);
  if (allVisited) {
    document.getElementById('analyzeBtn').style.display = 'inline-block';
  }
}

// Triggers webhook för analys och visar meddelande
function triggerAnalysis() {
  fetch('https://hook.make.com/din-webhook-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      events: sections
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Din analyse genereres nå! Du kan laste ned PDF om et øyeblikk.');
    } else {
      alert('Noe gikk galt ved generering. Vennligst prøv igjen senere.');
    }
  })
  .catch(() => {
    alert('Kan ikke kontakte analysen. Sjekk nettverk eller webhook-URL.');
  });
}
