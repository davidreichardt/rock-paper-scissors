let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
  }
  return choice;
}

function getHumanChoice() {
  let userInput = window.prompt("Enter 'Rock', 'Paper', or 'Scissors'... ");
  return userInput.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log(
      `Computer chose ${computerChoice} and you chose ${humanChoice}, it's a draw!`
    );
  } else if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'scissors' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'rock')
  ) {
    computerScore++;
    console.log(
      `Computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`
    );
  } else {
    humanScore++;
    console.log(
      `Computer chose ${computerChoice} and you chose ${humanChoice}, you win!`
    );
  }
  return computerScore, humanScore;
}

function playGame(numberOfGames) {
  let iteration = 0;

  while (iteration < numberOfGames) {
    iteration++;
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    console.log(`Computer: ${computerScore}\nYou: ${humanScore}`);
  }

  if (computerScore === humanScore) {
    console.log(
      `Final results:\nComputer:${computerScore}\nYou:${humanScore}\nIt's a draw! Nobody wins.`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Final results:\nComputer:${computerScore}\nYou:${humanScore}\nComputer wins the game! Better luck next time.`
    );
  } else {
    console.log(
      `Final result:\nComputer:${computerScore}\nYou:${humanScore}\nYou win the game! Good job.`
    );
  }
}
