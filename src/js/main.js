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
const menuitemsEl = document.getElementsByClassName("menuitem");
let darkmode = false;
let menushown = true;

// FUNKTIONER

// Funktion för att välja kanintemat
function rabbitTheme() {
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
    if (srcstring.includes("rabbit") == true) {
        // Kör hundtemat
        dogTheme();

        // Om källan innehåller "dog"
    } else if (srcstring.includes("dog") == true) {
        // Kör kattemat
        catTheme();

    } else {
        // Kör kanintemat
        rabbitTheme();
    }
}

// Funktion för mörkt läge
function darkMode() {
    // Kontrollera om mörkt läge är av
    if (darkmode == false) {
        document.body.style.backgroundColor = "#2B2B2B";
        ctah1El.style.color = "#F1F1F1";
        ctah2El.style.color = "#F1F1F1";
        // KONTROLLERA OM MENYN ÄR UTE
        if (menushown == true) {
            // Lägg på bakgrundsfärg på menyn
            navEl.style.backgroundColor = "#2B2B2B";
            // Lägg ljus färg på menylänkar
            for (let i = 0; i < menuitemsEl.length; i++) {
                menuitemsEl[i].style.color = "#F1F1F1";
            }
            menuiconEl.src = "images/closelight.svg";
        }
        darkmode = true;
    } else {
        document.body.style.backgroundColor = "";
        ctah1El.style.color = "";
        ctah2El.style.color = "";
        // KONTROLLERA OM MENYN ÄR UTE
        if (menushown == true) {
            // Lägg på bakgrundsfärg på menyn
            navEl.style.backgroundColor = "#F1F1F1";
            // Återställ färg på menylänkar
            for (let i = 0; i < menuitemsEl.length; i++) {
                menuitemsEl[i].style.color = "";
            }
            menuiconEl.src = "images/close.svg";
        }
        darkmode = false;
    }
}

// Funktion för att visa/dölja menyn
function toggleMenu() {
    if (menushown == false) {

        // Kontrollera om mörkt eller ljust läge valts
        if (darkmode == true) {
            // Använd mörk bakgrundsfärg
            // Lägg på bakgrundsfärg på menyn
            navEl.style.backgroundColor = "#2B2B2B";
            // Lägg ljus färg på menylänkar
            for (let i = 0; i < menuitemsEl.length; i++) {
                menuitemsEl[i].style.color = "#F1F1F1";
            }
            menuiconEl.src = "images/closelight.svg";
        } else {
            // Använd ljus bakgrundsfärg
            // Lägg på bakgrundsfärg på menyn
            navEl.style.backgroundColor = "#F1F1F1";
            // Återställ färg på menylänkar
            for (let i = 0; i < menuitemsEl.length; i++) {
                menuitemsEl[i].style.color = "";
            }

            menuiconEl.src = "images/close.svg";
        }
        navulEl.style.display = "flex";
        menushown = true;

    } else {
        // Ta bort bakgrundsfärg på menyn
        navEl.style.backgroundColor = "";
        navulEl.style.display = "none";
        menuiconEl.src = "images/menu.svg";
        menushown = false;
    }
}

// Kör toggleMenu en gång för att stänga menyn vid inladdning
window.onload = toggleMenu();