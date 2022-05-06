//Les variables
const hori = document.querySelector(".hr");
const head = document.querySelector(".head");
const pend = document.querySelector(".pend");
const rightFoot = document.querySelector(".right-foot");
const leftFoot = document.querySelector(".letft-foot");
const bodyEl = document.querySelector(".body");
const rightHand = document.querySelector(".right-hand");
const leftHand = document.querySelector(".left-hand");
const mouthEl = document.querySelector(".mouth");
const ropeEl = document.querySelector(".rope");
const wordEl = document.getElementById("word-el");
const letterEl = document.getElementById("letter-el");
const tryEl = document.getElementById("try_el");
const levelEl = document.getElementById("level");
const laFin = document.getElementById("lafin");
let arrJeux = [];
let essay = "";
document.querySelector;
let bonhomme = [
  hori,
  rightFoot,
  leftFoot,
  rightHand,
  leftHand,
  bodyEl,
  head,
  pend,
  hori,
  ropeEl,
  ropeEl,
];
let stock = "";
let bien = 0;
let count = 0;
const lesMots = [
  "angle",
  "banc",
  "cabinet",
  "chaise",
  "coin",
  "couloir",
  "eau",
  "lit",
  "marche",
  "mur",
  "plafond",
  "porte",
  "rampe",
  "rideau",
  "robinet",
  "sol",
  "sortie",
  "table",
  "tabouret",
  "tapis",
  "vitre",
];
function refreshPage() {
  window.location.reload();
}

function randomWords(myArr) {
  let i = Math.floor(Math.random() * myArr.length);
  const mots = myArr[i];
  levelEl.textContent = `${mots.length} Lettre`;
  wordEl.textContent = "_".repeat(mots.length);
  displayUnder(mots);
  tailleMot(mots);
  document.addEventListener("keydown", (Event) => {
    essay += `${Event.key},`;
    tryEl.innerHTML = essay;
    if (displayUnder(mots).indexOf(Event.key) != -1) {
      console.log("bien");
      bien++;
      let idx = displayUnder(mots).indexOf(Event.key);
      //display la bonne valeur
      String.prototype.replaceAt = function (index, replacement) {
        if (this.indexOf(replacement) != -1) {
          return this.valueOf(replacement);
        }
        return (
          this.substring(0, index) + replacement + this.substring(index + 1)
        );
      };
      wordEl.textContent = wordEl.textContent.replaceAt(idx, Event.key);
      console.log(idx);
      console.log(stock);
      console.log(bien);
      console.log(tailleMot(mots));
      if (bien === tailleMot(mots)) {
        console.log("GG");
        laFin.innerHTML = `<h1>You win🎉</h1> <h3  class="bgd">Press Any key to Replay</h3>`;
      } else if (bien > tailleMot(mots)) {
        refreshPage();
        console.log("cool");
      } else if (count === 9 && bien >= 1) {
        refreshPage();
      }
    } else {
      console.log("non");
      count++;
      bonhomme[count].classList.add("hide");
      console.log(count);
      if (count === 9) {
        console.log("perdu");
        laFin.innerHTML = `<h1>You l🤪se</h1> <h3  class="bgd">Press Any key to Replay</h3>`;
      } else if (bien === tailleMot(mots) && count > 0) {
        refreshPage();
      } else if (count > 9) {
        refreshPage();
      }
    }
  });
  console.log(mots);
  console.log(displayUnder(mots));
}
//replace

function displayUnder(m) {
  return m.split("");
}
randomWords(lesMots);
function leJeux(arr1, arr2) {}

function tailleMot(m) {
  return m.length;
  letterEl.textContent = m.length;
}
function noDouble(service) {
  return service.filter((item, index) => service.indexOf(item) === index);
}
