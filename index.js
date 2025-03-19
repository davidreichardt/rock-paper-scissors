const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let humanScore = 0;
let computerScore = 0;

rock.addEventListener('click', clicked);
paper.addEventListener('click', clicked);
scissors.addEventListener('click', clicked);

function clicked(humanChoice) {
  humanChoice = this.id;
  playRound(humanChoice);
}

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

function updateScore() {
  humanScore = 0;
  computerScore = 0;
}

function appendMatchResult(matchResultMessage) {
  let roundDescription = document.querySelector('.round-description');
  matchResultMessage.classList.add('message');
  roundDescription.appendChild(matchResultMessage);
}

function playRound(humanChoice) {
  console.log(humanChoice);
  let computerChoice = getComputerChoice();

  let matchResultMessage = document.createElement('p');
  console.log(computerChoice);

  if (computerChoice === humanChoice) {
    matchResultMessage.textContent = `Computer chose ${computerChoice} and you chose ${humanChoice}, it's a draw!`;
    appendMatchResult(matchResultMessage);
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
}
