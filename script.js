const heroSection = document.getElementById("hero-section");
const startGame = document.getElementById("start-game");
const gameSection = document.getElementById("game-section");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const score = document.getElementById("score");

// Function to start the game
startGame.addEventListener("click", function() {
    heroSection.classList.add("hidden");
    gameSection.classList.remove("hidden");
});