// HTML-ELEMENT
const backgroundimgEl = document.getElementById("backgroundimg");

// FUNKTIONER

// Funktion för att välja kanintemat
function rabbitTheme() {
    console.log("Kör kanintemat...");
    // Ändra bakgrundsbild till kaninen
    backgroundimgEl.src = "images/rabbit.jpg";
    // Justera bildplacering
    backgroundimgEl.style.objectPosition = "";
}

// Funktion för att välja hundtemat
function dogTheme() {
    console.log("Kör hundtemat...");
    // Ändra bakgrundsbild till hunden
    backgroundimgEl.src = "images/dog.jpg";
    // Justera bildplacering
    backgroundimgEl.style.objectPosition = "25% 0";
}

// Funktion för att välja kattemat
function catTheme() {
    console.log("Kör kattemat...");
    // Ändra bakgrundsbild till katten
    backgroundimgEl.src = "images/cat.jpg";
    // Justera bildplacering
    backgroundimgEl.style.objectPosition = "0 100%";
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