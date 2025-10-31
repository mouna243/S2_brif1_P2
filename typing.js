// VARIABLES GLOBALES
let time = 60;
let timerInterval;
let spaceCount = 0;

const elements = {
    timer: document.getElementById('timer'),
    input: document.getElementById('input'),
    compteur: document.getElementById('compteur'),
    taux: document.getElementById('taux'),
    challengeTexte: document.getElementById('challenge_texte')
};

const texteOriginal = "La pluie tombe doucement sur la fenêtre, et chaque goutte semble raconter une histoire différente. Certaines s’écrasent en silence, d’autres glissent lentement, formant de petites rivières éphémères sur la vitre froide. Le son régulier crée une symphonie apaisante, presque hypnotique. Dans cette ambiance douce, le clavier devient un instrument de musique, les doigts suivent la cadence, et chaque mot s’aligne comme une note dans une partition invisible. Plus la concentration grandit, plus la vitesse s’harmonise avec le calme de la pluie.";


// INITIALISATION
function init() {
    setupEventListeners();
    elements.challengeTexte.textContent = texteOriginal;
}

function setupEventListeners() {
    elements.input.addEventListener('input', handleInput);
    elements.taux.addEventListener('click', calculTaux);
}

// GESTION DU TIMER
function timer() {
    timerInterval = setInterval(function() {
        time--;
        elements.timer.textContent = time;

        if (time <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// GESTION DE LA SAISIE
function handleInput() {
    compterEspaces();
    colorierTexte();
}

function compterEspaces() {
    spaceCount = (elements.input.value.match(/ /g) || []).length;
    elements.compteur.textContent = spaceCount;
}

// COLORATION DU TEXTE
function colorierTexte() {
    const texteSaisi = elements.input.value;
    let resultat = "";
    
}
