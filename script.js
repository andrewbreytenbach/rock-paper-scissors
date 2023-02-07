function getComputerChoice() {
   const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) 
if (playerSelection === computerSelection) {
    return `It's a tie! you both picked ${playerSelection}`;
 } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
 } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
 } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
 } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
 }

   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

// console.log(getComputerChoice());

function getComputerChoice() {
  const choices = ['R', 'P', 'S'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! you both picked ${playerSelection}`;
  } else if (playerSelection === "R" && computerSelection === "S") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "P" && computerSelection === "R") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "S" && computerSelection === "P") {
    return "You win! Scissors beats Paper";
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function roundResults(playerSelection, computerSelection) {
  alert(playRound(playerSelection, computerSelection));
}


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function roundResults(playerSelection, computerSelection) {
  const result = playRound(playerSelection, computerSelection);
  alert(result);
}

roundResults(playerSelection, computerSelection);


