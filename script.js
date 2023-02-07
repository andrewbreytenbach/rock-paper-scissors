
var playerSelection = prompt("Please choose R, P, or S");

function getComputerChoice() {
  const choices = ['R', 'P', 'S'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
  if (playerSelection === getComputerChoice()) {
    return `It's a tie! you both picked ${playerSelection}`;
  } else if (playerSelection === "R" && getComputerChoice() === "S") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "P" && getComputerChoice() === "R") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "S" && getComputerChoice() === "P") {
    return "You win! Scissors beats Paper";
  } else {
    return `You lose! ${getComputerChoice()} beats ${playerSelection}`;
  }
}

function roundResults(playerSelection, computerSelection) {
  alert(playRound(playerSelection, computerSelection));
}

function roundResults(playerSelection, computerSelection) {
  const result = playRound(playerSelection, computerSelection);
  alert(result);
}

roundResults(playerSelection, computerSelection);





