import { Game } from "./game.js";
window.addEventListener("DOMContentLoaded", () => {
  const game = new Game({ canvasId: "game", width: 800, height: 450 });
  game.start();
  console.log("[GAME] Platformer engine initialized.");
});
