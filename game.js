import { isValidWord } from "../jugador/dictionary.js";
import { getCurrentWord, clearBoard } from "./board.js";
import { renderUI, showMessage } from "../palabras/ui.js";

console.log("GAME.JS CARGADO");


export const state = {
  points: 50,
  inventory: ["A", "S", "C"],
  slots: ["", "", ""],
  maxSlots: 7
};

export async function validateWord() {
  const word = getCurrentWord(state.slots);

  if (state.slots.includes("")) {
    showMessage("Completa todos los espacios");
    return;
  }

  showMessage("Validando palabra...");

  const valid = await isValidWord(word);

  if (!valid) {
    showMessage(`"${word}" no es válida ❌`);
    return;
  }

  const points = calculatePoints(word);
  state.points += points;

  showMessage(`"${word}" válida ✔ +${points} pts`);

  clearBoard(state);
  renderUI(state);
}

function calculatePoints(word) {
  return word.length * 10;
}