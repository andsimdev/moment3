// HTML-ELEMENT och variabler
const backgroundimgEl = document.getElementById("backgroundimg");
const animalSpanEl = document.getElementById("animalspan");
const bigcircleEl = document.getElementById("bigcircle");
const smallcircleEl = document.getElementById("smallcircle");
const ctabtnEl = document.getElementById("ctabtn");
const ctah1El = document.getElementById("ctah1");
const ctah2El = document.getElementById("ctah2");
const navEl = document.getElementById("mainnav");
const navulEl = document.getElementById("mainnavul");
const menuiconEl = document.getElementById("menuicon");
let darkmode = false;
let menushown = true;

// FUNKTIONER

// Funktion för att välja kanintemat
function rabbitTheme() {
    console.log("Kör kanintemat...");
    // Ändra bakgrundsbild till kaninen
    backgroundimgEl.src = "images/rabbit.jpg";
    // Justera bildplacering
    backgroundimgEl.style.objectPosition = "";
    // Modifiera texten
    animalSpanEl.innerHTML = "kanin";
    // Ändra färg på bakgrundscirklar
    bigcircleEl.style.backgroundColor = "";
    smallcircleEl.style.backgroundColor = "";
    // Ändra färg på knapp
    ctabtnEl.style.backgroundColor = "";
}

// Funktion för att välja hundtemat
function dogTheme() {
    console.log("Kör hundtemat...");
    // Ändra bakgrundsbild till hunden
    backgroundimgEl.src = "images/dog.jpg";
    // Justera bildplacering
    backgroundimgEl.style.objectPosition = "25% 0";
    // Modifiera texten
    animalSpanEl.innerHTML = "hund";
    // Ändra färg på bakgrundscirklar
    bigcircleEl.style.backgroundColor = "rgba(9, 205, 217, 0.1)";
    smallcircleEl.style.backgroundColor = "rgba(224, 135, 53, 0.1)";
    // Ändra färg på knapp
    ctabtnEl.style.backgroundColor = "rgb(9, 205, 217)";
}

// Funktion för att välja kattemat
function catTheme() {
    console.log("Kör kattemat...");
    // Ändra bakgrundsbild till katten
    backgroundimgEl.src = "images/cat.jpg";
    // Justera bildplacering
    backgroundimgEl.style.objectPosition = "0 100%";
    // Modifiera texten
    animalSpanEl.innerHTML = "katt";
    // Ändra färg på bakgrundscirklar
    bigcircleEl.style.backgroundColor = "rgba(10, 250, 26, 0.1)";
    smallcircleEl.style.backgroundColor = "rgba(235, 180, 201, 0.1)";
    // Ändra färg på knapp
    ctabtnEl.style.backgroundColor = "rgb(96, 255, 106)";
}

// Funktion för att ändra tema
function changeAnimal() {
    // Spara källan för aktuell bakgrundsbild
    let srcstring = backgroundimgEl.src;

    // Om källan innehåller "rabbit"
    if(srcstring.includes("rabbit") == true) {
        console.log("Kaninen är vald");
        // Kör hundtemat
        dogTheme();

    // Om källan innehåller "dog"
    } else if(srcstring.includes("dog") == true) {
        console.log("Hunden är vald");
        // Kör kattemat
        catTheme();

    } else {
        console.log("Katten är vald");
        // Kör kanintemat
        rabbitTheme();
    }
}

// Funktion för mörkt läge
function darkMode() {
    // Kontrollera om mörkt läge är av
    if(darkmode == false) {
        document.body.style.backgroundColor = "#2B2B2B";
        ctah1El.style.color = "#F1F1F1";
        ctah2El.style.color = "#F1F1F1";
        darkmode = true;
    } else {
        document.body.style.backgroundColor = "";
        ctah1El.style.color = "";
        ctah2El.style.color = "";
        darkmode = false;
    }
}

// Funktion för att visa/dölja menyn
function toggleMenu() {
    if(menushown == false) {
        // Lägg på bakgrundsfärg på menyn
        navEl.style.backgroundColor="#F1F1F1";
        navulEl.style.display = "flex";
        menuiconEl.src = "images/close.svg";
        menushown = true;
    } else {
        // Ta bort bakgrundsfärg på menyn
        navEl.style.backgroundColor="";
        navulEl.style.display = "none";
        menuiconEl.src = "images/menu.svg";
        menushown = false;
    }
}

// Kör toggleMenu en gång för att stänga menyn vid inladdning
window.onload = toggleMenu();