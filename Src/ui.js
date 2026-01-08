import { state } from "./game.js";
import { renderInventory } from "./inventory.js";
import { getCurrentWord, clearBoard } from "./board.js";
import { isValidWord } from "./dictionary.js";
import { initShop } from "./shop.js";

console.log("UI.JS CARGADO");

export function renderUI() {
  renderPoints();
  renderSlots();
  renderInventory();
  renderHistory();
}
function renderHistory() {
  const list = document.getElementById("history-list");
  list.innerHTML = "";

  state.usedWords.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    list.appendChild(li);
  });
}

function renderSlots() {
  const wordArea = document.querySelector(".word-area");
  wordArea.innerHTML = "";

  state.slots.forEach(letter => {
    const div = document.createElement("div");
    div.className = "slot";
    div.textContent = letter || "_";
    wordArea.appendChild(div);
  });
}

function renderPoints() {
  document.getElementById("points").textContent = state.points;
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("validate-btn")
    .addEventListener("click", async () => {
      const word = getCurrentWord();

      if (word.length === 0) {
  alert("Coloca al menos una letra");
  return;
}
      const valid = await isValidWord(word);
if (state.usedWords.includes(word)) {
  alert(`"${word}" has already been used ❌`);
  clearBoard(true);
  renderUI();
  return;
}
      if (!valid) {
        alert(`"${word}" no es una palabra válida ❌`);
        clearBoard(true); // devolver letras
        renderUI();
        return;
      }

      // palabra válida
      const pointsEarned = word.length * 20;
      state.points += pointsEarned;

      alert(`"${word}" válida ✔ +${pointsEarned} puntos`);
      
      state.usedWords.push(word);

      clearBoard(false); // NO devolver letras
      renderUI();
    });
    
    // 🧹 BOTÓN LIMPIAR
  document
    .getElementById("clear-btn")
    .addEventListener("click", () => {
      clearBoard(true); // siempre devolver letras
      renderUI();
    });
  initShop();
  renderUI();
  
});