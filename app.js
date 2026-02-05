const items = [
  { text: "Goldfische haben ein Gedächtnis von nur drei Sekunden.", correct: false, explanation: "Goldfische können über Wochen bis Monate lernen und sich erinnern." },
  { text: "Ein einziger Quadratmeter Boden kann bis zu 100.000 Lebewesen beheimaten.", correct: true, explanation: "Mikroorganismen, Insektenlarven, Würmer und Pilze leben extrem dicht im Boden." },
  { text: "Plastik zerfällt in der Umwelt mit der Zeit vollständig, nur sehr langsam.", correct: false, explanation: "Es zerfällt meist nur zu Mikroplastik und verschwindet nicht wirklich." },
  { text: "Ohne Insekten würde die weltweite Erntemenge für Obst und Gemüse um bis zu 90 Prozent einbrechen.", correct: true, explanation: "Viele Nutzpflanzen sind stark von Bestäubung abhängig." },
  { text: "Der Eiffelturm schrumpft im Sommer bis zu 30 Zentimeter.", correct: false, explanation: "Metalle dehnen sich bei Hitze aus, der Turm wird im Sommer etwas größer." },
  { text: "Vögel tragen zur Verbreitung vieler Pflanzenarten bei, indem sie Samen über weite Strecken transportieren.", correct: true, explanation: "Samen werden gefressen und später wieder ausgeschieden oder fallen ab." },
  { text: "Der Amazonas-Regenwald erzeugt mehr als 50 % des weltweiten Sauerstoffs.", correct: false, explanation: "Er produziert viel Sauerstoff, verbraucht ihn aber auch fast vollständig selbst." },
  { text: "Regenwürmer leben zwar im Boden, verändern dessen Eigenschaften aber kaum.", correct: false, explanation: "Sie lockern den Boden, mischen Nährstoffe und verbessern die Struktur." },
  { text: "Moore speichern große Mengen Kohlenstoff und wirken sich auf das Klima aus.", correct: true, explanation: "Pro Fläche binden Moore oft mehr Kohlenstoff als Wälder." },
  { text: "Papier ist grundsätzlich klimafreundlicher als Plastik, unabhängig vom Einsatzzweck.", correct: false, explanation: "Herstellung, Nutzung und Recycling bestimmen die Klimabilanz." },
  { text: "Trinkwasser ist weltweit vorhanden, aber sehr ungleich verteilt.", correct: true, explanation: "Knappheit ist meist ein Verteilungs- und Infrastrukturproblem." },
  { text: "Bäume haben keinen spürbaren Einfluss auf das Stadtklima.", correct: false, explanation: "Vegetation kann Hitzeinseln deutlich reduzieren und die Umgebung kühlen." },
  { text: "Ein Laubbaum kann an heißen Tagen durch Verdunstung seine Umgebung deutlich abkühlen.", correct: true, explanation: "Der Effekt ist vergleichbar mit mehreren Klimaanlagen." },
  { text: "Glas ist ökologisch immer sinnvoll, da es unbegrenzt recycelt werden kann.", correct: false, explanation: "Gewicht, Transport und Energieaufwand entscheiden über die Bilanz." },
  { text: "Der Klimawandel verändert hauptsächlich die Durchschnittstemperaturen, Extremwetter bleibt gleich.", correct: false, explanation: "Extremwetter wird häufiger und intensiver." },
  { text: "Korallen sind Tiere, leben aber in enger Gemeinschaft mit Algen.", correct: true, explanation: "Die Algen liefern Energie durch Photosynthese." },
  { text: "Mikroplastik ist weniger schädlich als großer Plastikmüll, weil es kaum sichtbar ist.", correct: false, explanation: "Es gelangt leichter in Organismen und Nahrungsketten." },
  { text: "Städte mit vielen Grünflächen heizen sich im Sommer weniger stark auf.", correct: true, explanation: "Vegetation reduziert Hitzeinseln und speichert weniger Wärme." },
  { text: "Regenwälder sind für das Weltklima zwar nützlich, aber nicht besonders wichtig.", correct: false, explanation: "Sie beeinflussen Klima, Wasserhaushalt und Biodiversität stark." },
  { text: "Viele Nutzpflanzen sind auf tierische Bestäubung angewiesen.", correct: true, explanation: "Ohne Bestäuber sinken Erträge und Qualität deutlich." },
  { text: "Menschen nutzen nur etwa 10 % ihres Gehirns.", correct: false, explanation: "Fast alle Hirnregionen sind regelmäßig aktiv." },
  { text: "Der menschliche Körper erneuert viele seiner Zellen ständig.", correct: true, explanation: "Haut, Darm und Blut werden kontinuierlich ersetzt." },
  { text: "Blitze schlagen nie zweimal an derselben Stelle ein.", correct: false, explanation: "Hohe Gebäude werden oft mehrfach getroffen." },
  { text: "Haie müssen sich ständig bewegen, um nicht zu ersticken.", correct: true, explanation: "Das gilt für viele, aber nicht für alle Haiarten." },
  { text: "Ein Großteil der weltweiten Arten lebt im Boden oder in Bodennähe.", correct: true, explanation: "Besonders Insekten, Pilze und Mikroorganismen sind dort zuhause." },
  { text: "Insektenrückgang betrifft vor allem seltene Arten, häufige bleiben stabil.", correct: false, explanation: "Auch häufige Arten nehmen stark ab." },
  { text: "Wälder beeinflussen den regionalen Wasserhaushalt.", correct: true, explanation: "Sie speichern Wasser und beeinflussen Niederschläge." },
  { text: "Erneuerbare Energien benötigen keine natürlichen Ressourcen.", correct: false, explanation: "Bau und Materialien brauchen Rohstoffe." },
  { text: "Wenn ein Produkt recycelbar ist, ist es automatisch umweltfreundlich.", correct: false, explanation: "Recyclingquote und Nutzung entscheiden über die Wirkung." },
  { text: "Der Verlust von Biodiversität wirkt sich langfristig auch auf den Menschen aus.", correct: true, explanation: "Nahrung, Klima und Gesundheit hängen davon ab." }
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
