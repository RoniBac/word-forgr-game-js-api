import { renderUI } from "./ui.js";

console.log("GAME.JS CARGADO");

export const state = {
  points: 50,
  inventory: ["C", "A", "T"],
  slots: ["", "", ""],
  maxSlots: 7,
  usedWords: [] // 👈 HISTORIAL
};

export function initGame() {
  renderUI();
}