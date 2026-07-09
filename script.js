const heroSection = document.getElementById("hero-section");
const startGame = document.getElementById("start-game");
const gameSection = document.getElementById("game-section");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const score = document.getElementById("score");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

// Function to start the game
startGame.addEventListener("click", function() {
    heroSection.classList.add("hidden");
    gameSection.classList.remove("hidden");
});

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}