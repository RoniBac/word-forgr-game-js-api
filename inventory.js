import { placeLetter } from "../Src/board.js";
import { state } from "../Src/game.js";

export function renderInventory() {
  const container = document.querySelector(".letters");
  container.innerHTML = "";

  state.inventory.forEach((letter, index) => {
    const div = document.createElement("div");
    div.className = "letter";
    div.textContent = letter;

    div.addEventListener("click", () => placeLetter(index));

    container.appendChild(div);
  });
}