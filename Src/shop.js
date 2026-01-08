import { state } from "./game.js";
import { renderUI } from "./ui.js";

const LETTER_PRICE = 10;
const SLOT_PRICE = 100;

export function initShop() {
  renderLetterShop();
  renderSlotShop();
}

function renderLetterShop() {
  const container = document.querySelector(".shop-letters");
  container.innerHTML = "";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  letters.forEach(letter => {
    const item = document.createElement("div");
    item.className = "shop-item";
    item.textContent = `${letter} (${LETTER_PRICE} pts)`;

    item.addEventListener("click", () => buyLetter(letter));
    container.appendChild(item);
  });
}

function renderSlotShop() {
  const container = document.querySelector(".shop-slots");
  container.innerHTML = "";

  const item = document.createElement("div");
  item.className = "shop-item";
  item.textContent = `Comprar espacio (+1) (${SLOT_PRICE} pts)`;

  item.addEventListener("click", buySlot);
  container.appendChild(item);
}

function buyLetter(letter) {
  if (state.points < LETTER_PRICE) {
    alert("No tienes suficientes puntos");
    return;
  }

  state.points -= LETTER_PRICE;
  state.inventory.push(letter);
  renderUI();
}

function buySlot() {
  if (state.points < SLOT_PRICE) {
    alert("No tienes suficientes puntos");
    return;
  }

  if (state.slots.length >= state.maxSlots) {
    alert("Máximo de espacios alcanzado");
    return;
  }

  state.points -= SLOT_PRICE;
  state.slots.push("");
  renderUI();
}