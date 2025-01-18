//task trovo e dichiaro elementi
const whiteLamp = document.getElementById('white_lamp');
const button = document.getElementById('btn');

//task eventlistener al button con arrow/ternary IF
button.addEventListener('click', () =>
(button.innerHTML.includes("ACCENDI")
    ? (whiteLamp.src = "./img/yellow_lamp.png", button.innerHTML = "SPEGNI")
    : (whiteLamp.src = "./img/white_lamp.png", button.innerHTML = "ACCENDI")));

