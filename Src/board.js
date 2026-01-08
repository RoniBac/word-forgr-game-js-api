import { state } from "./game.js";

export function placeLetter(index) {
  const slotIndex = state.slots.findIndex(s => s === "");
  if (slotIndex === -1) return;

  state.slots[slotIndex] = state.inventory[index];
  state.inventory.splice(index, 1);
}

export function clearBoard(returnLetters = false) {
  if (returnLetters) {
    state.slots.forEach(letter => {
      if (letter) state.inventory.push(letter);
    });
  }

  state.slots = state.slots.map(() => "");
}

export function getCurrentWord() {
  // toma letras hasta el primer slot vacío
  return state.slots
    .slice(0, state.slots.findIndex(s => s === "") === -1 
      ? state.slots.length 
      : state.slots.findIndex(s => s === "")
    )
    .join("");
}