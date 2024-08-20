"use strict";

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const showBanner = document.getElementById("show");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.round(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

function updateBanner() {
  let message = `Score: Player ${humanScore} & Computer ${computerScore}. `;

  if (humanScore > computerScore) {
    message += "You`re winning";
  } else if (computerScore > humanScore) {
    message += "Computer is winning";
  } else {
    message += "It's a tie!";
  }
  const p = document.createElement("p");
  p.textContent = message;
  showBanner.appendChild(p);
}

function playRound(event) {
  const playerChoice = event.target.value;
  const computerChoice = getComputerChoice();

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (playerChoice === computerChoice) {
    console.log("Draw");
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  }

  updateBanner();
}

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);

updateBanner();
