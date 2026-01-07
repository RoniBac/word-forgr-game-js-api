import { state } from "./game.js";

export function placeLetter(index) {
  const slotIndex = state.slots.findIndex(s => s === "");
  if (slotIndex === -1) return;

  state.slots[slotIndex] = state.inventory[index];
  state.inventory.splice(index, 1);
}

export function clearBoard(stateRef) {
  stateRef.slots = stateRef.slots.map(() => "");
}

/* ✅ ESTA FUNCIÓN FALTABA */
export function getCurrentWord() {
  return state.slots.join("");
}