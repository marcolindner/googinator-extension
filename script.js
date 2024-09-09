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
let gogginsAudio = [
    "audio/quote_0.mp3",
    "audio/quote_1.mp3",
    "audio/quote_2.mp3",
    "audio/quote_3.mp3",
    "audio/quote_4.mp3",
    "audio/quote_5.mp3",
    "audio/quote_6.mp3",
    "audio/quote_7.mp3",
    "audio/quote_8.mp3",
    "audio/quote_9.mp3",
];

var quotesContainer = document.getElementById("goggins-quotes");
var gimmeMore = document.querySelector("#gimmemore");
var audioPlayer = document.getElementById("audioplayer");
gimmeMore.addEventListener("click", getQuote);
// audioPlayer.addEventListener("ended", getQuote);

function getQuote() {
    let randomNumber = Math.floor(Math.random() * gogginsQuotes.length);
    quotesContainer.innerHTML = gogginsQuotes[randomNumber];
    audioPlayer.src = gogginsAudio[randomNumber];
    //audioPlayer.play();
}

getQuote();