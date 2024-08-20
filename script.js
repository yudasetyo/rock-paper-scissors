"use strict";

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const calc = Math.round(Math.random() * 2);
  return choice[calc];
}

function getHumanChoice() {
  const input = prompt("Input your choice ?");
  return input;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const lowerText = humanChoice.toLowerCase();

    if (lowerText === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (lowerText === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (lowerText === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (lowerText === computerChoice) {
      console.log(`Draw!`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();
