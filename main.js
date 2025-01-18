//task trovo e dichiaro elementi
const lamp = document.getElementById('white_lamp');
const button = document.getElementById('btn');

//task eventlistener al button con arrow/ternary IF
button.addEventListener('click', () =>
(button.innerHTML.includes("ACCENDI")
    ? (lamp.src = "./img/yellow_lamp.png", button.innerHTML = "SPEGNI")
    : (lamp.src = "./img/white_lamp.png", button.innerHTML = "ACCENDI")
));




//---BONUS---piccolo bonus lavorando con le classi e modificando quelle di bootstrap...
//task riconosco l'elemento
// const button1 = document.getElementById('btn1');

//task vado a selezionarlo con l'eventlistener e creandogli un IF ternario per farlo funzionare
//* voglio che il btn da btn-outline-dark cambi classe e diventi btn-outline-waning
// button1.addEventListener('click', () =>
// (button1.innerHTML.includes("ON")
//     ? (lamp.src = "./img/yellow_lamp.png", button.innerHTML = "OFF")
//     : (lamp.src = "./img/white_lamp.png", button.innerHTML = "ON")
// ));



