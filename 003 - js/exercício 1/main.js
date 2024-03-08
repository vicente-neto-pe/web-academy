const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");
const insertX = ["Patolino", "Perna longa", "Presuntinho"];
const insertY = ["Zona leste", "Cabaré da leila", "Programa do ratinho"];
const insertZ = ["Robou uma viatura da polícia", "Começou a pregar a bíblia", "Deitou no chão e dormiu em meio ao moviemnto"];
const us = document.getElementById("us");
const defaultTempInFarenheit = 94;
const defaultWeightInPounds = 300;

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const convertFahrenheitToCelsius = () => {
  return Math.round(((defaultTempInFarenheit - 32) * 5) / 9) + " graus celsius";
};

const convertPoundsToKg = () => {
  return Math.round(defaultWeightInPounds * 0.453592) + " kilos";
};

const result = () => {
  const name = customName.value || "Bob";
  const temperature = us.checked ? convertFahrenheitToCelsius() : defaultTempInFarenheit + " graus farenheit";
  const weight = us.checked ? convertPoundsToKg() : defaultWeightInPounds + " libras";
  story.textContent = `Estava ${temperature} lá fora, então ${randomValueFromArray(insertX)} saiu para uma caminhada. 
  Quando ele chegou em ${randomValueFromArray(insertY)}, ele observava em choque, então ${randomValueFromArray(insertZ)}. 
  ${name} viu tudo, mas não estava surpreso — ${randomValueFromArray(insertX)} pesa ${weight}, e estava um dia quente.`;
  story.style.visibility = "visible";
};

randomize.addEventListener("click", result);
