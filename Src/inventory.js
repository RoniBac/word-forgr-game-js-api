import { state } from "./game.js";
import { placeLetter } from "./board.js";
import { renderUI } from "./ui.js";

export function renderInventory() {
  const container = document.querySelector(".letters");
  container.innerHTML = "";

  state.inventory.forEach((letter, index) => {
    const div = document.createElement("div");
    div.className = "letter";
    div.textContent = letter;

    div.addEventListener("click", () => {
      placeLetter(index);
      renderUI();
    });

    container.appendChild(div);
  });
}