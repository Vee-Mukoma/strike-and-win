const heroSection = document.getElementById("hero-section");
const startGame = document.getElementById("start-game");
const gameSection = document.getElementById("game-section");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const score = document.getElementById("score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

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

// Function to get player choice and determine the winner
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock") {
        result.textContent = "You win!";
    } else if (playerChoice == computerChoice) {
        result.textContent = "It's a tie!";
    } else {
        result.textContent = "You lose";
    }
}