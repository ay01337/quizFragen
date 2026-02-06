const items = [
  { text: "Goldfische haben ein Gedächtnis von nur drei Sekunden.", correct: false, explanation: "Goldfische können sich bis zu 5 Monate zurück erinnern." },
  { text: "Der Mensch hat mehr als fünf Sinne.", correct: true, explanation: "Wir haben neben den Bekannten (Fühlen, Sehen, Schmecken, etc) Sinnen auch noch Temperatur, Schmerz und Gleichgewicht" },
  { text: "Der Amazonas-Regenwald erzeugt mehr als 50% des weltweiten Sauerstoffs.", correct: false, explanation: "Er produziert nur 6 bis 9% des weltweiten Sauerstoffs. Und dieser wird fast vollständig von TIeren und Pflanzen vor Ort verbraucht." },
  { text: "Erwachsene haben mehr Knochen als Babys.", correct: false, explanation: "Babies haben ca. 300 und Erwachsene 206, da Knochen zusammenwachsen." },
  { text: "Pilze sind mit Tieren viel näher verwandt als mit Pflanzen", correct: true, explanation: "Pflanzen betreiben Photosynthese und stellen ihre Nahrung selber her, Pilze und Tiere nehmen Nahrung auf anstatt sie selbst zu produzieren" },
  { text: "In einer Hand Erde leben mehr Lebewesen als Menschen auf der Welt", correct: true, explanation: "Die Anzahl Mikroorganismen geht in die Milliarden" },
  { text: "Fledermäuse sind blind", correct: false, explanation: "Sie sehen recht gut, nutzen aber Nachts zusätzlich Echoortung" },
  { text: "Es gibt mehr Sterne als Sandkörner", correct: true, explanation: "Schätzungen zufolge gibt es etwa 10 bis 70 Mal mehr Sterne als Sandkörner. (Oft hört man das gegenteil)" },
  { text: "Blauwale sind die lautesten Tiere der Welt.", correct: true, explanation: "Ihre Rufe können bis zu 188 Dezibel erreichen und über hunderte Kilometer im Ozean gehört werden." }
];
let index = 0;

const statementEl = document.getElementById("statement");
const explanationEl = document.getElementById("explanation");
const exTextEl = document.getElementById("exText");
const statusBadge = document.getElementById("statusBadge");
const progressText = document.getElementById("progressText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCard() {
  const item = items[index];
  statementEl.textContent = item.text;
  exTextEl.textContent = item.explanation;

  statusBadge.dataset.state = item.correct ? "true" : "false";
  statusBadge.querySelector(".status-icon").textContent = item.correct ? "check" : "close";
  statusBadge.querySelector(".status-text").textContent = item.correct ? "Richtig" : "Falsch";

  explanationEl.dataset.state = item.correct ? "true" : "false";
  explanationEl.hidden = item.correct;

  progressText.textContent = `Frage ${index + 1}/${items.length}`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === items.length - 1;
  nextBtn.textContent = index === items.length - 1 ? "Ende" : "Weiter";
}

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index -= 1;
    updateCard();
  }
});

nextBtn.addEventListener("click", () => {
  if (index < items.length - 1) {
    index += 1;
    updateCard();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "d") {
    nextBtn.click();
  }
  if (event.key === "ArrowLeft" || event.key === "a") {
    prevBtn.click();
  }
});

updateCard();
