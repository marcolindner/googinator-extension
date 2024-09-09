// "Wenn du denkst, du bist am Ende, bist du erst bei 40%. Der wahre Kampf beginnt jetzt.",
// “Schmerz ist der Wachhund des Erfolgs – je mehr du ihn fühlst, desto näher bist du deinem Ziel.”
// “Niemand kommt, um dich zu retten. Du musst selbst dein eigener Held sein.”
// “Hör auf, Ausreden zu finden. Niemand schuldet dir etwas – hol es dir selbst.”
// “Erfolg kommt nicht zu denen, die darauf warten. Er gehört denen, die bereit sind, die Hölle zu durchschreiten.”
// “Der Mensch ist zu unglaublichen Dingen fähig – wenn er bereit ist, durch den Schmerz zu gehen.”
// “Es gibt keinen einfachen Weg. Das Einzige, was zählt, ist, wie viel du bereit bist zu opfern.”
// “Du musst der härteste Motherf*cker in deinem eigenen Kopf sein. Kein Mitleid, nur Fokus.”
// “Jede Sekunde, die du vergeudest, verliert jemand anders nicht. Sei der, der immer weitergeht.”
// “Du kannst der Schwächste im Raum sein, aber wenn du nie aufgibst, bist du der Stärkste im Geist.”

let gogginsQuotes = [
    "Wenn du denkst, du bist am Ende, bist du erst bei 40%. Der wahre Kampf beginnt jetzt.",
    "Schmerz ist der Wachhund des Erfolgs – je mehr du ihn fühlst, desto näher bist du deinem Ziel.",
    "Niemand kommt, um dich zu retten. Du musst selbst dein eigener Held sein.",
    "Hör auf, Ausreden zu finden. Niemand schuldet dir etwas – hol es dir selbst.",
    "Erfolg kommt nicht zu denen, die darauf warten. Er gehört denen, die bereit sind, die Hölle zu durchschreiten.",
    "Der Mensch ist zu unglaublichen Dingen fähig – wenn er bereit ist, durch den Schmerz zu gehen.",
    "Es gibt keinen einfachen Weg. Das Einzige, was zählt, ist, wie viel du bereit bist zu opfern.",
    "Du musst der härteste Motherf*cker in deinem eigenen Kopf sein. Kein Mitleid, nur Fokus.",
    "Jede Sekunde, die du vergeudest, verliert jemand anders nicht. Sei der, der immer weitergeht.",
    "Du kannst der Schwächste im Raum sein, aber wenn du nie aufgibst, bist du der Stärkste im Geist.",
];

var quotesContainer = document.querySelector("#goggiquote");
var gimmeMore = document.querySelector("#gimmemore");
gimmeMore.addEventListener("click", getQuote);

function getQuote() {
    let randomNumber = Math.floor(Math.random() * gogginsQuotes.length);
    console.log("gogginsQuotes:", gogginsQuotes[randomNumber]);
    quotesContainer.innerHTML = gogginsQuotes[randomNumber];
}

getQuote();