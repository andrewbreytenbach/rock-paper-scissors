function getComputerChoice() {
   const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

// console.log(getComputerChoice());