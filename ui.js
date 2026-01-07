import { state, validateWord } from "../Src/game.js";
import { renderInventory } from "../letras/inventory.js";

export function renderUI() {
  renderPoints();
  renderSlots();
  renderInventory();
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

  document.getElementById("slots").textContent = state.slots.length;
}

function renderPoints() {
  document.getElementById("points").textContent = state.points;
}

export function showMessage(text) {
  document.getElementById("message").textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("validate-btn")
    .addEventListener("click", validateWord);

  renderUI();
});