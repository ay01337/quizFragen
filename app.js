const items = [
  { text: "Goldfische haben ein Gedächtnis von nur drei Sekunden.", correct: false, explanation: "Goldfische können sich bis zu 5 Monate zurück erinnern." },
  { text: "Ein einziger Quadratmeter Boden kann bis zu 100.000 Lebewesen beheimaten.", correct: true, explanation: "Mikroorganismen, Insektenlarven, Würmer und Pilze leben extrem dicht im Boden. z.B. alte gefallene Bäume" },
  { text: "Plastik zerfällt in der Umwelt mit der Zeit vollständig aber halt sehr langsam.", correct: false, explanation: "Es zerfällt meist nur zu Mikroplastik und verschwindet nicht wirklich." },
  { text: "Ohne Insekten würde die weltweite Erntemenge für Obst und Gemüse um bis zu 90 Prozent einbrechen.", correct: true, explanation: "Viele Nutzpflanzen sind stark von Bestäubung abhängig." },
  { text: "Der Eiffelturm schrumpft im Sommer bis zu 30 Zentimeter.", correct: false, explanation: "Der Eiffelturm wird im Sommer nicht kürzer, sondern durch Hitze bedingt bis zu 30 Zentimeter höher. Bei hohen Temperaturen dehnt sich das Eisen der Konstruktion aus." },
  { text: "Vögel tragen zur Verbreitung vieler Pflanzenarten bei, indem sie Samen über weite Strecken transportieren.", correct: true, explanation: "Samen werden gefressen und später wieder ausgeschieden und verteilt." },
  { text: "Der Amazonas-Regenwald erzeugt mehr als 50 % des weltweiten Sauerstoffs.", correct: false, explanation: "Er produziert nur 6 bis 9% des weltweiten Sauerstoffs. Und dieser wird fast vollständig von TIeren und Pflanzen vor Ort verbraucht." },
  { text: "Trinkwasser ist weltweit vorhanden, aber sehr ungleich verteilt.", correct: true, explanation: "Knappheit ist meist ein Infrastrukturproblem und nicht der Mangel an wasser" },
  { text: "Bäume haben einen sarken Einfluss auf das Stadtklima.", correct: true, explanation: "Bäume können die Umgebung durch Verdunstung und Schatten stark kühlen." },
  { text: "Korallen sind Tiere, und leben in enger Gemeinschaft mit Algen.", correct: true, explanation: "Die Algen liefern Energie durch Photosynthese." },
  { text: "Mikroplastik ist weniger schädlich als großer Plastikmüll.", correct: false, explanation: "Noch schlimmer, da es leichter in Organismen und Nahrungsketten gelangt." },
  { text: "Menschen nutzen nur etwa 10 % ihres Gehirns.", correct: false, explanation: "Fast alle Hirnregionen sind regelmäßig aktiv." },
  { text: "Haie müssen sich ständig bewegen, um nicht zu ersticken.", correct: true, explanation: "Das gilt für viele, aber nicht für alle Haiarten." },
  { text: "Bananen wachsen an Bäumen.", correct: false, explanation: "Bananen wachsen an Stauden, die keine Verholzung aufweisen und somit botanisch gesehen Kräuter sind." },
  { text: "Eine Glasscherbe im Wald kann durch den Brennglaseffekt Waldbrände auslösen.", correct: false, explanation: "Wissenschaftliche Versuche zeigen, dass herkömmliches Glas kaum genug Energie bündeln kann, um trockenes Laub zu entzünden; meist sind Blitze oder weggeworfene Zigaretten schuld." },
  { text: "Der Mensch hat mehr als fünf Sinne.", correct: true, explanation: "Neben Sehen, Hören, Riechen, Schmecken und Tasten haben wir Sinne für Temperatur, Schmerz, Gleichgewicht und Körperwahrnehmung." },
  { text: "Ein Blitz schlägt niemals zweimal am selben Ort ein.", correct: false, explanation: "Blitze schlagen sogar sehr häufig mehrfach am selben Ort ein, besonders in hohe Gebäude wie das Empire State Building." },
  { text: "Die Chinesische Mauer ist das einzige Bauwerk, das man mit bloßem Auge vom Mond aus sehen kann.", correct: false, explanation: "Vom Mond aus sieht man gar keine Bauwerke. Sogar aus einer niedrigen Erdumlaufbahn ist die Mauer ohne Hilfsmittel kaum von der Umgebung zu unterscheiden." },
  { text: "Stiere werden durch die Farbe Rot aggressiv.", correct: false, explanation: "Stiere sind farbenblind für Rot. Sie reagieren nur auf die wedelnden Bewegungen des Tuches." },
  { text: "Ein Oktopus hat insgesamt drei Herzen.", correct: true, explanation: "Zwei Herzen pumpen Blut zu den Kiemen, das dritte versorgt den restlichen Körper." },
  { text: "Erwachsene haben mehr Knochen als Babys.", correct: false, explanation: "Babys werden mit ca. 300 Knochen geboren; viele wachsen später zusammen, sodass Erwachsene nur noch etwa 206 haben." },
  { text: "Tomaten wurden früher als Giftpflanzen betrachtet.", correct: true, explanation: "In Europa hielt man sie lange für Zierpflanzen, da man glaubte, die glänzenden Früchte seien giftig." },
  { text: "Kamele speichern in ihren Höckern Wasser für lange Wüstenreisen.", correct: false, explanation: "In den Höckern wird Fett gespeichert, das als Energiereserve dient. Wasser speichern sie im gesamten Körper (Blutkreislauf)." },
  { text: "Der Mount Everest ist der höchste Berg der Erde, wenn man vom Erdmittelpunkt aus misst.", correct: false, explanation: "Vom Erdmittelpunkt aus gemessen ist der Chimborazo in Ecuador am höchsten, da die Erde am Äquator dicker ist." },
  { text: "Pilze sind botanisch gesehen Pflanzen.", correct: false, explanation: "Pilze bilden ein eigenes Reich. Sie betreiben keine Photosynthese und sind genetisch enger mit Tieren verwandt als mit Pflanzen." },
  { text: "In einer Handvoll fruchtbarer Erde leben mehr Lebewesen als Menschen auf der Welt.", correct: true, explanation: "Die Anzahl der Bakterien, Einzeller und Mikroorganismen in einer Handvoll Erde geht in die Milliarden." },
  { text: "Fledermäuse sind blind und navigieren nur mit ihren Ohren", correct: false, explanation: "Fledermäuse können eigentlich recht gut sehen, nutzen aber in der Nacht zusätzlich ihre Echoortung." },
  { text: "Die Haut ist das größte Organ des menschlichen Körpers.", correct: true, explanation: "Sie macht etwa 15 bis 20 Prozent des Körpergewichts aus und erfüllt lebenswichtige Schutzfunktionen." },
  { text: "Es gibt mehr Sterne im Universum als Sandkörner auf allen Stränden der Erde.", correct: true, explanation: "Schätzungen zufolge gibt es etwa 10 bis 70 Mal mehr Sterne als Sandkörner." },
  { text: "Blauwale sind die lautesten Tiere der Welt.", correct: true, explanation: "Ihre Rufe können bis zu 188 Dezibel erreichen und über hunderte Kilometer im Ozean gehört werden." },
  { text: "Kaffee entzieht dem Körper Wasser.", correct: false, explanation: "Kaffee wirkt zwar leicht harntreibend, kann aber zur täglichen Flüssigkeitsbilanz voll dazugezählt werden." }
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
